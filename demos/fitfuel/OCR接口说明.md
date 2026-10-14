# 营养成分表接口

默认没有连接任何收费或免费的图像 OCR 服务。选择照片后会显示图片并进入手动填写；不会根据食物照片估算热量，也不会自动保存识别草稿。

共享模块 `src/utils/ocr.js` 提供 `setProvider`、`recognizeNutritionLabel`、`parseText`。网页版对应 `js/ocr.js`，函数完全一致。

```js
import OCR from '../utils/ocr.js';
OCR.setProvider(async imagePath => {
  // 由业务后端完成图片上传、鉴权、调用真实识别服务。
  // 这里必须返回服务实际识别结果；缺失字段用 null。
  return await yourBackend.recognizeNutritionLabel(imagePath);
});
```

Provider 返回契约：

```json
{
  "provider": "服务名称",
  "rawText": "原始识别全文",
  "fields": {
    "name": "实际识别的名称或空字符串",
    "brand": "实际识别的品牌或空字符串",
    "servingMode": "per100g",
    "servingWeight": null,
    "energyUnit": "kJ",
    "kcal": 840,
    "protein": 10,
    "fat": 5,
    "carb": 20,
    "sodium": null,
    "sugar": null,
    "fiber": null
  },
  "originalEnergy": {"value":840,"unit":"kJ"},
  "uncertainFields": ["name","servingMode","kcal","protein","fat","carb"]
}
```

这里字段 `kcal` 表示输入框的原始能量数值，单位以 `energyUnit` 为准。保存模块才执行 kJ / 4.184 转 kcal、每份 × 100 / servingWeight 转每100g。已保存食物的顶层 `kcal` 永远是每100g的 kcal，原始数值保存在 `sourceNutrition`；原始识别文本及确认时间保存在 `recognition`。

`servingMode` 支持 `per100g`、`serving`；不明确时留空。每份模式必须有克重。每100ml不能直接当每100g，应由用户核实重量后录入。多列营养表、NRV%、小数识别和模糊字符必须由服务及人工复核处理。

`parseText` 只是显式标签文字解析器，不是图像识别。所有识别字段均进入“请确认”状态，用户必须勾选核对后才能保存。图片不会被本项目上传或永久写入存储。接入后端后，开发者需配置小程序合法域名、服务鉴权和用户隐私告知；密钥只能放在服务端。

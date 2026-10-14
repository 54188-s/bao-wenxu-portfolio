"use strict";
window.FitOCR = (() => {
  let provider=null;
  const required=['name','servingMode','kcal','protein','fat','carb'];
  function parseText(raw) {
    const rawText=String(raw||'').slice(0,30000),text=rawText.normalize('NFKC');
    const match=pattern=>text.match(pattern);
    const nutrient=(label,unit='g|克')=>{const m=match(new RegExp('(?:'+label+')\\s*[:：]?\\s*([0-9]+(?:\\.[0-9]+)?)\\s*(?:'+unit+')','i'));return m?Number(m[1]):null};
    const en=match(/(?:能量|热量|energy)\s*[:：]?\s*([0-9]+(?:\.[0-9]+)?)\s*(kcal|kJ|千焦|千卡|大卡)/i);
    const sw=match(/每份(?:重量)?\s*[:：]?\s*[（(]?\s*([0-9]+(?:\.[0-9]+)?)\s*(?:g|克)/i);
    const servingMode=/每\s*100\s*(?:g|克)/i.test(text)?'per100g':/每份/.test(text)?'serving':'';
    const energyUnit=en?(/kj|千焦/i.test(en[2])?'kJ':'kcal'):'';
    const fieldLine=label=>{const m=match(new RegExp('(?:^|\\n)(?:'+label+')\\s*[:：]\\s*([^\\n]+)'));return m?m[1].trim():''};
    const fields={name:fieldLine('产品名称|食品名称|名称'),brand:fieldLine('品牌'),servingMode,servingWeight:sw?Number(sw[1]):null,energyUnit,kcal:en?Number(en[1]):null,protein:nutrient('蛋白质|protein'),fat:nutrient('脂肪|fat'),carb:nutrient('碳水化合物|碳水|carbohydrate'),sodium:nutrient('钠|sodium','mg|毫克'),sugar:nutrient('糖|sugar'),fiber:nutrient('膳食纤维|fiber')};
    return {fields,rawText,provider:'text-parser',uncertainFields:[...required,...(!energyUnit?['energyUnit']:[]),...(servingMode==='serving'&&!sw?['servingWeight']:[])],originalEnergy:en?{value:Number(en[1]),unit:en[2]}:null,convertedKcal:en?(energyUnit==='kJ'?Number(en[1])/4.184:Number(en[1])):null};
  }
  function setProvider(next) {if(next!==null&&typeof next!=='function')throw Error('OCR Provider 必须为函数');provider=next}
  async function recognizeNutritionLabel(image) {
    if (!image) throw Error('请先选择营养成分表图片');
    if (!provider) return {status:'manual-required',fields:{},rawText:'',uncertainFields:[...required,'energyUnit'],provider:'unconfigured',message:'尚未配置 OCR 服务。请对照图片手动填写，或粘贴营养表文字；不会自动推测缺失数据。'};
    const result=await provider(image);
    if (!result || typeof result!=='object') throw Error('识别服务未返回有效结果，请手动填写');
    // Providers return draft values only. Saving is owned by the explicit confirmation form.
    return {status:'needs-confirmation',fields:result.fields||{},rawText:String(result.rawText||''),provider:String(result.provider||'configured'),uncertainFields:Array.isArray(result.uncertainFields)?result.uncertainFields:required,originalEnergy:result.originalEnergy||null};
  }
  return {setProvider,recognizeNutritionLabel,parseText,isConfigured:()=>!!provider};
})();

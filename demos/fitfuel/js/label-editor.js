"use strict";
window.FitFoodEditor=(food,onSave,withPhoto=false)=>{
  const {$,esc}=FitUI,v=FitFood.formValues(food);
  let recognition=food?.recognition||null,url='',controller,busy=false,closed=false;
  const input=(key,label,type='text')=>`<label>${label}<input name="${key}" id="edit-${key}" type="${type}" value="${esc(v[key]??'')}" ${['kcal','protein','fat','carb'].includes(key)?'required min="0" step="any"':''} ${key==='servingWeight'?'min="0.01" step="any"':''} ${key==='name'?'required maxlength="60"':''}></label>`;
  FitUI.modal(`<div class="editor-heading"><h2>${food?'编辑':'创建'}自定义食物</h2><button type="button" id="editorClose" class="ghost" aria-label="关闭食物编辑">关闭</button></div>
    <div class="label-layout"><details id="photoSection" ${withPhoto?'open':''}><summary>拍照 / 上传营养成分表</summary>
    <p class="muted">选择清晰、正面的单列营养表。图片仅在当前浏览器识别，不上传。</p>
    <div class="actions"><label class="secondary">选择图片<input id="labelImage" type="file" accept="image/png,image/jpeg,image/webp,image/bmp"></label><label class="secondary">拍照<input id="labelCamera" type="file" accept="image/*" capture="environment"></label></div>
    <button id="sampleLabel" type="button" class="ghost">用示例图片体验识别</button><small class="muted">示例是人工排版的测试标签，不是实拍包装。</small>
    <img id="labelPreview" alt="营养成分表预览" hidden>
    <p id="ocrStatus" role="status" aria-live="polite">选择图片后开始本地文字识别，结果不会自动保存。</p>
    <button id="cancelOCR" type="button" class="secondary" hidden>取消识别，手动填写</button><p id="ocrWarnings" class="ocr-warnings"></p>
    <details><summary>查看 / 修改识别原文</summary><label>营养表文字<textarea id="rawLabel" rows="5" placeholder="每100g，能量 840kJ，蛋白质 10g…"></textarea></label><button id="parseLabel" type="button" class="secondary">从原文重新提取</button></details><p id="energyConversion" class="muted"></p></details>
    <div class="label-fields"><p class="review-hint">请核对数据基准和单位。空白项需要手动补充，识别数值也可以修改。</p>
    <form id="foodEditForm" class="form-grid">${input('name','食物名称')}${input('brand','品牌（可选）')}
    <label>分类<select name="cat" id="edit-cat">${FitData.FOOD_CATEGORIES.map(cat=>`<option ${v.cat===cat?'selected':''}>${cat}</option>`).join('')}</select></label>
    <label>营养数据基准<select name="servingMode" id="edit-servingMode" required><option value="">请确认</option><option value="per100g" ${v.servingMode==='per100g'?'selected':''}>每100g</option><option value="serving" ${v.servingMode==='serving'?'selected':''}>每份</option></select></label>
    ${input('servingWeight','每份重量 g（按份必填）','number')}<label>能量单位<select name="energyUnit" id="edit-energyUnit" required><option value="">请确认</option><option value="kcal" ${v.energyUnit==='kcal'?'selected':''}>kcal</option><option value="kJ" ${v.energyUnit==='kJ'?'selected':''}>kJ</option></select></label>
    ${input('kcal','能量（按所选单位）','number')}${input('protein','蛋白质 g','number')}${input('fat','脂肪 g','number')}${input('carb','碳水化合物 g','number')}${input('gi','GI（可选）','number')}${input('aliases','别名（逗号分隔）')}
    <label class="full">备注<textarea name="notes">${esc(v.notes||'')}</textarea></label><label class="check full"><input id="confirmNutrition" type="checkbox" required>我已对照原图核对名称、数据基准、份量、单位及营养数值</label>
    <p class="error full" id="foodEditError" role="alert"></p><div class="actions full"><button id="saveFood" class="primary" type="submit">确认并保存食物</button><button id="editCancel" class="secondary" type="button">取消</button></div></form></div></div>`);
  const modal=$('modal'),active=()=>!closed&&modal.open&&!!$('foodEditForm');
  $('editCancel').onclick=FitUI.close;$('editorClose').onclick=FitUI.close;
  modal.addEventListener('close',()=>{closed=true;controller?.abort();if(url)URL.revokeObjectURL(url);},{once:true});
  function setBusy(value){busy=value;for(const id of ['labelImage','labelCamera','sampleLabel','parseLabel','saveFood'])$(id).disabled=value;$('cancelOCR').hidden=!value;$('foodEditForm').setAttribute('aria-busy',String(value));}
  function invalidate(){$('confirmNutrition').checked=false;}
  $('foodEditForm').addEventListener('input',event=>{if(event.target.id!=='confirmNutrition')invalidate();});
  $('rawLabel').addEventListener('input',invalidate);
  function apply(result){
    recognition=result;$('rawLabel').value=result.rawText||'';$('ocrStatus').textContent=result.message||'已提取为待确认字段，请对照原文逐项核对。';$('ocrWarnings').textContent=(result.warnings||[]).join(' ');
    for(const key of ['name','brand','servingMode','servingWeight','energyUnit','kcal','protein','fat','carb']){const field=$('edit-'+key);field.value=result.fields?.[key]??'';field.closest('label').classList.add('needs-confirm');}
    $('energyConversion').textContent=result.originalEnergy?`原始能量 ${result.originalEnergy.value} ${result.originalEnergy.unit}。${result.originalEnergy.unit==='kJ'?'保存时除以 4.184，转换为 kcal。':''}按份数据会再按重量折算为每100g。`:'请核对原图中的能量单位及数据基准。';invalidate();
  }
  async function recognize(file){
    if(!file||busy)return;
    if(!/^image\/(png|jpeg|webp|bmp)$/.test(file.type)){$('ocrStatus').textContent='请使用 PNG、JPG、WEBP 或 BMP 图片；其他格式请先转换。';return;}
    if(file.size>12*1024*1024){$('ocrStatus').textContent='图片超过 12 MB，请裁剪后重试。';return;}
    if(url)URL.revokeObjectURL(url);url=URL.createObjectURL(file);$('labelPreview').src=url;$('labelPreview').hidden=false;
    controller=new AbortController();setBusy(true);invalidate();$('ocrWarnings').textContent='';$('ocrStatus').textContent='正在准备本地识别…';recognition=null;$('rawLabel').value='';$('energyConversion').textContent='';
    for(const key of ['name','brand','servingMode','servingWeight','energyUnit','kcal','protein','fat','carb'])$('edit-'+key).value='';
    try{const result=await FitOCR.recognizeNutritionLabel(file,{signal:controller.signal,onProgress:message=>{if(active())$('ocrStatus').textContent=message;}});if(active())apply(result);}
    catch(error){if(active())$('ocrStatus').textContent=error.message+'。可对照图片手动填写。';}
    finally{if(active())setBusy(false);}
  }
  $('labelImage').onchange=event=>recognize(event.target.files[0]);$('labelCamera').onchange=event=>recognize(event.target.files[0]);$('cancelOCR').onclick=()=>controller?.abort();
  $('sampleLabel').onclick=async()=>{if(busy)return;try{if(location.protocol==='file:')throw Error('请通过“启动完整预览.cmd”打开，以体验图片识别');const response=await fetch('images/nutrition-sample.png');if(!response.ok)throw Error('示例图片暂不可用，请选择自己的图片');await recognize(new File([await response.blob()],'nutrition-sample.png',{type:'image/png'}));}catch(error){if(active())$('ocrStatus').textContent=error.message;}};
  $('parseLabel').onclick=()=>{if(!busy)apply(FitOCR.parseText($('rawLabel').value));};
  $('foodEditForm').onsubmit=event=>{event.preventDefault();if(busy||!$('confirmNutrition').checked)return;try{const fields=Object.fromEntries(new FormData(event.target));const saved=FitStore.saveCustomFood({...fields,id:food?.id,recognition:recognition?{...recognition,rawText:$('rawLabel').value,confirmedAt:new Date().toISOString()}:null});FitUI.close();FitUI.toast('食物已保存，可选择份量加入今日饮食');onSave?.(saved);}catch(error){$('foodEditError').textContent=error.message;}};
};

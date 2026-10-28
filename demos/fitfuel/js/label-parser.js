"use strict";
window.FitOCR = (() => {
  let provider = null;
  const required = ['name','servingMode','energyUnit','kcal','protein','fat','carb'];
  function parseText(raw) {
    const rawText = String(raw || '').slice(0,30000);
    const text = rawText.normalize('NFKC')
      .replace(/([\u3400-\u9fff])[^\S\n]+(?=[\u3400-\u9fff])/g,'$1')
      .replace(/([\u3400-\u9fff])[^\S\n]+(?=[\u3400-\u9fff])/g,'$1')
      .replace(/k\s*j\b/gi,'kJ').replace(/k\s*cal\b/gi,'kcal');
    const nutrient = (label,unit='g|克') => {
      const m=text.match(new RegExp('(?:^|\\n|[;；,，])\\s*(?:'+label+')\\s*[:：]?\\s*([0-9]+(?:\\.[0-9]+)?)\\s*(?:'+unit+')(?![a-z])','im'));
      return m ? Number(m[1]) : null;
    };
    const en=text.match(/(?:^|\n|[;；,，])\s*(?:能量|热量|energy|calories)\s*[:：]?\s*([0-9]+(?:\.[0-9]+)?)\s*(kcal|kJ|千焦|千卡|大卡)/im);
    const sw=text.match(/(?:每份(?:重量)?|serving\s*size)\s*[:：]?\s*[（(]?\s*([0-9]+(?:\.[0-9]+)?)\s*(?:g|克)/i);
    const per100=/(?:每\s*100\s*(?:g|克)|per\s*100\s*g\b)/i.test(text),serving=/每份|per\s*serving|serving\s*size/i.test(text);
    const perMl=/(?:每\s*100\s*(?:ml|毫升)|per\s*100\s*ml)/i.test(text);
    const warnings=[],multi=(per100&&serving)||(per100&&perMl);
    let servingMode=per100?'per100g':serving?'serving':'';
    if(multi){servingMode='';warnings.push('检测到多个营养数据基准，请选择单列后重新识别，或手动填写。');}
    if(perMl){servingMode='';warnings.push('检测到毫升基准，不能直接按克保存。请先核实重量和对应数值。');}
    const line=label=>{const m=text.match(new RegExp('(?:^|\\n)\\s*(?:'+label+')\\s*[:：]\\s*([^\\n]+)','i'));return m?m[1].trim():'';};
    const energyUnit=en?(/kj|千焦/i.test(en[2])?'kJ':'kcal'):'';
    const fields={name:line('产品名称|食品名称|名称|product\\s*name'),brand:line('品牌|brand'),servingMode,servingWeight:sw?Number(sw[1]):null,energyUnit,kcal:en?Number(en[1]):null,protein:nutrient('蛋白质|protein'),fat:nutrient('脂肪|total\\s*fat|fat'),carb:nutrient('碳水化合物|碳水|total\\s*carbohydrates?|carbohydrates?'),sodium:nutrient('钠|sodium','mg|毫克'),sugar:nutrient('糖|sugars?'),fiber:nutrient('膳食纤维|fiber')};
    if(multi||perMl)for(const key of ['kcal','protein','fat','carb','sodium','sugar','fiber'])fields[key]=null;
    const originalEnergy=!multi&&!perMl&&en?{value:Number(en[1]),unit:energyUnit}:null;
    return {fields,rawText,provider:'text-parser',warnings,uncertainFields:[...required,...(servingMode==='serving'?['servingWeight']:[])],originalEnergy};
  }
  function setProvider(next){if(next!==null&&typeof next!=='function')throw Error('OCR Provider 必须为函数');provider=next;}
  async function recognizeNutritionLabel(image,options={}){
    if(!image)throw Error('请先选择营养成分表图片');
    if(!provider)return {status:'manual-required',fields:{},rawText:'',uncertainFields:required,provider:'unconfigured',message:'图片识别暂不可用。请对照图片手动填写，或粘贴营养表文字。'};
    const result=await provider(image,options);
    if(!result||typeof result!=='object')throw Error('未获得识别结果，请重试或手动填写');
    return {...result,status:'needs-confirmation',fields:result.fields||{},rawText:String(result.rawText||''),provider:String(result.provider||'configured'),uncertainFields:Array.isArray(result.uncertainFields)?result.uncertainFields:required};
  }
  return {setProvider,recognizeNutritionLabel,parseText,isConfigured:()=>!!provider};
})();

"use strict";
window.FitFood = (() => {
  const numeric = value => value !== '' && value !== null && value !== undefined && Number.isFinite(Number(value));
  const round = (value,d=6) => Math.round(value*10**d)/10**d;
  function normalize(input) {
    const name=String(input.name||'').trim(), brand=String(input.brand||'').trim();
    if (!name || name.length>60) throw Error('请输入 1–60 字的食物名称');
    const cat=input.cat||input.category;
    if (!FitData.FOOD_CATEGORIES.includes(cat)) throw Error('请选择食物分类');
    if (!['per100g','serving'].includes(input.servingMode)) throw Error('请确认数据基准：每100g 或每份');
    const servingWeight=input.servingMode==='serving' ? Number(input.servingWeight) : (numeric(input.servingWeight)?Number(input.servingWeight):null);
    if (input.servingMode==='serving' && (!numeric(input.servingWeight)||servingWeight<=0||servingWeight>3000)) throw Error('每份重量必须大于 0 且不超过 3000 g');
    if (servingWeight!==null && (!(servingWeight>0)||servingWeight>3000)) throw Error('请填写有效的每份重量');
    const energyUnit=input.energyUnit||'kcal';
    if (!['kcal','kJ'].includes(energyUnit)) throw Error('请确认能量单位');
    const values={};
    for (const key of ['kcal','protein','fat','carb']) {
      if (!numeric(input[key])||Number(input[key])<0) throw Error('请确认并填写有效的热量、蛋白质、脂肪和碳水');
      values[key]=Number(input[key]);
    }
    const sourceNutrition={...values,energyUnit,servingMode:input.servingMode,servingWeight};
    if (energyUnit==='kJ') values.kcal/=4.184;
    const ratio=input.servingMode==='serving'?100/servingWeight:1;
    for (const key of Object.keys(values)) values[key]=round(values[key]*ratio);
    if (values.kcal>1000 || ['protein','fat','carb'].some(k=>values[k]>100) || values.protein+values.fat+values.carb>100.01) throw Error('折算为每100g后的营养数据超出范围，请检查份量和单位');
    const gi=input.gi===''||input.gi===null||input.gi===undefined?null:Number(input.gi);
    if (gi!==null && (!Number.isFinite(gi)||gi<0||gi>100)) throw Error('GI 请填写 0–100，或留空');
    return {id:input.id||'',name,brand,cat,category:cat,...values,gi,servingMode:input.servingMode,servingWeight,
      aliases:Array.isArray(input.aliases)?input.aliases.map(String).filter(Boolean):String(input.aliases||'').split(/[,，]/).map(s=>s.trim()).filter(Boolean),
      notes:String(input.notes||'').slice(0,1000),custom:true,sourceNutrition,recognition:input.recognition||null,
      createdAt:input.createdAt||new Date().toISOString(),updatedAt:new Date().toISOString()};
  }
  function grams(food,quantity,unit='grams') {
    if (!numeric(quantity)||Number(quantity)<=0) throw Error('请输入大于 0 的份量');
    let amount=Number(quantity);
    if (unit==='servings') {
      if (!numeric(food.servingWeight)||food.servingWeight<=0) throw Error('该食物没有每份重量，请按克记录');
      amount*=food.servingWeight;
    } else if (unit!=='grams') throw Error('请选择克数或份数');
    if (amount>3000) throw Error('单条记录请勿超过 3000 g');
    return round(amount,3);
  }
  function formValues(food) {
    if (!food) return {name:'',brand:'',cat:'其他',servingMode:'per100g',servingWeight:'',energyUnit:'kcal',kcal:'',protein:'',fat:'',carb:'',gi:'',aliases:'',notes:''};
    return {...food,...(food.sourceNutrition||{}),gi:food.gi??'',aliases:(food.aliases||[]).join('，'),servingWeight:food.servingWeight??'',energyUnit:food.sourceNutrition?.energyUnit||'kcal'};
  }
  return {normalize,grams,formValues,numeric};
})();

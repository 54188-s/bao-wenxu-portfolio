"use strict";
window.FitLocalOCR=(()=>{
  const base=new URL('../vendor/ocr/',document.currentScript.src);
  let library;
  function loadLibrary(){
    if(window.Tesseract)return Promise.resolve();
    if(!library)library=new Promise((resolve,reject)=>{
      const script=document.createElement('script');script.src=new URL('tesseract.min.js',base).href;
      script.onload=resolve;script.onerror=()=>{script.remove();library=null;reject(Error('识别组件加载失败，请刷新重试或手动填写'));};document.head.append(script);
    });return library;
  }
  async function recognize(image,{signal,onProgress=()=>{}}={}){
    if(!/^https?:$/.test(location.protocol))throw Error('图片识别需要通过本地预览地址打开。请双击预览文件夹内的“启动完整预览.cmd”，也可直接手动填写');
    if(image.size>12*1024*1024)throw Error('图片超过 12 MB，请裁剪营养表区域后重试');
    let worker,stopped=false,rejectStop;
    const stoppedPromise=new Promise((_,reject)=>{rejectStop=reject;});
    const stop=message=>{if(stopped)return;stopped=true;worker?.terminate().catch(()=>{});rejectStop(Error(message));};
    const cancel=()=>stop('已取消识别');signal?.addEventListener('abort',cancel,{once:true});
    const timer=setTimeout(()=>stop('识别超过 90 秒，请裁剪清晰区域后重试，或手动填写'),90000);
    const run=async()=>{
      if(signal?.aborted)throw Error('已取消识别');await loadLibrary();if(stopped)return;
      onProgress('正在准备本地识别模型…');
      worker=await Tesseract.createWorker('chi_sim+eng',1,{
        workerPath:new URL('worker.min.js',base).href,corePath:base.href,langPath:new URL('lang/',base).href,workerBlobURL:false,cacheMethod:'none',
        logger:message=>{if(!stopped&&message.status==='recognizing text')onProgress('正在识别文字 '+Math.round(message.progress*100)+'%');},
        errorHandler:()=>stop('识别组件发生错误，请刷新后重试，或对照图片手动填写')
      });
      if(stopped){await worker.terminate();return;}
      await worker.setParameters({tessedit_pageseg_mode:'6',preserve_interword_spaces:'1'});
      const start=performance.now(),{data}=await worker.recognize(image),parsed=FitOCR.parseText(data.text);
      const found=['kcal','protein','fat','carb'].filter(key=>parsed.fields[key]!==null).length;
      return {...parsed,provider:'tesseract.js-6.0.1-local',durationMs:Math.round(performance.now()-start),message:found?`识别出 ${found}/4 项核心营养数值，仍需逐项核对。`:'未提取到完整营养数值。请裁剪清晰的单列营养表重试，或手动填写。'};
    };
    try{return await Promise.race([run(),stoppedPromise]);}
    finally{clearTimeout(timer);signal?.removeEventListener('abort',cancel);stopped=true;if(worker)await worker.terminate().catch(()=>{});}
  }
  FitOCR.setProvider(recognize);return {recognize};
})();

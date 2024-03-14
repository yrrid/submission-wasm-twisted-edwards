var instantiation=null;

async function wasmInstantiate(message) {
  if(instantiation===null) {
    const data=message.data;
    const module=data.module;
    const sharedMemory=data.sharedMemory;
    const workerID=message.data.workerID;
    var   sp, hb;

    instantiation=await WebAssembly.instantiate(module, {env: {memory: sharedMemory}});
    sp=instantiation.exports.__stack_pointer;
    hb=instantiation.exports.__heap_base;
    sp.value=hb.value + 65536 + 65536*workerID
  }
  return instantiation;
}

onmessage = (message) => {
  const workerID=message.data.workerID;
  const bits=message.data.bits;
  wasmInstantiate(message).then(wasm => {
    wasm.exports.computeMSM(bits);
    if(workerID==0)
      postMessage('msm done');
  });
};

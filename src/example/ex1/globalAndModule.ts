function WhatisGlobalVariable(global: typeof globalThis){
    //js deki window node muhitinde global objectidir
    console.log("GLOBAL OBJECT: ", global);
    global.console.log("Hello World");
    global.console.log("==============================================")
}
WhatisGlobalVariable(global);


const WhatisModule = (module: NodeModule) => {
    console.log("MODULE IS",module)
}
WhatisModule(module);



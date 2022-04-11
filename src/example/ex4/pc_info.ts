const os = require("os");
const fS = require("fs");

export function infoPcFn() {
    const freeRam = byteToGB(os.freemem());
    const totalRam = byteToGB(os.totalmem());
    const usedRam = +totalRam - (+freeRam);
    const count_of_cpu = os.cpus().length;

    fS.writeFile("txt/pc_info.txt", myComputerInformation(), () => {

    });

    function byteToGB(byte: number) {
        return (byte / 1024 / 1024 / 1024).toFixed(2);
    }

    function myComputerInformation() {
        const pcInfo = `TotalRam = ${totalRam}  FreeRam  = ${freeRam} usedRam = ${usedRam} countOfCpu = ${count_of_cpu}`;
        console.log(pcInfo);
        return pcInfo;
    }
}
 
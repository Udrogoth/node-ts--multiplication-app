import { yarg } from "./config/plugins/yargs.plugin";
import { serverApp } from "./presentation/server-app";


// console.log(yarg);

(async () => {
    await main();
})();


async function main() {


    const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = yarg;
    serverApp.run({ base, limit, showTable, fileName, fileDestination });


}
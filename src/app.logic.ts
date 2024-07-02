import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';




console.log('===============================');
console.log('===========Tabla del 5=========');
console.log('===============================');

const tabla = () => {

    const { b: base, l: limit, s: showTable } = yarg;
    let data = '';

    for (let i = 1; i <= limit; i++) {
        data += `${base} x ${i} = ${base * i}\n`;
    }

    const dirPath = 'outputs';
    fs.mkdirSync(dirPath, { recursive: true });
    fs.writeFileSync(`${dirPath}/tabla-${base}.txt`, data)

    if (yarg.s) {
        return data
    }
    return 'Fin del Programa!!!'
}


const resultado = (tabla());
console.log(resultado);



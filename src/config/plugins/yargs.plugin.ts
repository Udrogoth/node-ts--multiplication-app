import { argv } from 'process';
import yargs, { option } from 'yargs';
import { hideBin } from 'yargs/helpers'



export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'multiplication table base'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: true,
        default: 10,
        describe: 'multiplication limit'
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'table',
        describe: 'File name',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File destination'
    })
    .check((argv, options) => {
        if (argv.b < 1) throw 'Error: base must be a number > 0';
        return true;
    })
    .parseSync()
// las interfaces son pasos estrictos que se tiene
//que cumplir

// --------------------------------------------------
// Interface de creacion de tabla
export interface CreateTableUseCase {
    execute: (options: CreateTableOptions) => string;
}

// interface de la optiones / parametros
export interface CreateTableOptions {
    base: number;
    limit?: number;
}

export class CreateTable implements CreateTableUseCase {
    constructor() {
        /**
         * 
         * DI - dependincy Injection
         * 
        */
    }


    execute({ base, limit = 10 }:CreateTableOptions) {
        let outPutData = '';
        for (let i = 1; i <= limit; i++) {
            outPutData += `${base} x ${i} = ${base * i}\n`;
        }

        return outPutData;
    }



}
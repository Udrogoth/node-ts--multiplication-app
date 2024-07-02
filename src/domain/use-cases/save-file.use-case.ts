import fs from 'fs';


// difiniendo las normas de uso

interface saveFileUseCase {
    execute: (options: Options) => boolean;
}

// difiniendo las normas de uso saveFileOptions

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
}

export class SaveFile implements saveFileUseCase {

    constructor() {
        /** repository: StorageRepository  */
    }

    execute(
        {
            fileContent,
            fileDestination = 'outputs',
            fileName = 'table' 
        }: Options): boolean {

        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/tabla-${fileName}.txt`, fileContent)
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

}
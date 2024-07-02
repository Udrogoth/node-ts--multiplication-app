
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface runOptions {
    base: number,
    limit: number,
    showTable: boolean,
    fileName: string,
    fileDestination: string,
}


export class serverApp {


    static run({ base, limit, showTable, fileName, fileDestination }: runOptions) {
        console.log('Server Running...');


        const table = new CreateTable().execute({ base, limit });
        const wasCreate = new SaveFile().execute(
            {
                fileContent: table,
                fileDestination: fileDestination,
                fileName: fileName,
            });
        if (showTable) console.log(table);

        (wasCreate) ? console.log('file created!!!') : console.log('Error to Create File');



    }

}
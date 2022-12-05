import "reflect-metadata";
import {startServer} from "./server";
import { AppDataSource } from "./Connection/Connection";

const puerto = 3000;

async function main()
{
    try
    {
        
        AppDataSource.initialize();
        const app = await startServer();
        app.listen(puerto);
        console.log(`server on http://localhost:${puerto}/graphql`);
    }
    catch(err)
    {
        console.error(err);
    }
}

 main();

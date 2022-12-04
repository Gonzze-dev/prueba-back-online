import server from "./server";
import { AppDataSource } from "./Connection/Connection";
import { APP_PORT } from "./config";

const puerto = Number(APP_PORT);

const main = () =>
{
    try
    {
        AppDataSource.initialize();
        server.listen(puerto);
        console.log(`server on http://localhost:${puerto}/graphql`);
    }
    catch(err)
    {
        console.error(err);
    }
}

main();

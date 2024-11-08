import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export const connectToPeopleDatabase = async () => {
    try{
        await client.connect();
        console.log("connectado a la DB listado_de_profesionales");
        return client.db("listado_de_profesionales");
    } catch(error) {
        console.error(error);
        throw error
    }
}

export const connectToProductsDatabase = async () => {
    try{
        await client.connect();
        console.log("connectado a la DB: cursos_y_productos");
        return client.db("cursos_y_productos");
    } catch(error) {
        console.error(error);
        throw error
    }
}
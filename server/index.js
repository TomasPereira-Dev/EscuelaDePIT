import express from "express"; 
import cors from "cors";
import dotenv from "dotenv";
import "dotenv/config";
import { connectToPeopleDatabase } from "./DB/connect.js";
import { connectToProductsDatabase } from "./DB/connect.js";
import { profesionalesRouter } from "./routes/profesionales.js";
import { cursosRouter } from "./routes/cursos.js";


dotenv.config();

const app =  express();
const port = process.env.PORT ?? 3000;

app.use(cors());
app.disable("x-powered-by");

app.use("/profesionales", profesionalesRouter);
app.use("/cursos", cursosRouter);

export const peopleDb = connectToPeopleDatabase();
export const productsDb = connectToProductsDatabase();

app.listen(port, () => {
    console.log("el servidor corre en localhost", port);
})

export default app;
import { Router } from "express";
import { productsDb } from "../index.js";

export const cursosRouter = Router();

cursosRouter.get("/", async (req, res) => {
    const collection =  (await productsDb).collection("cursos").find({}).toArray();
    res.send(await collection);
})
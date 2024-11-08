import { Router } from "express";
import { peopleDb } from "../index.js"; 

export const profesionalesRouter = Router();

profesionalesRouter.get("/", async (req, res) => {
    const collection =  (await peopleDb).collection("profesionales").find({}).toArray();
    res.send(await collection);

})

profesionalesRouter.get("/provincia/:provincia", async (req, res) => {
    const { provincia } = req.params;
    const collection =  (await peopleDb).collection("profesionales").find({provincia}).toArray();
    res.send(await collection);
})
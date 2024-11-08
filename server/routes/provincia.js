import { Router } from "express";
import db from "../index.js";

const router = Router();

router.get("/provincia/:provincia", async (req, res) => {
    const { provincia } = req.params;
    const collection =  (await db).collection("profesionales").find({provincia: provincia}).toArray();
    res.send(await collection);
})
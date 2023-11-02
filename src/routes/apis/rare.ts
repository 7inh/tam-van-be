import express from "express";
import RareController from "src/controllers/rare.controller";

const rare = express.Router();

rare.get("/get_all", RareController.getAll);

export default rare;

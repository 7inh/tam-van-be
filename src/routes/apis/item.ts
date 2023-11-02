import express from "express";
import ItemController from "src/controllers/item.controller";

const item = express.Router();

item.get("/get_all", ItemController.getAll);

export default item;

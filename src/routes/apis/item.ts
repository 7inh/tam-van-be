import express from "express";
import ItemController from "src/controllers/item.controller";

const item = express.Router();

item.get("/get_all", ItemController.getAll);
item.get("/get_per_page/:page/:perPage", ItemController.getPerPage);

export default item;

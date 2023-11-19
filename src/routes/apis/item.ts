import express from "express";
import ItemController from "src/controllers/item.controller";

const item = express.Router();

item.get("/get_all", ItemController.getAll);
item.get("/get_per_page/:page/:perPage", ItemController.getPerPage);
item.get("/get_total", ItemController.getTotal);
item.get("/get_by_id/:id", ItemController.getById);

export default item;

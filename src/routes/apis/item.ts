import express from "express";
import ItemController from "src/controllers/item.controller";

const item = express.Router();

item.get("/get_all", ItemController.getAll);
item.get("/get_per_page/:page/:perPage", ItemController.getPerPage);
item.get("/get_total", ItemController.getTotal);
item.get("/get_by_id/:id", ItemController.getById);
item.get("/get_by_ids/:ids", ItemController.getByIds);
item.get("/get_by_name/:name", ItemController.getByName);
item.get("/get_random", ItemController.getRandom);
item.get("/get_popular", ItemController.getPopular);
item.get("/get_newest", ItemController.getNewest);
item.get("/get_coming_soon", ItemController.getComingSoon);

export default item;

import express from "express";
import ItemEpsController from "src/controllers/item_eps.controller";

const itemEps = express.Router();

itemEps.get("/get_by_item_id/:id", ItemEpsController.getByItemId);
itemEps.get("/get_price_by_item_eps_ids", ItemEpsController.getPriceByItemEpsIds);

export default itemEps;

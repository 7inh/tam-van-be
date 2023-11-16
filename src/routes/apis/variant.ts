import express from "express";
import VariantController from "../../controllers/variant.controller";

const variant = express.Router();

variant.get("/get_all", VariantController.getAll);

export default variant;

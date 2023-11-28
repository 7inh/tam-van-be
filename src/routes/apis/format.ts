import express from "express";
import FormatController from "src/controllers/format.controller";

const format = express.Router();

format.get("/get_all", FormatController.getAll);

export default format;

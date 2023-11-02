import express from "express";
import MaterialController from "src/controllers/material.controller";

const material = express.Router();

material.get("/get_all", MaterialController.getAll);

export default material;

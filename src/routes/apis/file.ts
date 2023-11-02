import express from "express";
import MiddleWare from "src/utils/middleware";
import FileController from "src/controllers/file.controller";

const file = express.Router();

file.post("/upload", MiddleWare.uploader.single("pdf"), FileController.uploadFile);

export default file;

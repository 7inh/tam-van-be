import express from "express";
import api from "./apis";

const routes = express.Router();

routes.use("/api", api);

export default routes;

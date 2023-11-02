import express from "express";
import AvailabilityController from "src/controllers/availability.controller";

const availability = express.Router();

availability.get("/get_all", AvailabilityController.getAll);

export default availability;

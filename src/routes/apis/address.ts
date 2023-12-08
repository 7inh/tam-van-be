import express from "express";
import AddressController from "src/controllers/address.controller";

const address = express.Router();

address.get("/province", AddressController.getProvince);
address.get("/district/:provinceId", AddressController.getDistrict);
address.get("/ward/:districtId", AddressController.getWard);
address.get("/price", AddressController.getPrice);

export default address;

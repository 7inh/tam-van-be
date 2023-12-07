import express from "express";
import CouponController from "src/controllers/coupon.controller";

const coupon = express.Router();

coupon.get("/get_coupon/:code", CouponController.getByCode);

export default coupon;

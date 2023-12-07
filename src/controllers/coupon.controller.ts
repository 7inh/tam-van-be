import express from "express";
import CouponService from "src/services/coupon-service/coupon.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const CouponController = {
    getByCode: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { code } = req.params;

            const couponDatabase = await CouponService.query.getByCode(code);

            if (couponDatabase) {
                return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(couponDatabase);
            }

            return next(new Error(ERROR_MESSAGE.NOT_FOUND));
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default CouponController;

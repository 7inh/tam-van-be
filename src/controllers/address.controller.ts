import express from "express";
import AddressService from "src/services/address-service/address.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const AddressController = {
    getProvince: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const province = await AddressService.query.getProvince();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(province);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getDistrict: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const { provinceId } = req.params;

            const district = await AddressService.query.getDistrict(provinceId);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(district);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getWard: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { districtId } = req.params;

            const ward = await AddressService.query.getWard(districtId);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(ward);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getPrice: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const {
                senderProvince,
                senderDistrict,
                receiverProvince,
                receiverDistrict,
                productWeight,
            } = req.query;

            if (
                !senderProvince ||
                !senderDistrict ||
                !receiverProvince ||
                !receiverDistrict ||
                !productWeight
            ) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const price = await AddressService.query.getPrice({
                senderProvince: Number(senderProvince),
                senderDistrict: Number(senderDistrict),
                receiverProvince: Number(receiverProvince),
                receiverDistrict: Number(receiverDistrict),
                productWeight: Number(productWeight),
            });

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(price);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default AddressController;

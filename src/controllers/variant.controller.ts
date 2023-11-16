import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "../utils/definitions";
import express from "express";
import VariantService from "../services/variant-service/variant.service";

const VariantController = {
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const allCompany = await VariantService.query.getAll();
            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(allCompany);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default VariantController;

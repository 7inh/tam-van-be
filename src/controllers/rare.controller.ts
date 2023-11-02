import express from "express";
import RareService from "src/services/rare-service/rare.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const RareController = {
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const allCompany = await RareService.query.getAll();
            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(allCompany);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default RareController;

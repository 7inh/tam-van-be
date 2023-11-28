import express from "express";
import FormatService from "src/services/format-service/format.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const FormatController = {
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const materialDatabase = await FormatService.query.getAll();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(materialDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default FormatController;

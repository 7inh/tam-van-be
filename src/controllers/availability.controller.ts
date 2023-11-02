import express from "express";
import AvailabilityService from "src/services/availability-service/availability.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const AvailabilityController = {
    getAll: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const availabilityDatabase = await AvailabilityService.query.getAll();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(availabilityDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default AvailabilityController;

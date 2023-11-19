import express from "express";
import ItemService from "src/services/item-service/item.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ItemController = {
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const itemsDatabase = await ItemService.query.getAll();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getPerPage: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { page, perPage } = req.params;

            if (!page || !perPage) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }
            const itemsDatabase = await ItemService.query.getPerPage(
                parseInt(page),
                parseInt(perPage)
            );

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ItemController;

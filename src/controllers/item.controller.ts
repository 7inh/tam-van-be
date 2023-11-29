import express from "express";
import ItemService from "src/services/item-service/item.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ItemController = {
    getAll: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const itemsDatabase = await ItemService.query.getAll();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemsDatabase);
        } catch (error) {
            console.log(error);
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
    getTotal: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const total = await ItemService.query.getTotal();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(total);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getById: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { id } = req.params;

            if (!id) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemDatabase = await ItemService.query.getById(parseInt(id));

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getByIds: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { ids } = req.params;

            if (!ids) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemIds: number[] = ids.split(",").map(Number);
            const itemDatabase = await ItemService.query.getByIds(itemIds);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getByName: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { name } = req.params;

            if (!name) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemDatabase = await ItemService.query.getByName(name);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getRandom: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const itemDatabase = await ItemService.query.getRandom();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getPopular: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const itemDatabase = await ItemService.query.getPopular();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getNewest: async (_req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const itemDatabase = await ItemService.query.getNewest();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getComingSoon: async (
        _req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const itemDatabase = await ItemService.query.getComingSoon();

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ItemController;

import express from "express";
import { isOrderByType } from "src/common/util";
import ItemService from "src/services/item-service/item.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";
import { OrderByType } from "src/utils/types/type";

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
            const { format, availability, rare, variant, title, orderBy, priceRange } = req.query;

            if (!page || !perPage) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const formatIds: number[] = format ? format.toString().split(",").map(Number) : [];
            const availabilityIds: number[] = availability
                ? availability.toString().split(",").map(Number)
                : [];
            const rareIds: number[] = rare ? rare.toString().split(",").map(Number) : [];
            const variantIds: number[] = variant ? variant.toString().split(",").map(Number) : [];
            const priceRangeIds: number[] = priceRange
                ? priceRange.toString().split(",").map(Number)
                : [];

            const itemsDatabase = await ItemService.query.getPerPage(
                parseInt(page),
                parseInt(perPage),
                {
                    format: formatIds,
                    availability: availabilityIds,
                    rare: rareIds,
                    variant: variantIds,
                    title: title ? title.toString() : "",
                    orderBy: isOrderByType(orderBy?.toString() || "")
                        ? (orderBy?.toString() as OrderByType)
                        : "newest",
                    priceRange: priceRangeIds,
                }
            );

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemsDatabase);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getTotal: async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        try {
            const { format, availability, rare, variant, title } = req.query;

            const formatIds: number[] = format ? format.toString().split(",").map(Number) : [];
            const availabilityIds: number[] = availability
                ? availability.toString().split(",").map(Number)
                : [];
            const rareIds: number[] = rare ? rare.toString().split(",").map(Number) : [];
            const variantIds: number[] = variant ? variant.toString().split(",").map(Number) : [];
            const total = await ItemService.query.getTotal({
                format: formatIds,
                availability: availabilityIds,
                rare: rareIds,
                variant: variantIds,
                title: title ? title.toString() : "",
            });

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
    updateSoldByIds: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const { items } = req.body;

            if (!items) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemDatabase = await ItemService.mutate.updateSoldByIds(items);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemDatabase);
        } catch (error) {
            console.log(error);
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ItemController;

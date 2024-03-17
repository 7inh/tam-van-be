import express from "express";
import { isArrayString } from "src/common/util";
import ItemEpsService from "src/services/item-eps-service/item-eps.service";
import { ERROR_MESSAGE, SUCCESS_DETAIL, SUCCESS_MESSAGE } from "src/utils/definitions";

const ItemEpsController = {
    getByItemId: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const { id } = req.params;

            if (!id) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemEpsByItemId = await ItemEpsService.query.getByItemId(id);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemEpsByItemId);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
    getPriceByItemEpsIds: async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        try {
            const { item_eps_ids } = req.query;

            if (!item_eps_ids || !isArrayString(item_eps_ids)) {
                return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
            }

            const itemEpsPrice = await ItemEpsService.query.getPriceByItemEpsIds(item_eps_ids);

            return res.status(SUCCESS_DETAIL[SUCCESS_MESSAGE.OK].status).json(itemEpsPrice);
        } catch (error) {
            return next(new Error(ERROR_MESSAGE.BAD_REQUEST));
        }
    },
};

export default ItemEpsController;

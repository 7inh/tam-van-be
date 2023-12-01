import { updateSoldByIds } from "src/services/item-service/item.mutate";
import {
    getAll,
    getById,
    getByIds,
    getPerPage,
    getTotal,
    getByName,
    getRandom,
    getPopular,
    getNewest,
    getComingSoon,
} from "./item.query";

const ItemService = {
    query: {
        getAll,
        getPerPage,
        getTotal,
        getById,
        getByIds,
        getByName,
        getRandom,
        getPopular,
        getNewest,
        getComingSoon,
    },
    mutate: {
        updateSoldByIds,
    },
};

export default ItemService;

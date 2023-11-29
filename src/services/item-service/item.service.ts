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
};

export default ItemService;

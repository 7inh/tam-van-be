import { getAll, getById, getPerPage, getTotal } from "./item.query";

const ItemService = {
    query: {
        getAll,
        getPerPage,
        getTotal,
        getById,
    },
};

export default ItemService;

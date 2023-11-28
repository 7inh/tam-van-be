import { getAll, getById, getByIds, getPerPage, getTotal } from "./item.query";

const ItemService = {
    query: {
        getAll,
        getPerPage,
        getTotal,
        getById,
        getByIds,
    },
};

export default ItemService;

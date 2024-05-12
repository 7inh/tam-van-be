import { getByItemId, getPriceByItemEpsIds } from "src/services/item-eps-service/item-eps.query";

const ItemEpsService = {
    query: {
        getByItemId,
        getPriceByItemEpsIds,
    },
    mutate: {},
};

export default ItemEpsService;

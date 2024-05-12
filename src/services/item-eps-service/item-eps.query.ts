import database from "src/database/database";

export const getByItemId = async (item_id: string) => {
    return await database("item_eps").select("*").where("item_id", item_id);
};

export const getPriceByItemEpsIds = async (item_eps_ids: string[]) => {
    return await database("item_eps")
        .select({
            id: "id",
            current_price: "current_price",
        })
        .whereIn("id", item_eps_ids);
};

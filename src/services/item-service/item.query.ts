import database from "src/database/database";

export async function getAll() {
    return await database("item").select("*").orderBy("id", "asc");
}

export async function getPerPage(page: number, perPage: number) {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
        })
        .orderBy("id", "asc")
        .limit(perPage)
        .offset((page - 1) * perPage);
}

export async function getTotal() {
    return await database("item").count("id", { as: "total" }).first();
}

export async function getById(id: number) {
    return await database("item").select("*").where({ id }).first();
}

import database from "src/database/database";

// get all but not sold value
export async function getAll() {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            author: "item.author",
            cover: "item.cover",
            description: "item.description",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
            size: "item.size",
            weight: "item.weight",
            pages: "item.pages",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",
            variant: "item.variant_id",

            publisher: "item.publisher",
        })
        .orderBy("id", "asc")
        .limit(10);
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
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            author: "item.author",
            cover: "item.cover",
            description: "item.description",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
            size: "item.size",
            weight: "item.weight",
            pages: "item.pages",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",
            variant: "item.variant_id",

            publisher: "item.publisher",
        })
        .where({ id })
        .first();
}

export async function getByIds(ids: number[]) {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            author: "item.author",
            cover: "item.cover",
            description: "item.description",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
            size: "item.size",
            weight: "item.weight",
            pages: "item.pages",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",
            variant: "item.variant_id",

            publisher: "item.publisher",
        })
        .whereIn("id", ids);
}

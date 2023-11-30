import database from "src/database/database";
import { FilterOptions } from "src/utils/types/type";

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

export async function getPerPage(page: number, perPage: number, options: FilterOptions) {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
            publisher: "item.publisher_id",
            description: "item.description",
            author: "item.author",
        })
        .where((builder) => {
            if (options.format.length > 0) {
                builder.whereIn("format_id", options.format);
            }
            if (options.availability.length > 0) {
                builder.whereIn("availability_id", options.availability);
            }
            if (options.rare.length > 0) {
                builder.whereIn("rare_id", options.rare);
            }
            if (options.variant.length > 0) {
                builder.whereIn("variant_id", options.variant);
            }
            if (options.title) {
                builder.where("title", "like", `%${options.title}%`);
            }
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

            publisher: "item.publisher_id",
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

            publisher: "item.publisher_id",
        })
        .whereIn("id", ids);
}

export async function getByName(name: string) {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
        })
        .where("title", "like", `%${name}%`);
}

export async function getRandom() {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
            publisher: "item.publisher_id",
            description: "item.description",
            author: "item.author",
        })
        .where("availability_id", 2)
        .orderByRaw(database.raw("RANDOM()"))
        .limit(3);
}

export async function getPopular() {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
        })
        .orderBy("sold", "desc")
        .limit(8);
}

export async function getNewest() {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
        })
        .orderBy("crawl_at", "desc")
        .limit(8);
}

export async function getComingSoon() {
    return await database("item")
        .select({
            id: "item.id",
            title: "item.title",
            cover: "item.cover",
            current_price: "item.current_price",
            discount: "item.discount",
            old_price: "item.old_price",
        })
        .where("availability_id", 1)
        .orderBy("crawl_at", "asc")
        .limit(8);
}

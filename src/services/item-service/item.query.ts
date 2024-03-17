import database from "src/database/database";
import { FilterOptions, OrderByType } from "src/utils/types/type";

const mapOrderBy = (orderBy: OrderByType) => {
    switch (orderBy) {
        case "newest":
            return "crawl_at desc";
        case "oldest":
            return "crawl_at asc";
        case "priceAsc":
            return "current_price asc";
        case "priceDesc":
            return "current_price desc";
        case "sale":
            return "discount desc";
        case "discount":
            return "discount desc";
        default:
            return "crawl_at desc";
    }
};

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
            page: "item.page",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",
            variant: "item.variant_id",

            publisher: "item.publisher",
        })
        .where("deleted_at", null)
        .orderBy("id", "asc")
        .limit(10);
}

export async function getPerPage(
    page: number,
    perPage: number,
    { orderBy, priceRange, ...options }: FilterOptions
) {
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
                builder.whereRaw("LOWER(title) LIKE ?", [`%${options.title.toLowerCase()}%`]);
            }
            if (priceRange?.length === 2) {
                const [minPrice, maxPrice] = priceRange;
                builder.whereBetween("current_price", [minPrice, maxPrice]);
            }
        })
        .andWhere("deleted_at", null)
        .orderByRaw(mapOrderBy(orderBy || "newest"))
        .limit(perPage)
        .offset((page - 1) * perPage);
}

export async function getTotal({ priceRange, ...options }: FilterOptions) {
    return await database("item")
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
                builder.whereRaw("LOWER(title) LIKE ?", [`%${options.title.toLowerCase()}%`]);
            }
            if (priceRange?.length === 2) {
                const [minPrice, maxPrice] = priceRange;
                builder.whereBetween("current_price", [minPrice, maxPrice]);
            }
        })
        .andWhere("deleted_at", null)
        .count("id", { as: "total" })
        .first();
}

export async function getById(id: string) {
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
            page: "item.page",
            eps_num: "item.eps_num",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",

            sold: "item.sold",

            publisher: "item.publisher_id",
        })
        .where({ id })
        .andWhere("deleted_at", null)
        .first();
}

export async function getByIds(ids: string[]) {
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
            page: "item.page",

            format: "item.format_id",
            availability: "item.availability_id",
            rare: "item.rare_id",
            variant: "item.variant_id",

            sold: "item.sold",
            quantity: "item.quantity",

            publisher: "item.publisher_id",
        })
        .whereIn("id", ids)
        .andWhere("deleted_at", null);
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
        .where("title", "like", `%${name}%`)
        .andWhere("deleted_at", null);
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
        .andWhere("deleted_at", null)
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
        .where("deleted_at", null)
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
        .where("deleted_at", null)
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
        .andWhere("deleted_at", null)
        .orderBy("crawl_at", "asc")
        .limit(8);
}

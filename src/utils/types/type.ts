export type OrderByType = "newest" | "oldest" | "priceAsc" | "priceDesc" | "sale" | "discount";

export interface FilterOptions {
    title?: string;
    format: number[];
    availability: number[];
    rare: number[];
    variant: number[];
    orderBy?: OrderByType;
    priceRange?: number[];
}

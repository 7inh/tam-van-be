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

export interface AddressGetPrice {
    senderProvince: number;
    senderDistrict: number;
    receiverProvince: number;
    receiverDistrict: number;
    productWeight: number;
}

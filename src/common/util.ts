import { OrderByType } from "src/utils/types/type";

export const isOrderByType = (type: string): type is OrderByType => {
    switch (type) {
        case "newest":
        case "oldest":
        case "priceAsc":
        case "priceDesc":
        case "sale":
        case "discount":
            return true;
        default:
            return false;
    }
};

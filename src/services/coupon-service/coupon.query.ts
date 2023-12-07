import database from "src/database/database";

export async function getByCode(code: string) {
    return await database("coupon").where("code", code).first();
}

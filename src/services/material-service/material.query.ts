import database from "src/database/database";

export async function getAll() {
    return await database("material")
        .select("*")
        .orderBy("id", "asc")
}

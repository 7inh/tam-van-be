import database from "src/database/database";

export async function getAll() {
    return await database("variant")
        .select("*")
        .orderBy("id", "asc")
}

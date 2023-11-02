import database from "src/database/database";

export async function getAll() {
    return await database("rare").select("*").orderBy("id", "asc");
}

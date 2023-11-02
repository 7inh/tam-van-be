import database from "src/database/database";

export async function getAll() {
    return await database("item").select("*").orderBy("id", "asc");
}

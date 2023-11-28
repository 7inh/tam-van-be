import database from "src/database/database";

export async function getAll() {
    return await database("format").select("*").orderBy("id", "asc");
}

import database from "src/database/database";

export async function getAll() {
    return await database("availability").select("*").orderBy("id", "asc");
}

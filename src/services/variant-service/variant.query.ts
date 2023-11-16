import database from "../../database/database";

export async function getAll() {
    return await database("variant").select("*").orderBy("id", "asc");
}

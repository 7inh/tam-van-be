import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("rare").del();

    // Inserts seed entries
    await knex("rare").insert([
        {
            id: 1,
            name: "NORMAL",
        },
        {
            id: 2,
            name: "SPECIAL",
        },
        {
            id: 3,
            name: "LIMITED",
        },
        {
            id: 4,
            name: "COLLECT",
        },
    ]);
}

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("variant").del();

    // Inserts seed entries
    await knex("variant").insert([
        {
            id: 1,
            name: "ONE",
        },
        {
            id: 2,
            name: "COMBO",
        },
        {
            id: 3,
            name: "SET",
        },
    ]);
}

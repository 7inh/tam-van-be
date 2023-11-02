import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("availability").del();

    // Inserts seed entries
    await knex("availability").insert([
        {
            id: 1,
            name: "COMING_SOON",
        },
        {
            id: 2,
            name: "AVAILABLE",
        },
        {
            id: 3,
            name: "SOLD_OUT",
        }
    ]);
}

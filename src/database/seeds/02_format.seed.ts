import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("format").del();

    // Inserts seed entries
    await knex("format").insert([
        {
            id: 1,
            name: "PAPERBACK",
        },
        {
            id: 2,
            name: "HARDCOVER",
        },
    ]);
}

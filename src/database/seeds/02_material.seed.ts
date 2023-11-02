import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("material").del();

    // Inserts seed entries
    await knex("material").insert([
        {
            id: 1,
            name: "PAPERBACK",
        },
        {
            id: 2,
            name: "HARDCOVER",
        },
        {
            id: 3,
            name: "EBOOK",
        },
    ]);
}

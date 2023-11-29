import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("publisher").del();

    // Inserts seed entries
    await knex("publisher").insert([
        {
            id: 1,
            name: "NSB_KIMDONG",
        },
        {
            id: 2,
            name: "NSB_TRE",
        },
    ]);
}

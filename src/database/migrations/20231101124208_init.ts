import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema
        .createTable("variant", (table) => {
            table.increments("id").primary().notNullable();
            table.string("name").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("format", (table) => {
            table.increments("id").primary().notNullable();
            table.string("name").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("availability", (table) => {
            table.increments("id").primary().notNullable();
            table.string("name").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("rare", (table) => {
            table.increments("id").primary().notNullable();
            table.string("name").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("item", (table) => {
            table.increments("id").primary().notNullable();

            table
                .integer("variant_id")
                .references("variant.id")
                .defaultTo(1)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");
            table
                .integer("availability_id")
                .references("availability.id")
                .defaultTo(1)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");
            table
                .integer("rare_id")
                .references("rare.id")
                .defaultTo(1)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");
            table
                .integer("format_id")
                .references("format.id")
                .defaultTo(1)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");

            table.string("title").notNullable();
            table.string("author");
            table.string("cover");
            table.text("description");

            table.integer("old_price").notNullable();
            table.string("discount");
            table.integer("current_price").notNullable();

            table.integer("quantity");
            table.integer("sold").defaultTo(0);

            table.string("size");
            table.string("weight");
            table.integer("pages");

            table.string("publisher");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("photo", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("item_id").references("item.id").onDelete("CASCADE").onUpdate("CASCADE");
            table.string("urls").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("photo")
        .dropTable("item")
        .dropTable("rare")
        .dropTable("availability")
        .dropTable("format")
        .dropTable("variant");
}

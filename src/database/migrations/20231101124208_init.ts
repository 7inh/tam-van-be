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
        .createTable("publisher", (table) => {
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
            table
                .integer("publisher_id")
                .references("publisher.id")
                .onDelete("CASCADE")
                .onUpdate("CASCADE");

            table.string("source").notNullable();
            table.string("title").notNullable();
            table.string("author");
            table.string("cover");
            table.text("description");

            table.integer("old_price").notNullable();
            table.integer("discount");
            table.integer("current_price").notNullable();

            table.integer("quantity");
            table.integer("sold").defaultTo(0);

            table.string("size");
            table.string("weight");
            table.integer("pages");

            table.datetime("crawl_at").defaultTo(knex.fn.now());

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
        })
        .createTable("coupon", (table) => {
            table.increments("id").primary().notNullable();
            table.string("code").notNullable();
            table.integer("discount").notNullable();
            table.integer("max_discount");
            table.integer("min_price"); // min price to use coupon
            table.integer("quantity").notNullable();
            table.integer("used").defaultTo(0);
            table.integer("limit");
            table.integer("type");
            table.integer("variant").defaultTo(0); // 0: all, 1: once, 2: set of items, 3: full

            table.string("description");
            table.datetime("started_at").notNullable();
            table.datetime("expired_at").notNullable();

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema
        .dropTable("coupon")
        .dropTable("photo")
        .dropTable("item")
        .dropTable("publisher")
        .dropTable("rare")
        .dropTable("availability")
        .dropTable("format")
        .dropTable("variant");
}

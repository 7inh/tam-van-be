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
            table.string("id").primary().notNullable().defaultTo(knex.raw("uuid_generate_v4()"));
            table
                .integer("variant_id")
                .references("variant.id")
                .defaultTo(2)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");
            table
                .integer("availability_id")
                .references("availability.id")
                .defaultTo(2)
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
                .onUpdate("CASCADE")
                .defaultTo(1);

            table.string("title").notNullable();
            table.string("author");
            table.string("cover");
            table.text("description");

            table.integer("old_price").notNullable().defaultTo(0);
            table.integer("discount").notNullable().defaultTo(0);
            table.integer("current_price").notNullable().defaultTo(0);
            table.integer("eps_num").defaultTo(1);
            table.boolean("show_eps_no").defaultTo(true);

            table.string("size");
            table.string("weight");
            table.integer("page");

            table.datetime("crawl_at").defaultTo(knex.fn.now());

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("item_eps", (table) => {
            table.increments("id").primary().notNullable();
            table.string("item_id").references("item.id").onDelete("CASCADE").onUpdate("CASCADE");
            table.string("source").notNullable();
            table.string("title").notNullable();
            table.string("cover").notNullable();
            table.integer("eps_no").notNullable();
            table.string("description").notNullable();

            table.integer("quantity").defaultTo(5);
            table.integer("sold").defaultTo(0);

            table.string("weight").defaultTo(0);

            table.integer("old_price").notNullable().defaultTo(0);
            table.integer("discount").notNullable().defaultTo(0);
            table.integer("current_price").notNullable().defaultTo(0);

            table
                .integer("availability_id")
                .references("availability.id")
                .defaultTo(2)
                .onDelete("NO ACTION")
                .onUpdate("CASCADE");

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
        .dropTable("item_eps")
        .dropTable("item")
        .dropTable("publisher")
        .dropTable("rare")
        .dropTable("availability")
        .dropTable("format");
}

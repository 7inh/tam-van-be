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
        .createTable("material", (table) => {
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

            table.integer("variant_id").references("variant.id").onDelete('NO ACTION').onUpdate('CASCADE');
            table.integer("material_id").references("material.id").onDelete('NO ACTION').onUpdate('CASCADE');
            table.integer("availability_id").references("availability.id").onDelete('NO ACTION').onUpdate('CASCADE');
            table.integer("rare_id").references("rare.id").onDelete('NO ACTION').onUpdate('CASCADE');

            table.string("name").notNullable();
            table.string("thumbnail").notNullable();
            table.integer("description").notNullable();

            table.integer("current_price").notNullable();
            table.integer("old_price").notNullable();
            table.integer("discount_percent");

            table.integer("quantity").notNullable();
            table.integer("sold");

            table.datetime("created_at").defaultTo(knex.fn.now());
            table.datetime("updated_at");
            table.datetime("deleted_at");
        })
        .createTable("photo", (table) => {
            table.increments("id").primary().notNullable();
            table.integer("item_id").references("item.id").onDelete('CASCADE').onUpdate('CASCADE');
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
        .dropTable("material")
        .dropTable("variant");
}
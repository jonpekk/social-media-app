import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("posts", (table) => {
    table.bigIncrements("id")
    table.text("body").notNullable()
    table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6))
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists("posts")
}

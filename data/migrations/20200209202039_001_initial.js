exports.up = async function(knex) {
  await knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("project_name").notNullable();
    tbl.text("description");
    tbl.boolean("complete").defaultTo("false");
  });
  await knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl.text("description").notNullable();
    tbl.text("notes");
    tbl.boolean("complete").defaultTo("false");
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.createTable("resources", tbl => {
    tbl.increments();
    tbl.string("resource_name").notNullable();
    tbl.text("description");
  });
  await knex.schema.createTable("projects_resources", tbl => {
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("resource_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("resources")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.primary(["project_id", "resource_id"]);
  });
  await knex.schema.createTable("contexts", tbl => {
    tbl.increments();
    tbl.text("context").notNullable();
    tbl
      .integer("tasks_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("tasks")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
  await knex.schema.createTable("tasks_contexts", tbl => {
    tbl
      .integer("task_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("tasks")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("context_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("contexts")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.primary(["task_id", "context_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("tasks_contexts");
  await knex.schema.dropTableIfExists("contexts");
  await knex.schema.dropTableIfExists("projects_resources");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("projects");
};

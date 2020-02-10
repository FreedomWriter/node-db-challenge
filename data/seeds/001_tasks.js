exports.seed = async function(knex) {
  await knex("tasks").truncate();
  await knex("tasks").insert([
    { project_id: 1, description: "Enroll in Lambda" },
    { project_id: 1, description: "Cry", notes: "Don't cry too long" },
    { project_id: 1, description: "start understanding" }
  ]);
};

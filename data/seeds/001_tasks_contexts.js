exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks_contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tasks_contexts").insert([
        { task_id: 1, context_id: 1 },
        { task_id: 1, context_id: 3 }
      ]);
    });
};

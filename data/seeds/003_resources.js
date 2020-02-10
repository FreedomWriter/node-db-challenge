exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { id: 1, resource_name: "Computer" },
        { id: 2, resource_name: "Internet" },
        { id: 3, resource_name: "Grit" }
      ]);
    });
};

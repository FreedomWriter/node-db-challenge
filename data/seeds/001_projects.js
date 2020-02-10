exports.seed = async function(knex) {
  await knex("projects").truncate();
  await knex("projects").insert([
    { project_name: "Become a Dev", description: "Career change" },
    {
      project_name: "Train new puppy",
      description: "Call me crazy, but this makes two"
    },
    { project_name: "Self-study" }
  ]);
};

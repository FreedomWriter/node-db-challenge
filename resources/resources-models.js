const db = require("../data/db.config");

function find() {
  return db("resources").select();
}

function findById(id) {
  return db("resources")
    .where({ id })
    .first();
}

async function add(userData) {
  const [id] = await db("resources").insert(userData);
  return db("resources")
    .where({ id })
    .first();
}

async function update(id, body) {
  await db("resources")
    .where({ id })
    .update(body);

  return findById(id);
}

function remove(id) {
  return db("resources")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

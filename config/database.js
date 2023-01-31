const db = require("mongoose");

db.Promise = global.Promise;

async function connect(url) {
  db.set("strictQuery", false);
  await db.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Conexión establecida correctamente");
}

module.exports = connect;
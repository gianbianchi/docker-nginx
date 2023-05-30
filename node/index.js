const express = require("express");
const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);

const sql = `insert into people(name) values('Gianluca Bianchi')`;
connection.query(sql);

connection.end();

app.get("/", async (req, res) => {
  const conn = mysql.createConnection(config);
  let data = [];
  conn.query("SELECT * FROM people", function (err, result, fields) {
    if (err) throw err;
    for (item of result) {
      data.push(`<li>${item.name}</li>`);
    }
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <br>
      <ol>${data}</ol>`);
  });
  conn.end();
});

app.listen(port, () => {
  console.log("Rodando na porta: ", port);
});

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const { Pool } = require("pg");
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => res.render("pages/index"));
app.get("/assignment2", (req, res) => {
  var getUsersQuery = "SELECT * FROM person";
  pool.query(getUsersQuery, (err, result) => {
    if (err) res.end(err);
    var results = { rows: result.rows };
    res.render("pages/db", results);
  });
});

app.post("/addperson", (req, res) => {
  var name = req.body.name;
  var age = req.body.age;
  var height = req.body.heightInput;
  var gender = req.body.gender;
  var type = req.body.r1;

  var postUserQuery =
    "INSERT INTO PERSON (name, age, height,gender, type) VALUES ($1,$2,$3,$4,$5)";
  pool.query(
    postUserQuery,
    [name, age, height, gender, type],
    (error, result) => {
      if (error) res.redirect("/assignment2");
      res.redirect("/assignment2");
    }
  );
});

app.get("/getperson/:id", (req, res) => {
  const id = parseInt(req.params.id);

  var getUsersQuery = "SELECT * FROM person where id = $1";
  pool.query(getUsersQuery, [id], (err, result) => {
    if (err) res.end(err);
    var results = { rows: result.rows };

    res.render("pages/edit", results);
  });
});

app.post("/updateperson/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const values = [
    req.body.name,
    req.body.age,
    req.body.heightInput,
    req.body.gender,
    req.body.r1,
    id,
  ];
  var updateQuery =
    "UPDATE person SET name = $1, age = $2, height = $3, gender = $4, type = $5 WHERE (id = $6)";
  pool.query(updateQuery, values, (err, result) => {
    if (err) res.redirect("/assignment2");
    res.redirect("/assignment2");
  });
});

app.post("/deleteperson/:id", (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("DELETE FROM person WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }

    res.redirect("/assignment2");
  });
});
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

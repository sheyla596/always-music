import pg from "pg";
import express from "express";
const { Pool } = pg;
const app = express();
const port = 3000;

const config = {
  user: "postgres",
  host: "localhost",
  database: "estudiantes",
  password: "1234",
  port: 5432,
};
const pool = new Pool(config);


app.post("/agregar", async (req, res) => {
  try {
    const text =
      "insert into registro(nombre, rut, curso, nivel) values($1, $2, $3, $4)";
    const values = ["Lautaro Martin", "17876456-3", "Batería", "5"];
    const response = await pool.query(text, values);
    res.send("¡Estudiante agregado exitosamente!");
  } catch (error) {
    res.status(500).send("Internal error");
  }
});


app.get("/consultar", async (req, res) => {
  try {
    const result = await pool.query("select * from registro");
    res.send(result.rows);
  } catch (error) {
    res.status(500).send("Internal error");
  }
});


app.get("/rut/:rut", async (req, res) => {
  const rut = req.params.rut;
  try {
    const text = "select * from registro where rut = $1";
    const values = [rut];
    const response = await pool.query(text, values);
    res.send(response.rows);
  } catch (error) {
    res.status(500).send("Internal error");
  }
});


app.patch("/modificar/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const text = "update registro set nivel = $1 where id = $2";
    const values = ["10", id];
    const response = await pool.query(text, values);
    res.send("¡Nivel del estudiante modificado exitosamente!");
  } catch (error) {
    res.status(500).send("Internal error");
  }
});


app.delete("/eliminar", async (req, res) => {
  try {
    const text = "delete from registro where nombre = $1";
    const values = ["Lautaro Martin"];
    const response = await pool.query(text, values);
    res.send("¡Estudiante eliminado del registro exitosamente!");
  } catch (error) {
    res.status(500).send("Internal error");
  }
});


app.listen(port, () => {
  console.log(`El servidor está inicializado en el puerto http://localhost:${port}`);
});
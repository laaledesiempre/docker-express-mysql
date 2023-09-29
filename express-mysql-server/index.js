const express = require("express")
const mysql = require("mysql2/promise")
const cors = require("cors")
// Constants

const app = express()
const PORT = 3000
let created = false
app.use(cors({
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"]
}))
app.use(express.json())

// Data Base Conection

const db = mysql.createPool({
  host: "mysql",
  user: "root",
  password: "password",
  database: "db"
})

//------------------
// Functions

const defaultResponseDatabase = (err, result, res) => {

  if (err) {
    res.sendStatus(500)
  }
  else {
    res.sendStatus(200)
    console.log(result)
  }
}

// End of functions
//------------------

// Database constructor

//------------------
//Endpoints
app.get("/api", (req, res) => {
  console.log("flag 1, endpoint impacted on base")
  if (!created) {
    console.log("flag 2, entered query");
    db.query(
      'CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))')
      .then((response) => console.log(response))
      .catch(error => console.log(error))

    created = true
  }
})
app.get("/api/test", (req, res) => {
  console.log("server tested")
  res.send("Hi from here")

})

// Adding Characters Endpoint

app.post("/api/character", async (req, res) => {
  console.log(req.body)
  const { name, age, description } = req.body

  await db.query(
    'INSERT INTO characters (name, age, description) values (? , ? , ?)',
    [name, age, description],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Updating Characters Endpoint

app.put("/api/character", async (req, res) => {

  const { id, name, age, description } = req.body

  await db.query(
    'UPDATE characters SET name = ?, age = ?, description = ? WHERE id = ?',
    [name, age, description, id],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Delete Character Endpoint
app.delete("/api/character", async (req, res) => {
  const { id } = req.body
  await db.query(
    'delete from characters where id=?', [parseInt(id)],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Getting Single Character Data Endpoint

app.get("/api/character/id/:id", (req, res) => {

  const { id } = req.params

  db.query(
    'select * from characters where id=?',
    [parseInt(id)])
    .then(response => res.json(response))
    .catch(error => console.log(error))
})

// Get All

app.get("/api/characters", (req, res) => {
  db.query(
    'select * from characters')
    .then(response => res.json(response))
    .catch(error => console.log(error))
})

//------------------
// App Listen

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})

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

// Data Base Conection

const db = mysql.createPool({
  host: "192.168.69.10",
  user: "root",
  password: "test",
  database: "db"
})

//------------------
// Functions

const defaultResponseDatabase = (err: any, result: any, res: Response) => {

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
app.get("/", (req, res) => {
  if (!created) {
    async () => {
      await db.query(
        'CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))',
        (err, _result) => {
          if (err) { console.log(err) }
        })
      created = true
    }
  }
})
app.get("/test", (_req, res) => {

  res.send("Hi from here")

})

// Adding Characters Endpoint

app.post("/api/character", async (req: Request, res: Response) => {

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
    'delete * from characters where id=?', [id],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Getting Single Character Data Endpoint

app.get("/api/character/id/:id", async (req, res) => {

  const { id } = req.params

  await db.query(
    'select * from characters where id=?',
    [id], (err, result) => {

      if (err) {
        console.log(err)
      } else {
        res.json(result)
      }

    })
})

// Get All

app.get("/api/characters", async (_req, res) => {
  await db.query(
    'select * from characters',
    (err, result) => {

      if (err) {
        console.log(err)
      } else {
        res.json(result)
      }

    })
})

//------------------
// App Listen

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`)
})

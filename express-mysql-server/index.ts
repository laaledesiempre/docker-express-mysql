<<<<<<< HEAD
import {Express, Response, Request} from 'express'
const bodyParser = require('body-parser') //TODO
const mysql = require('mysql') //TODO
const cors = require('cors') //TODO
=======
import express, { Response, Request } from 'express'
import mysql, { MysqlError } from 'mysql'
>>>>>>> 7b43dcc (types and dependencies checked on express server)

// Constants

const app = express()
const PORT = 3000

// Data Base Conection

const db = mysql.createPool({
  host: "192.168.69.10",
  user: "root",
  password: "test",
  database: "test"
})

//------------------
// Functions

const defaultResponseDatabase = (err: MysqlError | null, result: any, res: Response) => {

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

(() => {
  db.query(
    'CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))',
    (err, _result) => {
      if (err) { console.log(err) }
    })
})()

//------------------
//Endpoints

app.get("/test", (_req, res) => {

  res.send("Hi from here")

})

// Adding Characters Endpoint

app.post("/api/character", (req: Request, res: Response) => {

  const { name, age, description } = req.body

  db.query(
    'INSERT INTO characters (name, age, description) values (? , ? , ?)',
    [name, age, description],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Updating Characters Endpoint

app.put("/api/character", (req, res) => {

  const { id, name, age, description } = req.body

  db.query(
    'UPDATE characters SET name = ?, age = ?, description = ? WHERE id = ?',
    [name, age, description, id],
    (err, result) => defaultResponseDatabase(err, result, res)
  )
})

// Delete Character Endpoint
app.delete("/api/character",(req,res)=>{
  db.query(
    'delete * from characters where id=?',[id],
    defaultResponseDatabase(err,result)
  )
})

// Getting Single Character Data Endpoint

app.get("/api/character/id/:id", (req, res) => {

  const { id } = req.params

  db.query(
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

app.get("/api/characters", (_req, res) => {
  db.query(
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

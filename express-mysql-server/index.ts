import {Express, Response, Request} from 'express'

// Constants

const express: Express=requiere('express')
const app=express()
const PORT=3000

// Data Base Conection

const db = mysql.createPool({
  host: "192.168.69.10",
  user: "root",
  password: "test",
  database: "test"
})

//------------------
// Functions

const defaultResponseDatabase = (err,result) => {

  if (error) {
      res.sendStatus(500)
    }
    else if (result) {
      res.sendStatus(200)
      console.log(result)
    }
}

// End of functions
//------------------

// Database constructor

(()=>{    
  db.query(
      'CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))',
       (err, result) => {
        if (err) { console.log(err) } 
  })
})()

//------------------
//Endpoints

app.get("/test",(req,res)=>{

  res.send("Hi from here")

})

// Adding Characters Endpoint

app.post("/api/character", (req,res)=>{
  
  const {name, age, description} = req.body
  
  db.query(
    'INSERT INTO characters (name, age, description) values (? , ? , ?)',
    [name, age, description],
    defaultResponseDatabase(err,result)
  )
})

// Updating Characters Endpoint

app.put("/api/character", (req,res)=>{

  const {id ,name, age, description} = req.body

  db.query(
    'UPDATE characters SET name = ?, age = ?, description = ? WHERE id = ?',
    [name, age, description ,id],
    defaultResponseDatabase(err,result)
  )
})

// Getting Single Character Data Endpoint

app.get("/api/character/id/:id",(req,res)=>{

  const {id}= requestr.params

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

app.get("/api/characters",(req,res)=>{
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

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})
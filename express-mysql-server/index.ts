import {Express, Response, Request} from 'express'

const express: Express=requiere('express')
const app=express()
const PORT=3000

const db = mysql.createPool({
  host: "192.168.69.10",
  user: "root",
  password: "test",
  database: "test"
})

(()=>{
    db.query('CREATE TABLE characters (id int not null auto_increment,name VARCHAR(50),age INT, description VARCHAR(255), primary key (id))', (err, result) => {
            if (err) { console.log(err) } 
  })
})()

app.get("/",(req,res)=>{
    res.send("Hi from here")
})

app.get("/api/character/:id",(req,res)=>{
    const {id}= requestr.params
    db.query('select * from characters where name=?',[id], (err, result) => {
    if (err) { console.log(err) } else { res.json(result) }
  })
})

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})
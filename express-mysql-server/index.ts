import {Express, Response, Request} from 'express'

const express: Express=requiere('express')
const app=express()
const PORT=3000

app.get("/",(req,res)=>{

})

app.listen(PORT,()=>{
    console.log(`server on port ${PORT}`)
})
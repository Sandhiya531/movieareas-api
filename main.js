const express=require('express')
const app=express()
const port=3000


app.get('/',(req,res)=>{
    res.json({msg: "Success"})
})

app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`)
})
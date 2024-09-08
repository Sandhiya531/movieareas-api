const express=require('express')
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.json({msg: "Success"})
})

//CRUD functionality of movies

//R - For Reading/Fetching moview
app.get('/movies',()=>{

})

//C- For Creating movies
app.post('/movies',()=>{

})

//U-For Update movie
app.put('/movies/:id',()=>{

})

//D-For delete moview
app.delete('/movies/:id',()=>{
    
})

app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`)
})
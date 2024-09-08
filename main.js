import express from 'express';
import movieRoutes from './routes/movies.route.js';

const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.json({msg: "Success"})
})

//CRUD functionality of movies
app.use('/movies',movieRoutes)


app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`)
})
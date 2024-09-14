import express, { json } from 'express'
import connectDB from './config/db.js';
import movieRoutes from './routes/movies.route.js';

const app=express()
const port=3000

app.use(express.json());

//Connect DB
connectDB();

app.get('/',(req,res)=>{
    res.json({msg: "Success"})
})

//CRUD functionality of movies
app.use('/',movieRoutes)

app.listen(port,()=>{
    console.log(`The server is running at http://localhost:${port}`)
})
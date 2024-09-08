import express from 'express';
import { movieCreate, movieDelete, movieIndex, movieUpdate } from '../controllers/movies.controller.js';
const router=express.Router();

//R - For Reading/Fetching moview
router.get('/movies', movieIndex)

//C- For Creating movies
router.post('/movies',movieCreate)

//U-For Update movie
router.put('/movies/:id',movieUpdate)

//D-For delete moview
router.delete('/movies/:id',movieDelete)

export default router;
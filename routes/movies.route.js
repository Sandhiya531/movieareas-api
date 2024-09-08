import express from 'express';
const router=express.Router();

//R - For Reading/Fetching moview
router.get('/',(req,res)=>{
    res.send('Get all movies')
})

//C- For Creating movies
router.post('/',()=>{

})

//U-For Update movie
router.put('/:id',()=>{

})

//D-For delete moview
router.delete('/:id',()=>{
    
})

export default router;
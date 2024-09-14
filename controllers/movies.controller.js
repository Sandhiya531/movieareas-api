import Movie from "../models/movie.model.js";

export const movieIndex = async (req,res)=>{
    try{
        const movies = await Movie.find()
        return res.status(200).json(movies);
    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const movieCreate = async (req,res)=>{
    const newMovie = new Movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try{
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    }catch(error){
        return res.status(400).json({message: error.message})
    }
    

};

export const movieDetail = async(req,res)=>{
    try{
        const movie = await Movie.findById(req.params.id);
        if(movie == null){
            return res.status(404).json({message: 'Cannot find movie'});
        }else{
            return res.json(movie)
        }
    }catch(error){
        return res.status(500).json({message: error.message})
    }
};

export const movieUpdate = async (req,res)=>{
    try{
        const updatedMovie = await Movie.findOneAndUpdate({_id:req.params.id},{
            title: req.body.title,
            desc: req.body.desc
        },{new: true});
        res.status(200).json(updatedMovie)
    }catch(error){
        return res.status(400).json({message: error.message})
    }
};

export const movieDelete = async (req,res)=>{
    try{
        const deletedMovie = await Movie.findOneAndDelete({_id:req.params.id});
        res.status(200).json({message: "Movie Deleted"})
    }catch(error){
        return res.status(400).json({message: error.message})
    }
};
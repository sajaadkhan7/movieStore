const { response} = require('express');  //requiring express
const mongoose=require('mongoose');     //requiring mongoose

const Movies=mongoose.model('movies');   
 //difining CRUD functions
const getMovies=function(req,res){
  Movies.find().exec(function(err,moviedata){
      if(err){
          res.status(404)
          .json(err);
          return;
      }
      res.status(200)
      .json(moviedata);
  });
};

const createMovies=function(req,res){
    Movies.create({name:req.body.name,
    director:req.body.director,
    actor:{name:req.body.actor.name,
        age:req.body.actor.age,
        status:req.body.actor.status
    },
    rating:req.body.rating,
    release_date:req.body.release_date
},(err,moviedata)=>{
    if(err){
        res.status(400)
        .json(err);
    }
    else{
        res.status(201)
        .json(moviedata);
    }
});  
};

const getSingleMovies=function(req,res){
   Movies.findById(req.params.moviesid)
   .exec(function(err,moviedata){
       res.status(201)
       .json(moviedata);
   });

};


const updateMovies=function(req,res){
    if(!req.params.moviesid){
        res.status(404)
        .json({"message":"Not found,Moviesid is required"});
        return;
    }
    Movies.findById(req.params.moviesid)
    .exec((err,moviedata)=>{
        if(!moviedata){
            res.status(404)
            .json({
                "message":"moviesid not found"
            });
            return;
            }else if(err){
                res.status(400)
                .json(err);
                return;
            }
            moviedata.name=req.body.name;
            moviedata.director=req.body.director;
            moviedata.actor.name=req.body.actor.name;
            moviedata.actor.age=req.body.actor.age;
            moviedata.actor.status=req.body.actor.status;
            moviedata.rating=req.body.rating;
            moviedata.release_date=req.body.release_date;

            moviedata.save((err,moviedata)=>{
                if(err){
                    res.status(404)
                    .json(err);
                }
                else{
                    res.status(200)
                    .json(moviedata);
                }
            });

    });

};

const deleteMovies=function(req,res){
   const moviesid=req.params.moviesid;

   if(moviesid){
       Movies.findByIdAndRemove(moviesid)
       .exec((err,moviedata)=>{
           if(err){
               res.status(404)
               .json(err);
               return;
           }
           res.status(204)
           .json(null);
       });
   }
   else{
       res.status(404)
       .json({"message":"No moviesID"});
   }
};
 
//exporting
module.exports={
    getMovies,
    createMovies,
    getSingleMovies,
    updateMovies,
    deleteMovies
};
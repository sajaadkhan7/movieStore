var mongoose = require("mongoose"); //requiring mongoose in a file
const actorSchema=new mongoose.Schema({   //creating sub schema with data validation
    name:{
        type:String,
        required:false
        
    },
    age:{
        type:Number,
        required:false,
        min:5
    },
    status:{
        type:String,
        required:false
    }
});

var moviesSchema=new mongoose.Schema({    //creating schema with data validation
    name:{
        type:String,
        required:true,
        minlength:3
    },
    director:{
        type:String,
        required:true,
        minlength:3
    },
    actor:actorSchema, //adding sub schema
    rating:{
        type:Number,
        required:false,
        'default':0,
        min:0,
        max:5
    },
    release_date:{
        type:String,
        required:true
    }
});

var Movies=mongoose.model('movies',moviesSchema);  //compiling model by calling moongoose.model

module.exports={
    Movies
};
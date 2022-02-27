const { response } = require('express');
const request=require('request');
const apiOptions={
    server:'http://localhost:3000'};

    const movielist=function(req,res){
        const path='/api/movies';
        const requestOptions={
            url:apiOptions.server+path,
            method:'GET',
            json:{}
        };
        request(requestOptions,(err,response,body)=>{
            _renderHomepage(req,res,body);
        });
    };
const _renderHomepage=function(req,res,responseBody){
    console.log(responseBody);
        res.render('list-display',{movieList:responseBody});
};

const _renderDetailPage=function(req,res,responseBody){
    
    res.render('details',{
        cMovie:responseBody

    });
    
};

const movieInfo=function(req,res){
    const path=`/api/movies/${req.params.moviesid}`;
    const requestOptions={
        url:apiOptions.server+path,
        method:'GET',
        json:{}
    };
    request(
        requestOptions,
        (err,response,body)=>{_renderDetailPage(req,res,body);
        }
    );
};

const _renderCreatePage=function(req,res){
    res.render('create',{
        title:"Create New Movie"
    });
};

const addNewMovie=function(req,res){
    _renderCreatePage(req,res);
}

const doNewMovie=function(req,res){
    const path='/api/movies';
    const postdata={
        name:req.body.name,
        director:req.body.director,
        actorName:req.body.actorName,
        age:req.body.age,
        status:req.body.status,
        rating:req.body.rating,
        release_date:req.body.release_date
    };
    const requestOptions={
        url:apiOptions.server+path,
        method:'POST',
        json:postdata
    };
    request(
        requestOptions,(err,response,body)=>{
            if(response.statusCode===201){
                res.redirect('/list');
            }
        }
    );
};
 


module.exports={
    movielist,movieInfo,addNewMovie,doNewMovie
};


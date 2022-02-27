import { Component,OnInit } from "@angular/core";
export class Movie {
    _id:string;
    name:string;
    director:string;
    actor:{
       
        name:string,
        age:number,
        status:string
    };
    rating:number;
    release_date:string;

}

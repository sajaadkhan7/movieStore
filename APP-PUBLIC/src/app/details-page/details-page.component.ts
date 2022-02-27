import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';
import {switchMap} from 'rxjs/operators';
import { Router,ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
  providers:[MovieServiceService]
})
export class DetailsPageComponent implements OnInit {

  constructor(private movieService:MovieServiceService,private route:ActivatedRoute,private router:Router) { }
   
  newMovie:Movie;
  pageContent={
    header:{
      title:''
    }
  };

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params:Params)=>{
      return this.movieService.getSingleMovie(params.moviesid);
    }))
    .subscribe((newMovie:Movie)=>{
      this.newMovie=newMovie;
      this.pageContent.header.title=newMovie.name;
    });

     
  }
  onDelete(_id:string){
    if(confirm('Are you sure to delete this record ?')==true){
      this.movieService.deleteMovie(_id);
      location.assign('/list');
      alert("Movie "+this.newMovie.name+" has been succesfully deleted.");
    }
  }
  updateMovie(movie:Movie){
    if(movie.name && movie.director && movie.release_date !==null && movie.release_date!==""){
    this.movieService.selectedMovie=movie;
    this.movieService.updateMovie(movie);
   
    this.scroll('scrollthis')
    alert("updated successfully.");
    }
    else{
      alert("please fill in required fields");
    }
    
  }

  scroll(id){
    var ele=document.getElementById(id);
      if(ele.id!=='scrollthis'){
      ele.style.display='block';}
      else{
        document.getElementById('scrollintoview').style.display='none';
      }
      ele.scrollIntoView({ behavior: 'smooth'});
  }
 
 }

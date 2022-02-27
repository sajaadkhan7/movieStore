import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieServiceService } from '../movie-service.service';
import { Router, ActivatedRoute } from '@angular/router';

 declare var M:any;
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[MovieServiceService]
})
export class CreateComponent implements OnInit {
 

  public newMovie :Movie={
      _id: '',
      name:'',
      director:'',
      actor:{
       
        name:'',
        age:null,
        status:''
      },
      rating:null,
      release_date:null

  };

  constructor(private movieService:MovieServiceService,private router:Router) { }

  ngOnInit(): void {


  }
  //create new movie 
    public createNewMovie(newMovie:Movie):void{

      if(newMovie.name && newMovie.director && newMovie.release_date !==null){
      this.movieService.createMovie(newMovie);  //call createMovie method of movieService class
      alert(newMovie.name+" movie has been added to the list.");
    
      this.router.navigateByUrl('/list');  //after movie creation navigate to list url
      }
      else{
        alert("Please fill in all the required fields");
      }
     }
   
  }


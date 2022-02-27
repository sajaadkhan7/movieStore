import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {HttpClient,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
private MovieUrl='http://localhost:3000/api/movies';
 selectedMovie:Movie;
  constructor(private http:HttpClient) { }
   getMovies():Promise<void | Movie[]>{
      return this.http.get(this.MovieUrl)
      .toPromise()
      .then(Response => Response as Movie[])
      .catch(this.handleError);
   }
   private handleError(error:any){
     console.log("error");
   }

   getSingleMovie(moviesid:string):Promise<void | Movie>{
    return this.http.get(this.MovieUrl + '/' + moviesid)
    .toPromise()
    .then(response=> response as Movie)
    .catch(this.handleError);
 }
 createMovie(newMovie:Movie):Promise<void | Movie>{

  return this.http.post(this.MovieUrl,newMovie)
  .toPromise()
  .then(response=> response as Movie)
  .catch(this.handleError);
 
}

deleteMovie(moviesid:string):Promise<void | Movie>{
  return this.http.delete(this.MovieUrl + '/' + moviesid)
  .toPromise()
  .then(response=> response as Movie)
  .catch(this.handleError);
}

updateMovie(newMovie:Movie):Promise<void | Movie>{

  return this.http.put(this.MovieUrl + '/' + this.selectedMovie._id,newMovie)
  .toPromise()
  .then(response=> response as Movie)
  .catch(this.handleError);
 
 
}


}

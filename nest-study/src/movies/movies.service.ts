import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesController } from './movies.controller';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';
@Injectable()
export class MoviesService {
    private movies : Movie[] = [];

    getAll() : Movie[] {
        return this.movies;
    }

    getOne(id:number):Movie{
        console.log(typeof id);
        const movie = this.movies.find(movie => movie.id === +id);
        if(!movie){
            throw new NotFoundException(`Movie with ID ${id} not found.`)
        }
        return movie;
    }

    deleteOne(id:number):boolean{
        this.getOne(id);
        this.movies = this.movies.filter(movie => movie.id !== id);
        return true;
    }

    create(movieData : CreateMovieDTO){
        this.movies.push({
            id : this.movies.length + 1,
            ...movieData,

        })
    }

    update(movieData : UpdateMovieDTO, movieId : number){
       const movie = this.getOne(movieId);
       this.deleteOne(movieId);
       this.movies.push({...movie,...movieData});

    }
    
}

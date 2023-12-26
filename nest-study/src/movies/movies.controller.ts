import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {

    constructor(private readonly movieService : MoviesService){}
    
    @Get()
    getAll() {
        return this.movieService.getAll();
    }

    @Get("search")
    search(@Query("year") searchingYear : string){
        return `We are searching for a movie with a title after ${searchingYear}`;
    }

    @Get("/:id")
    getOne(@Param('id') movieId: number){
        return this.movieService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData : CreateMovieDTO){
    
        return this.movieService.create(movieData);
    }

    @Delete('/:id')
    delete(@Param('id') movieId : number){
        return this.movieService.deleteOne(movieId);
    }

    @Patch("/:id")
    patch(@Param('id') movieId : number, @Body() updateData:UpdateMovieDTO){
        console.log(updateData);
        return this.movieService.update(updateData,movieId);
    }

    
    
}

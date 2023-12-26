import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    
    @Get()
    getAll() {
        return 'this will return all movies';
    }

    @Get("/:id")
    getOne(@Param('id') movieId: string){
        return `this will return one Moive with the id : ${movieId}`;
    }

    @Post()
    create(){
        return 'this will create Moive';
    }

    @Delete('/:id')
    delete(@Param('id') movieId : string ){
        return `this will delete Movie with id : ${movieId}`;
    }
    
}

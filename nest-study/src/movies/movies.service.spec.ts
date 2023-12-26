import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
    let service: MoviesService;
  
    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
        providers: [MoviesService],
      }).compile();
  
      service = module.get<MoviesService>(MoviesService);
    });
  
    it('should be defined', () => {
      expect(service).toBeDefined();
    }); 

    describe("getAll", () => {
        it("should return an array", () => {
            const result = service.getAll();
            expect(result).toBeInstanceOf(Array);
        });
    });

    describe("getOne",() => {
        it("should return an Movie",()=>{
            service.create({
                title:'Test Movie',
                year: 2000,
                genres:['test']
            });
            const movie = service.getOne(1);
            expect(movie).toBeDefined();
            expect(movie.id).toEqual(1);

        });

        it("should throw 404 error",()=>{
            try{
                service.getOne(999);
            }catch(e){
                expect(e).toBeInstanceOf(NotFoundException);
                expect(e.message).toEqual('Movie with ID 999 not found.')
            }
        });
    });

    describe("deleteOne",()=>{
        it("delete a movie",()=>{
            service.create({
                title : 'a',
                genres : ['a'],
                year : 2000
            });
            const beforeDelete = service.getAll();
            service.deleteOne(1);
            const afterDelete = service.getAll();
            expect(afterDelete.length).toBeLessThan(beforeDelete.length);
        });

        it("should return a 404",()=>{
            try{
                service.deleteOne(999);
        }catch(e){
            expect(e).toBeInstanceOf(NotFoundException);
            expect(e.message).toEqual('Movie with ID 999 not found.')
        };
        });
    });

    describe("create",()=>{
        it("should create a movie",()=>{
            const beforeCreate = service.getAll.length;
            service.create({
                title : 'a',
                genres : ['a'],
                year : 2000
            });

            const afterCreate = service.getAll().length;
            expect(afterCreate).toBeGreaterThan(beforeCreate);
        });
    });

    describe("update",()=>{
        it("should update a movie",()=>{
            service.create({
                title : 'a',
                genres : ['a'],
                year : 2000
            });

            service.update({title:'Updated Test'},1);
            const movie = service.getOne(1);
            expect(movie.title).toEqual('Updated Test');
        });
        it("should return a 404",()=>{
            try{
                service.update({title : 'a' }, 999);
        }catch(e){
            expect(e).toBeInstanceOf(NotFoundException);
            expect(e.message).toEqual('Movie with ID 999 not found.')
        };
        });
    })
});

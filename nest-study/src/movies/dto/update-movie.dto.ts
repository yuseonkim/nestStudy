import { IsString, IsNumber } from "class-validator";

// 각 변수의 ?은 없어도 되는
export class UpdateMovieDTO{
    @IsString()
    readonly title?: string;

    @IsNumber()
    readonly year?: number;

    @IsString({each:true})
    readonly genres?: string[];
}
// npm install @nestjs/mapped-types 해당 mapped-types 패키지 필요

// import { PartialType } from "@nestjs/mapped-types"
// import { CreateMovieDTO } from "./create-movie.dto";

// export class UpdateMovieDTO extends PartialType(CreateMovieDTO){

// }
import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDTO{

    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year : number;
    // 배열 타입의 각각의 요소의 유효성 검사를 위해 해당 each:true 사용
    
    
    @IsOptional()
    @IsString({each:true})
    readonly genres : string[];
}
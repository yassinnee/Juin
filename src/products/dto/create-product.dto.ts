import { IsNotEmpty, IsDefined, IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsDefined()
  idUsers: number;

  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsNotEmpty()
  @IsDateString()
  Date_cours: Date;

  @IsNotEmpty()
  @IsString()
  desc: string;

  @IsOptional()
  @IsString()
  picturs?: string;

  @IsNotEmpty()
  @IsDateString()
  create_date: Date;
}

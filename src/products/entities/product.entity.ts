import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({'name':'products'})
export class Product {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    idUsers : number;
  
    @Column()
    name : string;

    @Column()
    Date_cours : Date;

    @Column()
    desc : string;

    @Column()
    picturs : string;

    @Column()
    create_date : Date;
    
}

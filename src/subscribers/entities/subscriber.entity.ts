import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity( {'name':'subscribers'})
export class Subscriber {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    idUsers : number;
  
    @Column()
    idProduits : number;

    @Column()
    date_subscribes : Date;

}

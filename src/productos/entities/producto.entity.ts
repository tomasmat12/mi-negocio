import { Oferta } from "src/ofertas/entities/oferta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn() 
     id: number;

    @Column()
     nombre: string;

    @Column()
     descripcion: string;

    @Column()
     precio: number;

    @Column()
     id_oferta: number;

     @ManyToOne(()=> Oferta)
     oferta: Oferta;

 


}

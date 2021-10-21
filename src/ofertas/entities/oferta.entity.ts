import { Producto } from "src/productos/entities/producto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Oferta {
    
    @PrimaryGeneratedColumn() 
     id: number;

    @Column()
     precio: number;
   
     @OneToMany(() => Producto, producto => producto.oferta)
     productos: Oferta[];
    
  
}
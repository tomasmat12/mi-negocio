import { Oferta } from "src/ofertas/entities/oferta.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    public name: string;

    @Column()
    public description: string;

    @Column()
    public price: number;

    @Column()
    public image: string;

    @Column()
    public clearance: boolean;



    @ManyToOne(() => Oferta, oferta => oferta.productos)
    @JoinColumn({ name: 'oferta' })
    oferta: Oferta;

    constructor(id: number, name: string, description: string, price: number, image: string, clearance: boolean) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.clearance = clearance;
    }



}

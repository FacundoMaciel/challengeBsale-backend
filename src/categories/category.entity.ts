import { Product } from "src/products/product.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

// Decorador para generar la endidad
@Entity()
export class Category {
    // Decorador para generar una columna PrimaryKey
    @PrimaryGeneratedColumn()
    id: number
    // Decorador para generar una columna 
    @Column()
    name: string
    // Decorador para generar la relacion entre tablas de este lado correspone uno a muchos
    // Una categoria a muchos productos, se relacionan mediante la propiedad products tomando en la entidad category
    @OneToMany(() => Product, (product) => product.theCategory)
    products: Product[];
}
import { Category } from 'src/categories/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

// Decorador para generar la endidad
@Entity()
export class Product {
  // Decorador para generar una columna PrimaryKey
  @PrimaryGeneratedColumn()
  id: number; // tipo número INT o también decimal
  // Decorador para generar una columna 
  @Column({ unique: true }) // Dato estrictamente único
  name: string; // tipo VarChar

  @Column()
  url_image: string;

  @Column()
  price: number;

  @Column({ nullable: true }) // Dato NO estrictamente requerido
  discount: number;

  @Column()
  category: number;

  // Decorador para generar la relacion entre tablas de este lado correspone muchos a uno
  // Muchos productos a una categoria, relacionar en esta entidad con el decorador @JoinColumn
  @ManyToOne (() => Category, (category) => category.products)
  @JoinColumn({ name: 'category' })
  theCategory: Category
}

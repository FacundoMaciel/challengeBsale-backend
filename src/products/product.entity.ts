import { Category } from 'src/categories/category.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  url_image: string;

  @Column()
  price: number;

  @Column({ nullable: true })
  discount: number;

  @Column()
  category: number;

  @ManyToOne (() => Category, (category) => category.products)
  @JoinColumn({ name: 'category' })
  theCategory: Category
}

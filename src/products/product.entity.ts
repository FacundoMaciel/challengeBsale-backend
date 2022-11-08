import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}

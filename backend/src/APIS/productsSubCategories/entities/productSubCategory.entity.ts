import { Field, ObjectType } from "@nestjs/graphql";
import { ProductCategory } from "src/APIS/productsCategories/entities/productCategory.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class ProductSubCategory {
  @PrimaryGeneratedColumn("uuid")
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => ProductCategory) //   다:일 관계
  @Field(() => ProductCategory) //반환타입
  productCategory: ProductCategory; //외래키
}

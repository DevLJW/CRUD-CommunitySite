import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductSubCategory } from "./entities/productSubCategory.entity";
import { ProductsSubCategoriesResolver } from "./productsSubCategories.resolver";
import { ProductsCategoriesService } from "./productsSubCategories.service";
import { ProductTag } from "src/APIS/productsTags/entities/productTag.entity";
import { ProductCategory } from "../productsCategories/entities/productCategory.entity";
@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductSubCategory, //
      ProductCategory,
    ]),
  ],
  providers: [
    ProductsSubCategoriesResolver, //
    ProductsCategoriesService,
  ],
})
export class ProductsCategoriesSubModule {}

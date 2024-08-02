import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import { ProductSubCategory } from "./entities/productSubCategory.entity";
import { ProductTag } from "src/APIS/productsTags/entities/productTag.entity";
import { IProductsCategoriesServiceCreate } from "./interfaces/productsubcategories.interface";
import { Mutation } from "@nestjs/graphql";
import { ProductCategory } from "../productsCategories/entities/productCategory.entity";

@Injectable()
export class ProductsCategoriesService {
  constructor(
    @InjectRepository(ProductSubCategory)
    private readonly productsSubCategoriesRepository: Repository<ProductSubCategory>,
    @InjectRepository(ProductCategory)
    private readonly productsCategoryRepository: Repository<ProductCategory>
  ) {}

  async create({
    maincategoryname,
    subcategoryname,
  }: IProductsCategoriesServiceCreate): Promise<ProductSubCategory> {
    // return this.productsSubCategoriesRepository.save({ name });

    const mainTag = await this.productsCategoryRepository.findOne({
      where: { name: maincategoryname },
    });

    console.log(mainTag.id);

    const subcategorydata = await this.productsSubCategoriesRepository.save({
      name: subcategoryname,
      productCategory: mainTag,
    });
    return subcategorydata;
  }

  async fetchProductSubCategory(): Promise<ProductSubCategory[]> {
    const ProductSubCategorydata =
      await this.productsSubCategoriesRepository.find({
        relations: ["productCategory"], //  외래키로 조인한 데이터 같은경우 realations을 써줘야 데이터가 같이 출력된다.
      });
    console.log("출력구문");
    console.log(ProductSubCategorydata);
    return ProductSubCategorydata;
  }
}

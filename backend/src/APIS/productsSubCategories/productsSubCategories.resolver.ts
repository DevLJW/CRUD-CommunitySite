import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { ProductsCategoriesService } from "./productsSubCategories.service";
import { ProductSubCategory } from "./entities/productSubCategory.entity";

@Resolver()
export class ProductsSubCategoriesResolver {
  constructor(
    private readonly productsSubCategoriesService: ProductsCategoriesService //
  ) {}

  @Mutation(() => ProductSubCategory)
  createProductSubCategory(
    @Args("maincategoryname") maincategoryname: string, //
    @Args("subcategoryname") subcategoryname: string //
  ): Promise<ProductSubCategory> {
    return this.productsSubCategoriesService.create({
      maincategoryname,
      subcategoryname,
    });
  }

  @Query(() => [ProductSubCategory])
  async fetchProductSubCategory(): Promise<ProductSubCategory[]> {
    return await this.productsSubCategoriesService.fetchProductSubCategory();
  }
}

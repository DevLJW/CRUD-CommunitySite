import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateProductInput } from './dto/create-product.input';
import { Product } from './entities/product.entity';
import { IProductServiceFindOne } from './interfaces/products-service.interface';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver()
export class ProductsResolver {
    //
    constructor(private readonly productsService: ProductsService) {}

    @Query(() => [Product])
    fetchProducts(): Promise<Product[]> {
        return this.productsService.findAll(); //여기 return 앞부분에서 동기식이 걸림
    } //전체상품조회

    @Query(() => Product)
    fetchProduct(@Args('productId') productId: string): Promise<Product> {
        return this.productsService.findOne({ productId });
    } //상품하나조회

    @Mutation(() => Product) //graphql용 반환타입(반환할려는 데이터가 Graphql 타입이라서 )
    async createProduct(
        @Args('createProductInput') createProductInput: CreateProductInput,
    ): Promise<Product> {
        //사용자에게 데이터를 받는곳(사용자에게받을변수명)(받은데이터를 담아서 사용할 변수명)
        return await this.productsService.create({ createProductInput }); //브라우저에 던져주기
    }
    @Mutation(() => Product)
    updateProduct(
        @Args('productId') productId: string,
        @Args('updateProductInput') updateProductInput: UpdateProductInput,
    ): Promise<Product> {
        return this.productsService.update({ productId, updateProductInput });
    }

    @Mutation(() => Boolean)
    async deleteProduct(
        @Args('productId') productId: string,
    ): Promise<boolean> {
        const result = await this.productsService.delete({ productId });
        return result;
    }
}

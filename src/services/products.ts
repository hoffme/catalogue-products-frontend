import Request from "./request";
import EventsManager from "./realtime";

interface ProductFilter {
    id?: string[]
    query?: string
    priceMin?: number
    priceMax?: number
    stockMin?: number
    stockMax?: number
    orderBy?: 'name' | 'price' | 'stock' | 'createdAt' | 'updatedAt'
    orderAsc?: boolean
    limit?: number
    offset?: number
}

interface ProductCreateParams {
    name: string
    description: string
    image: string
    price: number
    stock: number
}

interface ProductUpdateParams {
    name?: string
    description?: string
    image?: string
    price?: number
    stock?: number
}

interface Product {
    id: string
    name: string
    description: string
    image: string
    price: number
    stock: number
    createdAt: Date
    updatedAt: Date
}

class ProductsService {

    public static readonly events = {
        create: EventsManager.Get<Product>('products.create'),
        update: EventsManager.Get<Product>('products.update'),
        remove: EventsManager.Get<Product>('products.remove'),
    }

    public static async Find(id: string): Promise<Product> {
        return await Request.fetch({ uri: `products/${id}` });
    }

    public static async Search(filter: ProductFilter): Promise<Product[]> {
        return await Request.fetch({
            uri: `products/search`,
            method: 'POST',
            body: filter
        })
    }

    public static async Create(params: ProductCreateParams): Promise<Product> {
        return await Request.fetch({
            uri: `products`,
            method: 'POST',
            body: params
        })
    }

    public static async Update(id: string, params: ProductUpdateParams): Promise<Product> {
        return await Request.fetch({
            uri: `products/${id}`,
            method: 'PUT',
            body: params
        })
    }

    public static async Delete(id: string): Promise<Product> {
        return await Request.fetch({
            uri: `products/${id}`,
            method: 'DELETE'
        })
    }

}

export default ProductsService;
export type {
    ProductFilter,
    ProductCreateParams,
    ProductUpdateParams,
    Product
}
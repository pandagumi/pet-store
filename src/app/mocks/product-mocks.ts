import {
  AnimalType,
  Product,
  ProductsGetResponse,
} from "./../interfaces/product";
import { Observable } from "rxjs";

export class ProductsServiceMock {
  getCategories(): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next([
        {
          name: "Product",
          description: "Product",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,

          installment_available: true,
          installment_count: 2,
          featured: true,
          animal_type: AnimalType.Dog,
          category: "Medicina e Saúde",
          subcategory: "Antipulgas e Carrapatos",
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hES59rlLMJrdH",
        },
      ]);
      observer.complete();
    });
  }

  getProductsHighlights(): Observable<Product[]> {
    return new Observable<Product[]>((observer) => {
      observer.next([
        {
          name: "Product",
          description: "Product",
          value: 204.9,
          promotional_value: 184.41,
          featured_image: "image_url",
          images: [],
          videos: [],
          rating_stars: 5,
          rating_count: 424,

          installment_available: true,
          installment_count: 2,
          featured: true,
          animal_type: AnimalType.Dog,
          category: "Medicina e Saúde",
          subcategory: "Antipulgas e Carrapatos",
          url: "/url",
          created_at: "2021-04-12 21:28:35.881119+00:00",
          id: "EJf7MU4hES59rlLMJrdH",
        },
      ]);
      observer.complete();
    });
  }

  product: Product;

  getProduct(id: string): Observable<Product> {
    return new Observable<Product>((observer) => {
      observer.next(this.product);
      observer.complete();
    });
  }

  products: Array<Product> = [
    {
      name: "Product",
      description: "Product",
      value: 204.9,
      promotional_value: 184.41,
      featured_image: "image_url",
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 424,
      installment_available: true,
      installment_count: 2,
      featured: true,
      category: "Medicina e Sa\u00fade",
      subcategory: "Antipulgas e Carrapatos",
      animal_type: AnimalType.Dog,
      url: "/url",
      created_at: "2021-04-12 21:28:35.881119+00:00",
      id: "EJf7MU4hES59rlLMJrdH",
    },
    {
      name: "Product2",
      description: "Product2",
      value: 204.9,
      promotional_value: 184.41,
      featured_image: "image_url",
      images: [],
      videos: [],
      rating_stars: 5,
      rating_count: 424,
      installment_available: true,
      installment_count: 2,
      featured: true,
      category: "Medicina e Sa\u00fade",
      subcategory: "Antipulgas e Carrapatos",
      animal_type: AnimalType.Dog,
      url: "/url",
      created_at: "2021-04-12 21:28:35.881119+00:00",
      id: "EJf7MU4hES59rlLMJrdH",
    },
  ];
  getProducts() {
    return new Observable<ProductsGetResponse>((observer) => {
      observer.next({
        products: [this.product],
        cursor: "",
      });
      observer.complete();
    });
  }
}

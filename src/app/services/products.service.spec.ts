import { TestBed } from '@angular/core/testing';
import { AnimalType, Product } from '../interfaces/product';
import { ProductsService } from './products.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('ProductsService', () => {
  let service: ProductsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ProductsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should test get products highlights', () => {
    service.getProductsHighlights().subscribe(products => {
      expect(products[0].name).toEqual('Food')
      })

      const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/products-highlights')
  
      req.flush(fakeResponse)
    })

    it('should get product', () => {
      service.getProduct('ID1').subscribe(product => {
        expect(product.name).toEqual('Ração Seca');
        
      });

  const req = httpTestingController.expectOne('https://petshop-sp.ue.r.appspot.com/v1/product/ID1');

  expect(req.request.method).toEqual('GET');

  const product: Product = {
    name: 'Ração Seca',
    description: 'Ração para cachorro',
    value: 158.9,
    promotional_value: 143.07,
    featured_image: '',
    images: [],
    videos: [],
    rating_stars: 5,
    rating_count: 8,
    installment_available: true,
    installment_count: 3,
    featured: true,
    category: 'ração',
    subcategory: 'ração seca',
    animal_type: AnimalType.Dog,
    created_at: '2021-04-11 14:22:17.916440+00:00',
    id: 'ID1',
    url: '',
    
  }

  req.flush(product);
});
  


});


const fakeResponse: Array<Product> = [
  {
    "id":"id",
    "name": "Food",
    "description":"string",
    "value": 0,
    "promotional_value":0,
    "featured_image": "string",
    "images":[
      "string"
    ],
    "videos":[
      "string"
    ],
    "rating_stars":0,
    "rating_count":0,
    "installment_available":true,
    "installment_count":0,
    "featured":true,
    "category":"string",
    "subcategory":"string",
    "animal_type":AnimalType.Dog,
    "url":"string",
    "created_at":"string"
  }
]


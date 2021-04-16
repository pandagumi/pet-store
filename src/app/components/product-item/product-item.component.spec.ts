import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ProductItemComponent } from './product-item.component';
import { AnimalType, Product } from './../../interfaces/product';
import { MatIcon } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCard } from '@angular/material/card';

const product: Product = {
  name: "Product",
  description: "Product",
  value: 204.9,
  promotional_value: 184.41,
  featured_image: '',
  images: [],
  videos: [],
  rating_stars: 5,
  rating_count: 424,
  installment_available: true,
  installment_count: 2,
  featured: true,
  animal_type: AnimalType.Dog,
  category: 'Medicina e Saúde',
  subcategory: 'Antipulgas e Carrapatos',
  url: '/url',
  created_at: '2021-04-12 21:28:35.881119+00:00',
  id: 'EJf7MU4hES59rlLMJrdH'
}

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ 
        ProductItemComponent,
        MockComponents(
          MatCard,
          MatIcon
        )
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

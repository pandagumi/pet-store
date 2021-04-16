import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesFeaturedComponent} from '../../components/categories-featured/categories-featured.component';
import { DashboardComponent } from './dashboard.component';
import { MockComponents } from 'ng-mocks';
import { ProductsServiceMock } from '../../mocks/product-mocks';
import { ProductsService } from './../../services/products.service';
import { ProductItemComponent } from './../../components/product-item/product-item.component';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent, 
        MockComponents(CategoriesFeaturedComponent, ProductItemComponent)],
        providers: [
          {
            provide: ProductsService,
            useClass: ProductsServiceMock
          }
        ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

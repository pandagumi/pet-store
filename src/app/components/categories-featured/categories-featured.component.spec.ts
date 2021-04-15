import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesServiceMock } from '../../mocks/categories-mocks'
import { CategoriesFeaturedComponent } from './categories-featured.component';
import { CategoriesService } from '../../services/categories.service'
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('CategoriesFeaturedComponent', () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;
  //let httpClient: HttpClient;
  //let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      //imports: [HttpClientTestingModule],
      declarations: [ CategoriesFeaturedComponent ],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock
        }
      ]
    })
    .compileComponents();
    //component = TestBed.inject(CategoriesFeaturedComponent);
    //httpClient = TestBed.inject(HttpClient);
    //httpTestingController = TestBed.inject(HttpTestingController);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component title in html', () =>{
    const fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    fixture.detectChanges();
    const h2 = fixture.nativeElement;
    expect(h2.querySelector('.title').textContent).toContain('Categorias em destaque');
  });

  it('should check category card item count in html', () =>{
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').length).toEqual(2)
  });

  it ('should check first category card name in html', () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName('category-item').item(0).textContent).toContain('Ração');
  });
  
});

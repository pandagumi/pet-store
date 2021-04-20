import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductsService } from "./../../services/products.service";
import { ProductComponent } from "./product.component";
import { ProductsServiceMock } from "../../mocks/product-mocks";
import { ActivatedRoute, convertToParamMap } from "@angular/router";

describe("ProductComponent", () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
      providers: [
        {
          provide: ProductsService,
          useClass: ProductsServiceMock,
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: "123" }) },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Should show the title and price of a product", () => {
    const html = fixture.nativeElement;
    const valor = html.querySelector("value");
    const desconto = html.querySelector("promotional-value");
    const titulo = html.querySelector("nome");
    expect(titulo?.textContent?.trim()).toEqual(undefined);
    expect(valor == 204.9);
    expect(desconto == 184.41);
  });
});

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MockComponents } from "ng-mocks";
import { ProductItemComponent } from "./product-item.component";
import { AnimalType, Product } from "./../../interfaces/product";
import { MatIcon } from "@angular/material/icon";
import { RouterTestingModule } from "@angular/router/testing";
import { MatCard, MatCardContent, MatCardTitle } from "@angular/material/card";

const product: Product = {
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
};

describe("ProductItemComponent", () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        ProductItemComponent,
        MockComponents(MatCard, MatIcon, MatCardTitle, MatCardContent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = product;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should check product name in html", () => {
    const html = fixture.nativeElement;
    const productName = document.querySelector("mat-card-title");
    expect(productName?.textContent).toEqual(`${product.name}`);
  });

  it("should check product_value in html", () => {
    const html = fixture.nativeElement;
    const productValue = document.querySelector("div .container-value");
    expect(productValue?.textContent).toContain(`${product.value}`);
  });

  it("should check promotional_value in html", () => {
    const html = fixture.nativeElement;
    const promotionalValue = document.querySelector("div .classeA");
    expect(promotionalValue?.textContent).toContain(
      `${product.promotional_value}`
    );
  });

  it("should show five icon stars", () => {
    const html = fixture.nativeElement;
    // get all mat-icon
    const matIcons = document.getElementsByTagName("mat-icon");
    // check mat-icon count
    expect(matIcons.length).toEqual(5);
    // check first mat-icon
    expect(matIcons[0].textContent?.trim()).toContain("star");
  });

  it("should show stars with 3.5 rating star", () => {
    // Atualizando as estrelas do produto
    component.product.rating_stars = 3.5;
    // Solicitando para que o HTML seja atualizado
    fixture.autoDetectChanges();
    // Obtendo todos os matIcons no html
    const matIcons = document.getElementsByTagName("mat-icon");
    // Checando todos os icones
    expect(matIcons[0].textContent.trim()).toEqual("star");
    expect(matIcons[1].textContent.trim()).toEqual("star");
    expect(matIcons[2].textContent.trim()).toEqual("star");
    expect(matIcons[3].textContent.trim()).toEqual("star_half");
    expect(matIcons[4].textContent.trim()).toEqual("star_border");
  });
});

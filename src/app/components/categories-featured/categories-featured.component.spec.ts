import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CategoriesServiceMock } from "../../mocks/categories-mocks";
import { CategoriesFeaturedComponent } from "./categories-featured.component";
import { CategoriesService } from "../../services/categories.service";
import { RouterLink } from "@angular/router";
import { MockComponent } from "ng-mocks";

describe("CategoriesFeaturedComponent", () => {
  let component: CategoriesFeaturedComponent;
  let fixture: ComponentFixture<CategoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesFeaturedComponent, MockComponent(RouterLink)],
      providers: [
        {
          provide: CategoriesService,
          useClass: CategoriesServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should show component title in html", () => {
    const fixture = TestBed.createComponent(CategoriesFeaturedComponent);
    fixture.detectChanges();
    const h2 = fixture.nativeElement;
    expect(h2.querySelector(".title").textContent).toContain(
      "Categorias em destaque"
    );
  });

  it("should check category card item count in html", () => {
    const html = fixture.nativeElement;
    expect(html.getElementsByClassName("category-item").length).toEqual(2);
  });

  it("should check first category card name in html", () => {
    const html = fixture.nativeElement;
    expect(
      html.getElementsByClassName("category-item").item(0).textContent
    ).toContain("Ração");
  });
});

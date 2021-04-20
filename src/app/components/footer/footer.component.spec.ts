import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterLink } from "@angular/router";
import { FooterComponent } from "./footer.component";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatIcon } from "@angular/material/icon";
import { ParametersServiceMock } from "./../../mocks/parameters-mocks";
import { ParametersService } from "../../services/parameters.service";
import { MockComponents } from "ng-mocks";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
        MockComponents(MatCard, MatCardContent, MatIcon, RouterLink),
      ],
      providers: [
        {
          provide: ParametersService,
          useClass: ParametersServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("shold verify if all the images work", () => {
    const html = fixture.nativeElement;
    const images = document.getElementsByTagName("img");
    expect(images.length).toEqual(2);
  });

  it("shold verify if the trademark work", () => {
    const html = fixture.nativeElement;
    const marca = html.querySelector(".trademark");
    expect(marca.textContent.trim()).toEqual("@Petstore");
  });
});

import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { MatIcon } from "@angular/material/icon";
import {
  MatSidenav,
  MatSidenavContainer,
  MatSidenavContent,
} from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { MockComponents } from "ng-mocks";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterLink } from "@angular/router";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        MockComponents(
          MatToolbar,
          MatSidenav,
          MatSidenavContent,
          MatSidenavContainer,
          MatIcon,
          FooterComponent,
          RouterLink
        ),
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'pet-store'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("pet-store");
  });

  it("should render title in mat-toolbar", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(
      compiled.querySelector("mat-sidenav-content span").textContent
    ).toContain("Pet Store");
  });
});

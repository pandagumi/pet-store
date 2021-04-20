import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from "@angular/common/http";
import { CategoriesFeaturedComponent } from "./components/categories-featured/categories-featured.component";
import { ProductItemComponent } from "./components/product-item/product-item.component";
import { MatCardModule } from "@angular/material/card";
import { ProductComponent } from "./pages/product/product.component";
import { NgxUsefulSwiperModule } from "ngx-useful-swiper";
import { FooterComponent } from "./components/footer/footer.component";
import { ParametersService } from "./services/parameters.service";
import { ContactComponent } from "./pages/contact/contact.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent,
    ProductComponent,
    FooterComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatCardModule,
    NgxUsefulSwiperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [ParametersService],
  bootstrap: [AppComponent],
})
export class AppModule {}

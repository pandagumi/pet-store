import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule} from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesFeaturedComponent } from './components/categories-featured/categories-featured.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoriesFeaturedComponent,
    ProductItemComponent

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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

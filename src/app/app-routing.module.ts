import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoriesFeaturedComponent } from "./components/categories-featured/categories-featured.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ProductComponent } from "./pages/product/product.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "", component: CategoriesFeaturedComponent },
  { path: "product/:id", component: ProductComponent },
  { path: "contact", component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

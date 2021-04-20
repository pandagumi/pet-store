import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { Product } from "./../../interfaces/product";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getProductsHighlights();
  }

  getProductsHighlights(): void {
    this.productService
      .getProductsHighlights()
      .subscribe((products) => (this.products = products));
  }
}

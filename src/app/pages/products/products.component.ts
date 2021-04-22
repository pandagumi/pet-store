import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ProductsGetResponse } from "src/app/interfaces/product";
import { ProductsService } from "src/app/services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  products: ProductsGetResponse;

  constructor(
    private http: HttpClient,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
}

import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, OnInit } from "@angular/core";
import { Product } from "src/app/interfaces/product";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.scss"],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  productInstallment = "";

  constructor() {}

  ngOnInit(): void {
    if (this.product.installment_available) {
      let productValue = this.product.promotional_value
        ? this.product.promotional_value
        : this.product.value;
      let installmentValue: string = (
        productValue / this.product.installment_count
      ).toFixed(2);
      this.productInstallment = `${this.product.installment_count}x R$: ${installmentValue}`;
    }
  }
}

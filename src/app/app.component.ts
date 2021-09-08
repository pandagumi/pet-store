import { Component } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";
import { Router } from "@angular/router";
import { PwaService } from "./services/pwa.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "pet-store";
  menus = [
    { name: "Home", router: "/" },
    { name: "Produtos", router: "/products" },
    { name: "Contato", router: "/contact" },
  ];

  constructor(
    private router: Router,
    public Pwa: PwaService
  ) {}

  showPage(pageName: string, sidenav: MatSidenav) {
    this.router.navigate([pageName]);
    sidenav.close();
  }

  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
}

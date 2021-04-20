import { Observable } from "rxjs";
import { Category } from "../interfaces/category";

export class CategoriesServiceMock {
  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>((observer) => {
      observer.next([
        {
          id: "dasdasd",
          name: "Ração",
          subcategories: ["ração seca"],
          url: "",
          description: "",
        },
        {
          id: "dasdasd",
          name: "Brinquedos",
          subcategories: ["pelucia"],
          url: "",
          description: "",
        },
      ]);
      observer.complete();
    });
  }
}

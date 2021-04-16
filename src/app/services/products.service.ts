import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProductsHighlights(): Observable<Product[]> {
    return new Observable<Product[]>(observer => {
      this.http.get<Product[]>(`${environment.apiUrl}/v1/products-highlights`).subscribe(
        products => {
          observer.next(products);
          observer.complete();
        },
        () => {
          observer.error('error_on_get_products_highlights');
          observer.complete();
        }
      )
    });
  }

  
  }


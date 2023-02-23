import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Product } from '../products/product-create/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  bsaeUrl = 'http://localhost:3001/products';

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  showMessage(msg: string):void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top'
    })
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.bsaeUrl, product)
  }

  read(): Observable<Product[]>{
      return this.http.get<Product[]>(this.bsaeUrl)
  }
}

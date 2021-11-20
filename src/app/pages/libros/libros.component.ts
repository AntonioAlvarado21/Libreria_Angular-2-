import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Libro } from './interface/libro.interface';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {

  libros!:Libro[];
  constructor(private librosSvc: LibrosService, private shoppingCartSvc: ShoppingCartService) { }

  ngOnInit(): void {

    this.librosSvc.getLibros()
    .pipe(
      tap((libros: Libro[]) => this.libros = libros),
    )
    .subscribe();

  }

  addToCart(libro:Libro):void{
    console.log('Add to cart', libro);
    this.shoppingCartSvc.updateCart(libro);
  }

}

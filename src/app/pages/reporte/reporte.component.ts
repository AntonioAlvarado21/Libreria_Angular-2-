import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { DataService } from 'src/app/shared/components/header/services/data.service';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Libro } from '../libros/interface/libro.interface';
import { LibrosService } from '../libros/services/libros.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  libros!:Libro[];

  constructor(private dataSvc:DataService,
    private shoppingCartSvc: ShoppingCartService,
    private router:Router,
    private librosSvc:LibrosService) { }

  ngOnInit(): void {
    this.librosSvc.getLibros()
    .pipe(
      tap((libros: Libro[]) => this.libros = libros),
    )
    .subscribe();
  }


}

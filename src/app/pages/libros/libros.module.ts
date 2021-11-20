import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { LibroComponent } from './libro/libro.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    LibrosComponent,
    LibroComponent
  ],
  imports: [
    CommonModule,
    LibrosRoutingModule,
    MaterialModule
  ]
})
export class LibrosModule { }

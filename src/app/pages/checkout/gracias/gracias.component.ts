import { Component, Input, OnInit } from '@angular/core';
import { Libro } from '../../libros/interface/libro.interface';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent implements OnInit {

  @Input() libro!:Libro
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay, switchMap, tap } from 'rxjs';
import { Cliente } from 'src/app/shared/components/header/interfaces/clientes.interface';
import { Details, Ordenes } from 'src/app/shared/components/header/interfaces/ordenes.interface';
import { DataService } from 'src/app/shared/components/header/services/data.service';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';
import { Libro } from '../libros/interface/libro.interface';
import { LibrosService } from '../libros/services/libros.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  model = {
    name:'Default',
    store: '',
    delegacion: '',
    estado: '',
  };

  clienteNuevo =  true;

  cart: Libro[] = [];
  clientes: Cliente[] = [ ];

  constructor(
    private dataSvc:DataService,
    private shoppingCartSvc: ShoppingCartService,
    private router:Router,
    private libroSvc:LibrosService) {
      this.checkIfCartIsEmpty();
    }

  ngOnInit(): void {
    this.getClientes();
    this.getDataCart();
    this.prepareDetails();
  }

  tipoCliente(value:boolean):void{
    this.clienteNuevo = value;
  }

  onSubmit({value: formData}:NgForm):void{
    console.log('Guardar',formData);
    const data: Ordenes = {
      ...formData,
      fecha: this.getCurrentDay()
    }

    this.dataSvc.saveOrder(data).pipe(
      tap(res => console.log('Order --> ',res)),
      switchMap((order) => {
        const orderId = order.idCliente;
        const details = this.prepareDetails();
        return this.dataSvc.saveDetailsOrder({details,orderId});
      }),
      tap(() => this.router.navigate(['/checkout/gracias'])),
      delay(5000),
      tap(() => this.shoppingCartSvc.resetCart())
    ).subscribe();

  }

  onCancel(){
    this.router.navigate(['/']),
    delay(2000),
    this.shoppingCartSvc.resetCart();
    }

  getClientes():void{
    this.dataSvc.getClientes()
    .pipe(
      tap((clientes:Cliente[]) => this.clientes = clientes))
    .subscribe()
  }

  private getCurrentDay():string{
    return new Date().toLocaleDateString();
  }

  private prepareDetails(): Details[]{
    const details: Details[] = [];
    this.cart.forEach((libro:Libro) => {
      const { id:productId, titulo:productName, qty:quantity,stock} = libro;
      const updateStock = (stock-quantity);
      this.libroSvc.updateStock(productId,updateStock).pipe(
        tap(() => details.push({productId,productName,quantity}))
      ).subscribe()

    })
    return details;

  }

  private getDataCart():void{
    this.shoppingCartSvc.cartAction$.pipe(
      tap((libros: Libro[]) => this.cart = libros)
    ).subscribe()
  }

  private checkIfCartIsEmpty():void{
    this.shoppingCartSvc.cartAction$
    .pipe(
      tap((libros: Libro[]) => {
        if(Array.isArray(libros) && !libros.length){
          this.router.navigate(['/']);
        }
      })
    )
    .subscribe()
  }

}

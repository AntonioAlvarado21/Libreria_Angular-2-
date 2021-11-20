import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-header',
  template: `
<mat-toolbar color="primary">
  <span class="mouseHover" (click)="onCancel()"><mat-icon>stars</mat-icon> Libreria Mayorista Luna <mat-icon>stars</mat-icon> </span>
  <span class="spacer"></span>
  <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
</mat-toolbar>
`,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router, private shoppingCartSvc: ShoppingCartService){ }

  goToCheckout():void{
    this.router.navigate(['/checkout'])
  }

  goToMain():void{
    this.router.navigate(['/'])
  }

  onCancel():void{
      var opcion = confirm("¿Desea ir a la pagina de inicio? - Si continua se perderan sus pedidos no finalizados")
      if (opcion == true)
      {
        this.shoppingCartSvc.resetCart();
        delay(9000);
        this.router.navigate(['/']);
      }else{

      }
    }


}

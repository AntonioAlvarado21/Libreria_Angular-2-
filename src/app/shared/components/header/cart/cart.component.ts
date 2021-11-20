import { Component } from "@angular/core";
import { ShoppingCartService } from "../services/shopping-cart.service";

@Component({
    selector: 'app-cart',
    template: `
    <ng-container *ngIf="{ total: total$ | async, cantidad: cantidad$ | async} as dataCart">
        <ng-container *ngIf="dataCart.total">
            <mat-icon>book</mat-icon>
            Articulos: ({{dataCart.cantidad}}) - 
            <mat-icon>shopping_cart</mat-icon> Total: {{dataCart.total | currency}}
        </ng-container>
    </ng-container>
    `
})

export class CartComponent{
    cantidad$ = this.shoppingCartSvc.quantityAction$;
    total$ = this.shoppingCartSvc.totalAction$;
    cart$ = this.shoppingCartSvc.cartAction$;

    constructor(private shoppingCartSvc: ShoppingCartService) {}
}
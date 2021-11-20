import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ShoppingCartService } from 'src/app/shared/components/header/services/shopping-cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private shoppingCartSvc:ShoppingCartService) { }

  ngOnInit(): void {
  }

  //validacion(){

  //}

  onCancel(){
    this.router.navigate(['/']),
    delay(2000),
    this.shoppingCartSvc.resetCart();
    }

    onSubmit(){
      this.router.navigate(['/reporte']),
      delay(2000),
      this.shoppingCartSvc.resetCart();
    }
}

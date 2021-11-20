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

  usuario!:string;
  password!:string;

  constructor(private router:Router, private shoppingCartSvc:ShoppingCartService) {

  }

  ngOnInit(): void {
  }

  login(){
    if(this.usuario==="jorge" && this.password==="1234")
    {
      this.onSubmit();
    }else{
      alert("Datos incorrectos");
      location.reload();
    }

  }


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

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Libro } from "src/app/pages/libros/interface/libro.interface";

@Injectable({
    providedIn: 'root'
})

export class ShoppingCartService{
    libros: Libro[] = [];

    private nomLibro = new BehaviorSubject<Libro[]>([]);
    private totalLibro = new BehaviorSubject<number>(0);
    private cantidadLibro = new BehaviorSubject<number>(0);


    get totalAction$():Observable<number>{
        return this.totalLibro.asObservable();
    }

    get quantityAction$():Observable<number>{
        return this.cantidadLibro.asObservable();
    }

    get cartAction$():Observable<Libro[]>{
        return this.nomLibro.asObservable();
    }

    updateCart(libro: Libro):void{
        this.addToCart(libro);
        this.quantityProducts();
        this.calcTotal();
    }

    resetCart():void{
      this.nomLibro.next([]);
      this.totalLibro.next(0);
      this.cantidadLibro.next(0);
      this.libros=[];
    }


    private addToCart(libro: Libro):void{

        const isBookinCart = this.libros.find(({id}) => id === libro.id)

        if(isBookinCart)
        {
          isBookinCart.qty +=1;
        }else{
          this.libros.push({...libro,qty:1})
        }

        this.nomLibro.next(this.libros);
    }

    private quantityProducts():void{
        const quantity = this.libros.reduce((acc,lib) => acc+= lib.qty,0);
        this.cantidadLibro.next(quantity);
    }

    private calcTotal(): void{
        const total = this.libros.reduce((acc,lib) => acc+=(lib.precio * lib.qty),0);
        this.totalLibro.next(total);
    }


}

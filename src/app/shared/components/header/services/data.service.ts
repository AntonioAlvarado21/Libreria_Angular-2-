import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cliente } from "../interfaces/clientes.interface";
import { DetailsOrder, Ordenes } from "../interfaces/ordenes.interface";

@Injectable({
  providedIn: 'root'
})

export class DataService{
  private apiURL='http://localhost:3000';
  constructor(private http:HttpClient) {}

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}/clientes`)
  }

  saveOrder(order:Ordenes):Observable<Ordenes>{
    return this.http.post<Ordenes>(`${this.apiURL}/ordenes`,order);
  }

  saveDetailsOrder(details:DetailsOrder):Observable<DetailsOrder>{
    return this.http.post<DetailsOrder>(`${this.apiURL}/detailsOrders`,details);
  }

}

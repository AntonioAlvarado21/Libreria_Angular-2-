export interface Details {

  productId: number;
  quantity: number;
  productName: string;

}

export interface Ordenes{

  idCliente: number;
  nombre: string;
  ciudad: string;
  estado: string;
  fecha: string;
  disponible: boolean;

}


export interface DetailsOrder{
  details: Details[];
  orderId: number;
}

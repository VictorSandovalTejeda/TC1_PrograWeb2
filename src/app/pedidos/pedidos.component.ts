import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../shared/models/ordenes';
import { OrdersMock } from '../shared/orders-mock';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  orders : Array<Ordenes>;
  selectedOrder : Ordenes;
  deliver : Array<string>;

  constructor() { }

  ngOnInit() {
    this.orders = OrdersMock;
    this.deliver = ["Yes", "No"]
  }

  Select(order : Ordenes){
    this.selectedOrder = order;
  }

}

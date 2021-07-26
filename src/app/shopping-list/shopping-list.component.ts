import { Component, OnInit } from '@angular/core';
import { ICart } from '../shared/cart.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  value1: number;
  carts: ICart[];
  

  // constructor
  constructor() { }

  // public methods
  ngOnInit(): void {
    this.carts = [] as ICart[];

  }

  // private methods
}

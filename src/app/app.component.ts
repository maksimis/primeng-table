import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from "./customerservice";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customers1: Customer[] = [];

  selectedCustomer1: Customer = {};

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersMedium().then(data => this.customers1 = data);
  }
}

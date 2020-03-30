import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
<<<<<<< HEAD
import { OrdersService } from '../../orders.service';
=======
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';
import { logout } from '../../utils';

>>>>>>> b852811d2bb34b842bd40f7f3067373baa923812

@Component({
  selector: 'app-tab-personal-information',
  templateUrl: './tab-personal-information.component.html',
  styleUrls: ['./tab-personal-information.component.css']
})
export class TabPersonalInformationComponent implements OnInit {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  arrCustomers: any[];
  customer: any;
  customerId: number;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.customerId = parseInt(localStorage.getItem('customerIdKanala'));

    this.form1 = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      passwordRepeat: new FormControl()
    });

    this.form2 = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      region: new FormControl(),
      postcode: new FormControl(),
      country: new FormControl(),
      phone: new FormControl(),
    });

    this.form3 = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      address: new FormControl(),
      city: new FormControl(),
      region: new FormControl(),
      postcode: new FormControl(),
      country: new FormControl(),
      phone: new FormControl(),
    })
  }

  ngOnInit() {
    this.ordersService.getAll(this.customerId)
      .then(response => {
        this.arrCustomers = response;
        console.log(this.arrCustomers);
        this.customer = this.arrCustomers["customer"][0];
      })
      .catch(err => {
        console.log(err);
      });
  }

  onSubmit1() {
    // Llamara al serivicio que hara la peticion put/patch
  }

  onSubmit2() {
    // Llamara al serivicio que hara la peticion put/patch
  }

  onSubmit3() {
    // Llamara al serivicio que hara la peticion put/patch
  }

  handleLogout() {
    logout(this.router);
  }

}

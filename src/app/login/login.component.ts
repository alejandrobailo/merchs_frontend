import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomersService } from '../customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  formRegister: FormGroup;

  constructor(private customersService: CustomersService, private router: Router) {

    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

    this.formRegister = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      passwordRepeat: new FormControl(),
    });
  }

  ngOnInit() {
  }

  async submitLogin() {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('customerIdKanala');

      const result = await this.customersService.login(this.formLogin.value);

      localStorage.setItem('token', result.success);
      localStorage.setItem('customerIdKanala', result.customerId);

      if (localStorage.getItem('cart') === null) {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/cart']);
      }
    } catch (error) {
      console.log(error.error);
    }
  }
}

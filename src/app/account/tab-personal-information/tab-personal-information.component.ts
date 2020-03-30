import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-personal-information',
  templateUrl: './tab-personal-information.component.html',
  styleUrls: ['./tab-personal-information.component.css']
})
export class TabPersonalInformationComponent implements OnInit {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  constructor() {

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
  }

}

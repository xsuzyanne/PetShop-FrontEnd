import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    nameCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    emailCtrl: ['', [Validators.required, Validators.email]],
  });
  isLinear = true;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}

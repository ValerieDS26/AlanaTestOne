import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterPage } from '../../pages/register/register';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public form_step1: FormGroup;

  constructor(public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.form_step1 = this.formBuilder.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender:['', Validators.required]
    });
  }

  public registerForm(): void{
    this.navCtrl.push(RegisterPage,{'form':this.form_step1});
  }

}

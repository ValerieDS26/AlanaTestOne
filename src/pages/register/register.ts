import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  public form_step2: FormGroup;
  private form_step1: any;
  public countries : Array<string>=[];
  public states: Array<string>=[];
  public cities: Array<string>=[];

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public alertCtrl: AlertController){
    
    this.countries =['Venezuela','Colombia'];

    this.states =['Estado_1','Estado_2'];

    this.cities =['Ciudad_1','Ciudad_2'];

    this.form_step2 = this.formBuilder.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      direction:['', Validators.required],
      cod_country:['', Validators.required],
      phone:['', Validators.required]
    });

  }

  ionViewWillEnter(){
    this.form_step1 = this.navParams.get('form').value;
  }


  public showAlert(): void {
    const alert = this.alertCtrl.create({
      title: 'Usuario Registrado!',
      subTitle: "Nombre: "+this.form_step1.name+", Apellido: "+this.form_step1.lastName
      +", Genero: "+this.form_step1.gender+", Fecha de Nacimiento: "+this.form_step1.birthDate
      +", País: "+this.form_step2.value.country+", Estado: "+this.form_step2.value.state
      +", Ciudad: "+this.form_step2.value.city+", Dirección: "+this.form_step2.value.direction
      +", Cod. País: "+this.form_step2.value.cod_country+", Teléfono: "+this.form_step2.value.phone,
      buttons: ['OK']
    });
    alert.present();
  }
  
}

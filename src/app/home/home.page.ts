import { Component } from '@angular/core';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
formularioLogin : FormGroup;

  constructor(public fb:FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController ) {
    this.formularioLogin = this.fb.group({
    'nombre':new FormControl("",Validators.required),
    'password':new FormControl("",Validators.required)})
    }


    
async ingresar(){
  var f = this.formularioLogin.value;

  var usuario = JSON.parse(localStorage.getItem('usuario'));
  if(usuario.nombre == f.nombre && usuario.password == f.password){
    console.log('Ingresado');
    localStorage.setItem('ingresado','true')
    this.navCtrl.navigateRoot('inicio');
  }else{
    const alert = await this.alertController.create({

      subHeader : 'Datos Incorrectos  ',
      message: 'Intenta Denuevo Ingresando Datos Correctos',
      buttons: ['Aceptar']
     

    });
    await alert.present();

  }
}




}




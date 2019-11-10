import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: any;

	constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public navCtrl: NavController
  ) { 
		this.loginForm = {
			username: '',
			password: '',
      action : 'login'
		};
	}

	ngOnInit() {
		// alert("HELLO WORLD");
	}


	async handleLoginSubmission(){
    console.log("login form: ", this.loginForm);
    // this.http.post('http://localhost/naicha/authentication.php', JSON.stringify(this.loginForm))
    // .subscribe(async (response = {}) => {
    //   console.log("RESPONSE IS: ",response);
    //   if(!response.is_logged_in){
    //     const alert = await this.alertController.create({
    //       header: 'Error!',
    //       subHeader: 'Login Failed',
    //       message: response.error_message,
    //       buttons: ['OK']
    //     });

    //     await alert.present();
    //   }
    //   else{
    //     localStorage.setItem('passport_token', response.token);
    //     this.navCtrl.navigateForward('/home');
    //   }
    // });

  //   // http://localhost/naicha/login.php

		// console.log("LOGIN FORM: ", this.loginForm);
	}

}

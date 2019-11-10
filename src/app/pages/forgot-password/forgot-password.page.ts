import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
	forgotPassword: object;

  	constructor() { 
  		this.forgotPassword = {
  			email: '',
  			
  		};

  		console.log("INITIALIZED LOGIN FORM: ", this.forgotPassword);
  	}

  	ngOnInit() {
  		// alert("HELLO WORLD");
  	}


  	 async handleLoginSubmission(){
  		console.log("LOGIN FORM: ", this.forgotPassword);
  	}
}


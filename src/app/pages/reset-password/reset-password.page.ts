import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetpassword: object;

  	constructor() { 
  		this.resetpassword = {
  			email: '',
  			newPassword:'',
  			confirmedNewPassword:'',  			
  		};

  		console.log("INITIALIZED LOGIN FORM: ", this.resetpassword);
  	}

  	ngOnInit() {
  		// alert("HELLO WORLD");
  	}


  	async handleLoginSubmission(){
  		console.log("LOGIN FORM: ", this.resetpassword);
  	}
}

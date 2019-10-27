import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  resetpassword: object;

  	constructor() { 
  		this.resetpassword = {
  			emailAddress: '',
  			newPassword:'',
  			confirmedNewPassword:'',  			
  		};

  		console.log("INITIALIZED LOGIN FORM: ", this.resetpassword);
  	}

  	ngOnInit() {
  		// alert("HELLO WORLD");
  	}


  	handleLoginSubmission(){
  		console.log("LOGIN FORM: ", this.resetpassword);
  	}
}

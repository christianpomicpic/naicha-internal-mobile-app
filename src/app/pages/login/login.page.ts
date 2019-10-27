import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: object;

  	constructor() { 
  		this.loginForm = {
  			email: '',
  			password: '',
  		};

  		console.log("INITIALIZED LOGIN FORM: ", this.loginForm);
  	}

  	ngOnInit() {
  		// alert("HELLO WORLD");
  	}


  	handleLoginSubmission(){
  		console.log("LOGIN FORM: ", this.loginForm);
  	}

}

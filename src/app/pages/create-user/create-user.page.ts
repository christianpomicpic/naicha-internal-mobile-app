import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
	createUser: object;
  	constructor(
  		private pickerController: PickerController
  	) { 
  		this.createUser = {
  			firstName: '',
  			lastName: '',
  			birthBate: '',
  			gender:'',
  			accountType:'',
  		};
  	}

  	ngOnInit() {
  		
  	}


  	handleLoginSubmission(){
  		console.log("LOGIN FORM: ", this.createUser);
  	}

  	async showMenu(){
  		let opts: PickerOptions = {
  			buttons: [
  				{
  					text: 'Cancel',
  					role: 'cancel'
  				},
  				{
  					text: 'Done'
  				}
  			],
  			columns: [
  				{
  					name: 'Framework',
  					options: [
  						{ text: 'Male', value: 'Male' },
  						{ text: 'Female', value: 'Female' },
  					]
  				}
  			]
  		};

  		let picker = await this.pickerController.create(opts);
  		picker.present();
  		picker.onDidDismiss().then(async data => {
  			let col = await picker.getColumn('Framework');
  			this.createUser.gender = col.options[col.selectedIndex].value;
  		});
  	}
}

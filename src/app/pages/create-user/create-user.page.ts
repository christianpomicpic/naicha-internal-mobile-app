import { Component, OnInit, Input } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
	selector: 'app-create-user',
	templateUrl: './create-user.page.html',
	styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
	createUser: any = {
		firstName: '',
		lastName: '',
		accountType:'',
		email:'',
		password:'',
		confirmPassword: ''
	};
	constructor(
		private pickerController: PickerController
	) { 
		console.log("CREATE USER: ", this.createUser);
	}

	ngOnInit() {

	}


	handleLoginSubmission(){
		console.log("LOGIN FORM: ", this.createUser);
	}

	async showMenu(type, givenOptions){
		console.log("OPTIONS: ", givenOptions);

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
					name: 'PickerOptions',
					options: givenOptions
				}
			]
		};

		let picker = await this.pickerController.create(opts);
		let selfInstance = this;

		picker.present();
		picker.onDidDismiss().then(async data => {
			let col = await picker.getColumn('PickerOptions');
			if(type == 'account_type'){
				this.createUser.accountType = col.options[col.selectedIndex].value;
			}

			if(data.data){
			
				// console.log("DATA: ", data);
				// console.log("VALUE IS: ", col.options[col.selectedIndex].value);
			}	
		});
	}

	handleSubmission(){
		console.log("FORM TO SUBMIT: ", this.createUser);
	}
}

import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
	settings: any = {
		firstName: '',
		lastName: '',
		oldPassword:'',
		email:'',
		newPassword:'',
		confirmPassword: ''
		};
	constructor(
		private pickerController: PickerController
	) { 
		console.log("CREATE USER: ", this.settings);
	}

	ngOnInit() {

	}


	handleLoginSubmission(){
		console.log("LOGIN FORM: ", this.settings);
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
				this.settings.accountType = col.options[col.selectedIndex].value;
			}

			if(data.data){
			
				// console.log("DATA: ", data);
				// console.log("VALUE IS: ", col.options[col.selectedIndex].value);
			}	
		});
	}

	 async handleSubmission(){
		console.log("FORM TO SUBMIT: ", this.settings);
	}
}
//   constructor() { }

//   ngOnInit() {
//   }

// }

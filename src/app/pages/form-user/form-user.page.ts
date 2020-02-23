import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PickerController, AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-form-user',
	templateUrl: './form-user.page.html',
	styleUrls: ['./form-user.page.scss'],
})
export class FormUserPage implements OnInit {
	action: any;

	form: any = {
		first_name: '',
		last_name: '',
		role_label:'',
		role:'',
		email:''
	};

	apiValidators: any = {
		first_name: '',
		last_name: '',
		role:'',
		email:''
	};

	constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private pickerController: PickerController,
		public loadingController: LoadingController,
  		public axios: AxiosService,
  		public navCtrl: NavController
	) {
		this.route.queryParams.subscribe(params => {
			let parameter = JSON.parse(params.parameters);
			console.log("PARAMETERS: ", parameter);
			this.action = parameter.action;
		});
	}

	ngOnInit() {
	}


	handleLoginSubmission(){
		console.log("LOGIN FORM: ", this.form);
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
				this.form.role = col.options[col.selectedIndex].value;
				this.form.role_label = col.options[col.selectedIndex].text;
			}
		});
	}

	async handleSubmission(){
		const loading = await this.loadingController.create({
			message: 'Saving new user, please wait...'
		});

		await loading.present();

		this.clearApiValidators();

		console.log("FORM TO SUBMIT: ", this.form);
			
		let uri = '/create-new-user';
		if(this.action == 'update'){
			// NO FUNCTIONALITY YET
		}

		this.axios.post(uri, this.form).then(async (response:any = {}) => {
			// localStorage.setItem('new_user_info', JSON.stringify(response.data.userInfo));
			// localStorage.setItem('user_form_action', this.action);
			this.navCtrl.back();
			await loading.dismiss();
		}).catch(async (error:any = {}) => {
			if(error.response){
				if(error.response.status == 422){
					for(let key in error.response.data.errors){
						this.apiValidators[key] = error.response.data.errors[key][0];
					}
				}
			}

			await loading.dismiss();
		});
	}

	clearApiValidators(){
		for(let key in this.apiValidators){
			this.apiValidators[key] = '';
		}
	}
}

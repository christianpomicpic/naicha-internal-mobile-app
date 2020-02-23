import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PickerController, AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-form-item',
	templateUrl: './form-item.page.html',
	styleUrls: ['./form-item.page.scss'],
})
export class FormItemPage implements OnInit {
	action: any;
	form: any = {
		id: '',
		itemName: '',
		item_unit_selector: '',
		units: []
	};

	apiValidators: any = {
		id: '',
		itemName: '',
		units: ''
	};

	constructor(
		private route: ActivatedRoute, 
		private router: Router,
		private pickerController: PickerController,
		public loadingController: LoadingController,
  		public axios: AxiosService,
  		public navCtrl: NavController
	){ 
		this.route.queryParams.subscribe(params => {
			let parameter = JSON.parse(params.parameters);
			console.log("FORM ITEM PARAMETERS: ", parameter);
			this.action = parameter.action;
			if(this.action == 'update'){
				this.form['itemName'] = parameter.itemInfo.name;
				for(let counter = 0; counter < parameter.itemInfo.information.units.length; counter++){
					this.form.units.push(parameter.itemInfo.information.units[counter]);
				}
				this.form['id'] = parameter.itemInfo.id;
			}
		});
	}

	ngOnInit() {
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

			if(!this.form.units.includes(col.options[col.selectedIndex].value)){
				this.form.units.push(col.options[col.selectedIndex].value);
			}
		}).catch((error) => {
			console.log("ERRO SIYA: ", error);
		});
	}

	async handleSubmission(){
		const loading = await this.loadingController.create({
			message: 'Saving item information, please wait...'
		});

		await loading.present();

		this.clearApiValidators();

		console.log("FORM TO SUBMIT: ", this.form);
			
		let uri = '/create-new-item';
		if(this.action == 'update'){
			// NO FUNCTIONALITY YET
			uri = '/update-item';
		}

		this.axios.post(uri, this.form).then(async (response:any = {}) => {
			// localStorage.setItem('new_item_info', JSON.stringify(response.data.item));
			// localStorage.setItem('item_form_action', this.action);

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

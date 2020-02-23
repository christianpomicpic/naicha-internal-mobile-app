import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PickerController, AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-form-branch',
	templateUrl: './form-branch.page.html',
	styleUrls: ['./form-branch.page.scss'],
})
export class FormBranchPage implements OnInit {
	action: any;
	form: any = {
		id: '',
		address: '',
	};

	apiValidators: any = {
		id: '',
		address: ''
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
			// 	this.form['itemName'] = parameter.itemInfo.name;
			// 	for(let counter = 0; counter < parameter.itemInfo.information.units.length; counter++){
			// 		this.form.units.push(parameter.itemInfo.information.units[counter]);
			// 	}
				this.form['id'] = parameter.branchInfo.id;
				this.form['address'] = parameter.branchInfo.name;
			}
		});
	}

	async handleSubmission(){
		const loading = await this.loadingController.create({
			message: 'Saving branch information, please wait...'
		});

		await loading.present();

		this.clearApiValidators();

		console.log("FORM TO SUBMIT: ", this.form);
			
		let uri = '/create-branch';
		if(this.action == 'update'){
			uri = '/update-branch';
		}

		this.axios.post(uri, this.form).then(async (response:any = {}) => {
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


	ngOnInit() {
	}

}

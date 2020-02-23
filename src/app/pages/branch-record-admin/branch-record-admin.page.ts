import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { PickerController, AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
import { AxiosService } from '../../axios.service';

@Component({
  	selector: 'app-branch-record-admin',
  	templateUrl: './branch-record-admin.page.html',
  	styleUrls: ['./branch-record-admin.page.scss'],
})
export class BranchRecordAdminPage implements OnInit {

	currentTab: any = 'branch_items';
	branchItems: any = [];

  	constructor(
  		private route: ActivatedRoute, 
		private router: Router,
		private pickerController: PickerController,
		public loadingController: LoadingController,
  		public axios: AxiosService,
  		public navCtrl: NavController
  	) { 
  		this.route.queryParams.subscribe(async (params) => {
			let parameter = JSON.parse(params.parameters);
			console.log("PARAMETERS: ", parameter);

			const loading = await this.loadingController.create({
				message: 'Fetching data, please wait...'
			});

			await loading.present();

			this.getResources(parameter.branchInfo, loading);
		});

	  		
  	}

  	async ionViewDidEnter(){
		// await this.getResources();
	}

	async ngOnInit() {
		// await this.getResources();
	}

	async getResources(itemInfo, loading){
		this.axios.get('/get-branch-info', { id: itemInfo.id }).then(async (response:any = {}) => {
			this.branchItems = response.data.branchInfo.items;
			// this.branchItems = response.data.items;

			// console.log("ITEM LIST: ", this.itemList);
			await loading.dismiss();
		}).catch(async (error) => {
			await loading.dismiss();
		});
	}

}

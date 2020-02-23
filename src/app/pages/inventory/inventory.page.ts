import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-inventory',
	templateUrl: './inventory.page.html',
	styleUrls: ['./inventory.page.scss'],
})
export class InventoryPage implements OnInit {
	itemList: any = [];

	constructor(
		public loadingController: LoadingController,
		public axios: AxiosService,
		public alertController: AlertController,
		private router: Router
	){

	}

	async ionViewDidEnter(){
		await this.getResources();
	}

	async ngOnInit() {
		// await this.getResources();
	}

	async getResources(){
		const loading = await this.loadingController.create({
			message: 'Fetching data, please wait...'
		});

		await loading.present();

		this.axios.get('/get-all-items', {}).then(async (response:any = {}) => {
			this.itemList = response.data.items;

			console.log("ITEM LIST: ", this.itemList);
			await loading.dismiss();
		}).catch(async (error) => {
			await loading.dismiss();
		});
	}

	openItemForm(action, itemInfo = null){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				parameters: JSON.stringify({ action: action, itemInfo: itemInfo })
			}
		};
		this.router.navigate(['form-item'], navigationExtras);
	}
}

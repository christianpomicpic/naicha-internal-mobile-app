import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-user-management',
	templateUrl: './user-management.page.html',
	styleUrls: ['./user-management.page.scss'],
})
export class UserManagementPage implements OnInit {
	userList: any = [];


	constructor(
		public loadingController: LoadingController,
		public axios: AxiosService,
		public alertController: AlertController,
		private router: Router
	) { 

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

		this.axios.get('/get-all-users', {}).then(async (response:any = {}) => {
			this.userList = response.data.users;
			await loading.dismiss();
		}).catch(async (error) => {
			await loading.dismiss();
		});
	}

	handleSelectUser(data){
		console.log("HANDLE SELECT USER: ", data);
	}

	openUserForm(action, userInfo = null){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				parameters: JSON.stringify({ action: action, userInfo: userInfo })
			}
		};
		this.router.navigate(['form-user'], navigationExtras);
	}
}

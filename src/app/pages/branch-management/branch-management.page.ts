import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AxiosService } from '../../axios.service';

@Component({
	selector: 'app-branch-management',
	templateUrl: './branch-management.page.html',
	styleUrls: ['./branch-management.page.scss'],
})
export class BranchManagementPage implements OnInit {
	branchList: any = [];

	constructor(
		public loadingController: LoadingController,
		public axios: AxiosService,
		public alertController: AlertController,
		private router: Router
	) { }

	ngOnInit() {
	}

  	async ionViewDidEnter(){
		await this.getResources();
	}

	// async ngOnInit() {
	// 	await this.getResources();
	// }

	async getResources(){
		const loading = await this.loadingController.create({
			message: 'Fetching data, please wait...'
		});

		await loading.present();

		this.axios.get('/get-branches', {}).then(async (response:any = {}) => {
			this.branchList = response.data.branches;
			await loading.dismiss();
		}).catch(async (error) => {
			await loading.dismiss();
		});
	}

	openBranchForm(action, branchInfo = null){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				parameters: JSON.stringify({ action: action, branchInfo: branchInfo })
			}
		};
		this.router.navigate(['form-branch'], navigationExtras);
	}

	openBranchRecord(branch){
		let navigationExtras: NavigationExtras = {
			queryParams: {
				parameters: JSON.stringify({ branchInfo: branch })
			}
		};
		this.router.navigate(['branch-record-admin'], navigationExtras);
	}
}

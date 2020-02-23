import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, NavController, Events, LoadingController } from '@ionic/angular';
import { AxiosService } from '../../axios.service';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	loginForm: any;

	constructor(
    private http: HttpClient,
    public alertController: AlertController,
    public navCtrl: NavController,
    public events: Events,
    public axios: AxiosService,
    public loadingController: LoadingController
  ) { 
		this.loginForm = {
			email: '',
			password: ''
		};
	}

	ngOnInit() {
	 let token = localStorage.getItem('token');
   if(token){
    this.navCtrl.navigateForward('/home');
   }
  }


	async handleLoginSubmission(){
    const loading = await this.loadingController.create({
      message: 'Logging In. Please Wait...'
    });

    await loading.present();

    this.axios.post('/authentication/login', this.loginForm).then(async (response:any = {}) => {
      // console.log(response);
      localStorage.setItem('token', response.data.token);
      
      await loading.dismiss();
      this.navCtrl.navigateForward('/home');
    }).catch(async (error) => {
      console.log("ERROR: ", error);
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Invalid Credentials. Please Try Again...',
        buttons: ['OK']
      });
      await alert.present();
      await loading.dismiss();
    });
	}

}

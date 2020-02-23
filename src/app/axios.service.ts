import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import axios from 'axios';

@Injectable({
  	providedIn: 'root'
})

export class AxiosService {

  	constructor() { 
  		console.log("AXIOS SERVICE LOADED SUCCESSFULLY!");
  	}

  	post(url, params, config = { headers: {} }){
		return new Promise(function(resolve, reject) {
			var token = localStorage.getItem('token');
			if(token){
				config['headers']['Authorization'] = 'Bearer ' + token;
			}

	        axios.post(environment.api_url + url, params, config).then((response) => {
	        	console.log(response);
	        	resolve(response);
	        }).catch((errorResponse) => {
	        	reject(errorResponse);
	        });
	    });
	}

	get(url, params, config = { headers: {} }){
		return new Promise(function(resolve, reject) {
			var token = localStorage.getItem('token');
			if(token){
				config['headers']['Authorization'] = 'Bearer ' + token;
			}

			config['params'] = params;
			axios.get(environment.api_url + url, config).then((response) => {
				console.log(response);
	        	resolve(response);
			}).catch(errorResponse => {
	        	reject(errorResponse);
			});
		});
	}

	put(url, params, config = { headers: {} }){
		return new Promise(function(resolve, reject) {
			var token = localStorage.getItem('token');
			if(token){
				config['headers']['Authorization'] = 'Bearer ' + token;
			}

	        axios.put(environment.api_url + url, params, config).then((response) => {
	        	console.log(response);
	        	resolve(response);
	        }).catch((errorResponse) => {
	        	reject(errorResponse);
	        });
	    });
	}

	patch(url, params, config = { headers: {} }){
		return new Promise(function(resolve, reject) {
			var token = localStorage.getItem('token');
			if(token){
				config['headers']['Authorization'] = 'Bearer ' + token;
			}

	        axios.patch(environment.api_url + url, params, config).then((response) => {
	        	console.log(response);
	        	resolve(response);
	        }).catch((errorResponse) => {
	        	reject(errorResponse);
	        });
	    });
	}

	delete(url, params, config = { headers: {} }){
		return new Promise(function(resolve, reject) {
			var token = localStorage.getItem('token');
			if(token){
				config['headers']['Authorization'] = 'Bearer ' + token;
			}

			config['params'] = params;
			axios.delete(environment.api_url + url, config).then((response) => {
				console.log(response);
	        	resolve(response);
			}).catch(errorResponse => {
	        	reject(errorResponse);
			});
		});
	}
}

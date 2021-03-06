import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

	private loggedIn = false;

	constructor( private http: Http ) {

	}

	login( email, password ) {

		let resHeader: Object = {};
		let headers           = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http
		           .post(
			           '/authenticate',
			           JSON.stringify({ email, password }),
			           { headers }
		           )
		           .map(res => res.json())
		           .map(( res ) => {
			           console.log(res);
			           if ( res[ 'success' ] === 'true' ) {
				           console.log("logged in!");

				           this.loggedIn = true;
				           resHeader     = { success: true, isDeveloper: res[ 'isDeveloper' ] };
			           } else {
				           resHeader = { success: false };
			           }

			           return resHeader;
		           });
	}

	register( name, email, password, isDeveloper ) {

		let resHeader: Object = {};
		let headers           = new Headers();
		headers.append('Content-Type', 'application/json');

		return this.http
		           .post('/register',
			           JSON.stringify({ name, email, password, isDeveloper }),
			           { headers }
		           )
		           .map(res => res.json())
		           .map(( res ) => {
			           console.log(res);
			           if ( res[ 'success' ] === true ) {
				           return { success: true };
			           }

			           return { success: false };

		           });

	}

	logout() {
		localStorage.removeItem("auth_token");
		this.loggedIn = false;
	}

	isLoggedIn() {

		return this.loggedIn;
	}

}
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import 'rxjs/add/operator/map';

@Injectable()
export class IconfigGetterService {
	private jsonContent: Object;
	private setTemplateName:string;
	constructor( private http: Http ) {}

	getJson( templateName ) {
		this.setTemplateName = templateName;
		return this.http.get('http://localhost:3000/getIconfig/' + templateName).map(( res: Response ) => res);
	}

	setJsonContent( content ) {
		this.jsonContent = content;
	}

	getJsonContent() {
		return this.jsonContent[ "_body" ];
	}

	getTemplateName(){
		return this.setTemplateName;
	}
}


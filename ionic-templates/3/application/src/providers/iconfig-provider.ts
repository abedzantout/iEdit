import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';

import 'rxjs/add/operator/map';

/*
 Generated class for the IconfigProvider provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class IconfigProvider {

  private jsonContent: Object;

  constructor(public http: Http) {
    this.getJson();
  }

  getJson() {
    return this.http.get('assets/iconfig.json').map(( res: Response ) =>res);
  }

  setJsonContent( content ) {
    this.jsonContent = content;
  }

  getJsonContent() {
    return this.jsonContent[ "_body" ];
  }

}

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {IconfigGetterService} from './services/iconfigGetter.service';
import { HttpModule } from '@angular/http';
@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers: [IconfigGetterService]
})
export class AppModule { }
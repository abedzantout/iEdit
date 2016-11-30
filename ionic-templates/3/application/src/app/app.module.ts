import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';

import { MapToIterable } from '../services/pipes';

import{ IconfigProvider } from '../providers/iconfig-provider';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    MapToIterable
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3
  ],
  providers: [IconfigProvider]
})
export class AppModule {}
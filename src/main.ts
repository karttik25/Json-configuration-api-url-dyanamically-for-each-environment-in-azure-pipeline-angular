import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import * as data from '../src/assets/environment/example.json';
if (environment.production) {
  enableProdMode();
  // const word = (<any>data).name;
// console.log(word); // output 'testing'
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

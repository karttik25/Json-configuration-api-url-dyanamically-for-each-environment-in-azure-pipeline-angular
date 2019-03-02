import { Component, OnInit } from '@angular/core';
import * as data from '../assets/environment/example.json';
import { DataContextService } from './data-context-service.service.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DataContextService]
})
export class AppComponent implements OnInit {
  title = (<any>data).name;
  url: any;
  constructor( private dataContextService: DataContextService) {
  }

  ngOnInit() {
    this.dataContextService.getNames().subscribe((res: any) => {
      this.url = res;
      console.log(this.url);
      });
    }
}

import { Injectable } from '@angular/core';
import { AppConfigService } from './app-config-service.service';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class DataContextService {
    basePath: string;

    constructor (private environment: AppConfigService, private http: HttpClient) {
        this.basePath = environment.config.servicesBaseUrl;
       // console.log(this.basePath);
    }

    getNames() {
        return this.http.get(this.basePath + '/names/');
    }
}

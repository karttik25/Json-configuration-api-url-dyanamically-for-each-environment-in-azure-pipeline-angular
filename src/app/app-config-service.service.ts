import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppConfigService {
    private appConfig;

    constructor (private injector: Injector) { }

    loadAppConfig() {
        // tslint:disable-next-line:prefer-const
        let http = this.injector.get(HttpClient);

        return http.get('/assets/environment/example.json')
        .toPromise()
        .then(data => {
            this.appConfig = data;
        });
    }

    get config() {
        return this.appConfig;
    }
}

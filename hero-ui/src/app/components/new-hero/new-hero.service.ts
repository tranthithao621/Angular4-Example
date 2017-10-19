import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../../models/hero.model';
import { Constants } from '../../lib';
@Injectable()
export class NewHeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http: Http
    ) { }

    create(hero: Hero): Observable<any> {
        return this.http.post(Constants.API_CREATE_HERO, JSON.stringify(hero),this.options);
            // .map((res: Response) => res.json());
            // .toPromise().then(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
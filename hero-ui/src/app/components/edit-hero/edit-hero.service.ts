import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/map';

import { Hero } from '../../models/hero.model';
import { Constants } from '../../lib';
@Injectable()
export class EditHeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    //private options = new RequestOptions()

    constructor(
        private http: Http
    ) { }

    getHero(id: number){
        return this.http.post(Constants.API_GET_HERO,JSON.stringify(id),this.options).map((res: Response) => res.json());
    }

    update(hero: Hero): Observable<Object> {
        return this.http.post(Constants.API_UPDATE_HERO, JSON.stringify(hero),this.options);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
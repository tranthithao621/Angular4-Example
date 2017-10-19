import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/map';

import { Hero } from '../../models/hero.model';
import { Constants } from '../../lib';
@Injectable()
export class HeroDetailService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    constructor(
        private http: Http
    ) { }

    delete(hero: Hero) {
        return this.http.post(Constants.API_DELETE_HEROES, JSON.stringify(hero), { headers: this.headers })
    }
}
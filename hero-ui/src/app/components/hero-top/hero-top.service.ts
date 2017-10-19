import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/map';

import { Hero } from '../../models/hero.model';
import { Constants } from '../../lib';
@Injectable()
export class HeroService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    //private options = new RequestOptions()

    constructor(
        private http: Http
    ) { }

    getHeroes(): Observable<any> {
        return this.http.post(Constants.API_GET_ALL_HEROES, this.options).map(res => res.json());
    }


    getHero(id: number): Observable<Object> {
        return this.http.post(Constants.API_GET_HERO,this.options).map((res: Response) => res.json());
    }
}
import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer";

import 'rxjs/add/operator/map';

import { Hero } from '../models/hero.model';
import { Constants } from '../lib';
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

    create(hero: Hero): Observable<Object> {
        return this.http.post(Constants.API_CREATE_HERO, JSON.stringify(hero),this.options)
            .map((res: Response) => res.json());
    }

    update(hero: Hero): Observable<Object> {
        return this.http.post(Constants.API_UPDATE_HERO, JSON.stringify(hero),this.options)
            .map((res: Response) => res.json());
    }
    delete(hero: Hero) {
        return this.http.post(Constants.API_DELETE_HEROES, JSON.stringify(hero), { headers: this.headers })
        // .map((res: Response) => res.json())
        //.toPromise().then(res => res.json()).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
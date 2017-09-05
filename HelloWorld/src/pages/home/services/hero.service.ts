import { Hero } from './../hero';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()
export class HeroService {
    private _heros: Hero[] = [
        { id: 1, name: 'hero1' },
        { id: 2, name: 'hero2' },
        { id: 3, name: 'hero3' },
        { id: 4, name: 'hero4' },
        { id: 5, name: 'hero5' }
    ]
    // private headers = new Headers({ 'Content-Type': 'application/json' })
    private hangdleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    constructor(private http: Http) { }
    getHeros(): Promise<Hero[]> {
        return new Promise((resolve, reject) => {
            if (Math.random() > 0.5) {
                setTimeout(() => resolve(this._heros), 2e3);
            } else {
                reject('失败')
            }
        })
    }

    getHerosFromServe(): Promise<Hero[]> {
        return this.http.get('http://10.0.201.44:8000')
            .map(r => r.json() as Hero[])
            .toPromise();
    }
    getHerosTest1(): Promise<Hero[]> {
        return this.http.get('http://10.0.201.44:8000')
            .map(r => r.json() as Hero[])
            .toPromise();
    }
    getHerosTest2(): Promise<Hero[]> {
        return this.http.get('http://10.0.201.44:8000')
            .map(r => r.json() as Hero[])
            .toPromise();
    }
    getHerosTest3(): Promise<Hero[]> {
        return this.http.get('http://10.0.201.44:8000')
            .map(r => r.json() as Hero[])
            .toPromise();
    }

    getHerosTest() {
        return this.getHerosTest1().then(hero1 => {
            this.getHerosTest2().then(hero2 => {
                this.getHerosTest3().then(hero3 => {
                    console.log(hero3);
                    // this._heros = hero3;
                }).catch(e => {
                    console.error(e);
                })
            }).catch(e => {
                console.error(e);
            })
        }).catch(e => {
            console.error(e);
        })
    }

    update(hero: Hero): Promise<Hero> {
        let url = `http://172.16.60.193:8000/${hero.id}`;
        return this.http
            .put(url, JSON.stringify(hero))
            // .put(url,JSON.stringify(hero),{headers:this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.hangdleError);

    }
    // function getTasks() {
    //     return this.http.get('http://example.com/api/v1/tasks')
    //         .then(function (response) {
    //             return response.data;
    //         });
    // }
}
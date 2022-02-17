import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesEndpointService {

  publicKey = 'f01c422ba60bb0042bd916088da9784d';
  hash = '4b971d8679e9771871544af52483a908';
  urlApi = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.publicKey}&hash=${this.hash}`;

  public constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<any> {

    return this.httpClient.get<any>(this.urlApi)
      .pipe(map((data) => data.data.results));
  }

}

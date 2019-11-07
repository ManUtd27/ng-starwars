import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }
  get(page: number = 1): Observable<any> {
    const restUrl = `https://swapi.co/api/people/?page=${page}`;
    return this.http.get(restUrl);
  }
}

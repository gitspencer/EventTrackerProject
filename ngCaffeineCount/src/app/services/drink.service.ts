import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Drink } from '../models/drink';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  private url: string = environment.baseUrl + 'api/drinks';


  constructor(
    private http: HttpClient
  ) { }

  index(): Observable<Drink[]> {
    return this.http.get<Drink[]>(this.url).pipe(
      catchError((err: any) => {
        console.error('Error GETing drink list');
        return throwError(
          () =>
            new Error(
              "DrinkService.index(): error retrieving drink list: " + err
            )
        );
      })
    );
  }





}

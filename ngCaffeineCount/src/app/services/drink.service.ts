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

  newDrink: Drink = new Drink();
  editDrink: Drink | null = null;

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

  create(newDrink : Drink): Observable<Drink> {

    return this.http.post<Drink>(this.url, newDrink).pipe(
      catchError((err: any) => {
        console.error('Error POSTing new drink');
        return throwError(
          () =>
          new Error(
            "DrinkService.create(): error creating drink: " + err
          )
        );
      })
      );
    }

  update(drink : Drink): Observable<Drink> {

    return this.http.put<Drink>(this.url + '/' + drink.id, drink).pipe(
      catchError((err: any) => {
        console.error('Error PUting new drink');
        return throwError(
          () =>
          new Error(
            "DrinkService.update(): error updating drink: " + err
          )
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id).pipe(
      catchError((err: any) => {
        console.error('Error DELETEing drink');
        return throwError(
          () =>
          new Error(
            "DrinkService.delete(): error deleting drink: " + err
          )
        );
      })
    );
  }


}

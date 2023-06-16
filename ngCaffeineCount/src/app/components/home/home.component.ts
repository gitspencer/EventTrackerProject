import { Component, OnInit } from '@angular/core';
import { Drink } from 'src/app/models/drink';
import { DrinkService } from 'src/app/services/drink.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinkList: Drink[] = [];

  constructor(
    private drinkService: DrinkService
  ){}

  ngOnInit(): void {
    this.loadDrinks();
  }

  loadDrinks() {
    this.drinkService.index().subscribe({
      next: (drinks) => {
        this.drinkList = drinks;
      },
      error: (loadDrinksError) => {
        console.error('HomeComponent');
        console.error(loadDrinksError);

      }
    });
  }
}

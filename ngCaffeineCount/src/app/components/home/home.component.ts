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
  selected: Drink | null = null;
  newDrink: Drink = new Drink();
  editDrink: Drink | null = null;

  constructor(
    private drinkService: DrinkService
  ) { }

  ngOnInit(): void {
    this.loadDrinks();
  }

  loadDrinks() {
    this.drinkService.index().subscribe({
      next: (drinks) => {
        this.drinkList = drinks;
      },
      error: (loadDrinksError) => {
        console.error('HomeComponent.loadDrinks() error getting drink list');
        console.error(loadDrinksError);

      }
    });
  }

  displayDrink(drink: Drink | null): void {
    this.selected = drink;
  }

  displayHome(): void {
    this.selected = null;
    this.editDrink = null;
  }

  addDrink(newDrink: Drink) {
    this.drinkService.create(newDrink).subscribe({
      next: (createdDrink) => {
        this.newDrink = new Drink();
        this.loadDrinks();
      },
      error: (createError) => {
        console.error('HomeComponent.addDrink(): error creating drink');
        console.error(createError);
      }
    });
  }

  setEditDrink(): void {
    this.editDrink = Object.assign({}, this.selected);
  }

  updateDrink(drink: Drink | null, goToDetails: boolean = true): void {

    if (drink) {
      this.drinkService.update(drink).subscribe({
        next: (updatedDrink) => {
          if (goToDetails) {
            this.editDrink = updatedDrink;
            this.displayDrink(this.editDrink);
          }
          this.editDrink = null;
          this.loadDrinks();
        },
        error: (updateError) => {
          console.error('HomeComponent.updateDrink(): error on update');
          console.error(updateError);
        }
      });
    }
  }

  deleteDrink(id: number): void {
    this.drinkService.destroy(id).subscribe({
      next: () => {
        this.loadDrinks();
        this.displayHome();
      },
      error: (errorDelete) => {
        console.error('HomeComponent.deleteDrink(): error deleting');
        console.error(errorDelete);
      }
    });
  }

  public caffeineConcentration(drink: Drink | null): number {
    if (drink == null || drink.caffeine == null || drink.size == null) {
      return 0;
    }
    else if (drink.size > 0) {
     return (drink.caffeine / drink.size);
    } else {
      return 0;
    }
  }
}

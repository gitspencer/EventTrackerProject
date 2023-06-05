package com.skilldistillery.caffeine.services;

import java.util.List;

import com.skilldistillery.caffeine.entities.Drink;

public interface DrinkService {
	
	List<Drink> listAllDrinks();
	Drink getDrink(int drinkId);
	Drink createDrink(Drink drink);
	Drink updateDrink(int drinkId, Drink drink);
	boolean deleteDrink(int drinkId);
 }

package com.skilldistillery.caffeine.services;

import java.util.List;

import com.skilldistillery.caffeine.entities.Drink;

public interface DrinkService {
	
	List<Drink> listAllDrinks();
	Drink getDrink(int drinkId);
	Drink create(Drink drink);
	Drink update(int drinkId, Drink drink);
	boolean delete(int drinkId);
 }

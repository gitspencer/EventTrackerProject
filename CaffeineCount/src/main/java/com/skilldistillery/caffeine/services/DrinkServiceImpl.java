package com.skilldistillery.caffeine.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.caffeine.entities.Drink;
import com.skilldistillery.caffeine.repositories.DrinkRepository;

@Service
public class DrinkServiceImpl implements DrinkService {

	@Autowired
	private DrinkRepository drinkRepo;
	
	@Override
	public List<Drink> listAllDrinks() {
		return drinkRepo.findAll();
	}

	@Override
	public Drink getDrink(int drinkId) {
		Drink drink = null;
		Optional<Drink> drinkOpt = drinkRepo.findById(drinkId);
		if (drinkOpt.isPresent()) {
			drink = drinkOpt.get();
		}
		return drink;
	}

	@Override
	public Drink create(Drink drink) {
		drinkRepo.saveAndFlush(drink);
		return null;
	}

	@Override
	public Drink update(int drinkId, Drink drink) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int drinkId) {
		boolean deleted = false;
		Optional<Drink> toDeleteOpt = drinkRepo.findById(drinkId);
		if(toDeleteOpt.isPresent()) {
			Drink toDelete = toDeleteOpt.get();
			if(toDelete.getId() == drinkId) {
				drinkRepo.delete(toDelete);
				deleted = true;
			}
		}
		return deleted;
	}

}

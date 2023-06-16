package com.skilldistillery.caffeine.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.caffeine.entities.Drink;
import com.skilldistillery.caffeine.services.DrinkService;

@CrossOrigin({"*", "http://localhost/"})
@RestController
@RequestMapping("api")
public class DrinkController {

	@Autowired
	private DrinkService drinkService;
	
	@GetMapping("drinks")
	public List<Drink> listAllDrinks() {
		return drinkService.listAllDrinks();
	}
	
	@GetMapping("drinks/{drinkId}")
	public Drink getDrink(@PathVariable Integer drinkId, HttpServletResponse res) {
		Drink drink = drinkService.getDrink(drinkId);
		if(drink == null) {
			res.setStatus(404);
		}
		return drink;
	}
	
	@PostMapping("drinks")
	public Drink addDrink(@RequestBody Drink drink, HttpServletResponse res, HttpServletRequest req) {
//		try {
			drink = drinkService.createDrink(drink);
//				res.setStatus(201);
//				StringBuffer url = req.getRequestURL();
//				url.append("/").append(drink.getId());
//				res.setHeader("Location", url.toString());
//		} catch (Exception e) {
//			e.printStackTrace();
//			res.setStatus(400);
//			drink = null;
//		}
		return drink;
	}
	
	
	@PutMapping("drinks/{drinkId}")
	public Drink editDrink(@PathVariable Integer drinkId, @RequestBody Drink drink, HttpServletResponse res, HttpServletRequest req) {
		drink = drinkService.updateDrink(drinkId, drink);
		return drink;
	}
	
	
	@DeleteMapping("drinks/{drinkId}")
	public void removeDrink(@PathVariable Integer drinkId, HttpServletResponse res) {
		if (drinkService.deleteDrink(drinkId)) {
			res.setStatus(204);
		} else {
			res.setStatus(404);
		}
		
	}
	
}

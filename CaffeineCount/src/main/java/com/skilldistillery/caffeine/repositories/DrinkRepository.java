package com.skilldistillery.caffeine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.caffeine.entities.Drink;

public interface DrinkRepository extends JpaRepository<Drink, Integer> {

}

package com.skilldistillery.caffeine.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DrinkTest {

	private static EntityManagerFactory emf;
	private EntityManager em;
	private Drink drink;
	
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPACaffeineCount");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		drink = em.find(Drink.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		drink = null;
	}

	@Test
	void test_Drink_entity_mapping() {
		assertNotNull(drink);
		assertEquals("Cold Brew", drink.getName());
	}

}

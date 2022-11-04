package com.skilldistillery.lucid.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class DreamTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Dream dream;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPALucid");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		dream = em.find(Dream.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		dream = null;
	}

	@Test
	void test_dream_first_records() {
		assertEquals("School Without Pants", dream.getName());
	}

}

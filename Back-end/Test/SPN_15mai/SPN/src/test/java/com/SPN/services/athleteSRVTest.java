package com.SPN.services;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;

import com.SPN.model.entiteis.athletes;
import com.SPN.model.entiteis.historique_entite;

class athleteSRVTest {

	athleteSRV athsrv = new athleteSRV();
	
	@Test
	void testaddOneAthlet() {
		athletes ath = new athletes();
		
		assertEquals(ath,athsrv.addOneAthlet(ath));
	}
	
	@Test
	void testaddathlet() {
		athletes ath = new athletes();
		historique_entite henti = new historique_entite();
		
		assertEquals(ath,athsrv.addathlet(ath, henti));
	}
	
	@Test
	void testgetone() {
		athletes ath = athsrv.getone(1);

		assertNotNull(ath);
	}
	
	@Test
	void testgetAll() {
		List<athletes> listath = athsrv.getAll(1);

		assertNotNull(listath);
	}
	
	
}

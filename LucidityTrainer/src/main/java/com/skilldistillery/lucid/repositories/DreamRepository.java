package com.skilldistillery.lucid.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.lucid.entities.Dream;

public interface DreamRepository extends JpaRepository<Dream, Integer> {
	
	public Dream searchById(Integer id);

}

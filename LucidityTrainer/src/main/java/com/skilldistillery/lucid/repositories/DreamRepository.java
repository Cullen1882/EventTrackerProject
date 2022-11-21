package com.skilldistillery.lucid.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.lucid.entities.Dream;

public interface DreamRepository extends JpaRepository<Dream, Integer> {
	
	Set<Dream> findByUser_Username(String username);
	Dream findByIdAndUser_Username(Integer id, String username);
	public Dream searchById(Integer id);

}

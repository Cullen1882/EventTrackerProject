package com.skilldistillery.lucid.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.lucid.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

	public User searchById(Integer id);
	User findByUsername(String username);
}

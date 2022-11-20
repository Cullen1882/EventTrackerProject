package com.skilldistillery.lucid.services;

import com.skilldistillery.lucid.entities.User;

public interface AuthService {
	
	public User register(User user);
	public User getUserByUsername(String username);


}

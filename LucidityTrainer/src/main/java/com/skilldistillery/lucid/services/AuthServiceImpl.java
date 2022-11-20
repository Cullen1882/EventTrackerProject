package com.skilldistillery.lucid.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.skilldistillery.lucid.entities.User;
import com.skilldistillery.lucid.repositories.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository uRep;
	
	@Autowired
	private PasswordEncoder encoder;

	@Override
	public User register(User user) {
		String encryptedPassword = encoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		user.setActive(true);
		user.setRole("standard");
		uRep.saveAndFlush(user);
		return user;
	}

	@Override
	public User getUserByUsername(String username) {
		
		return uRep.findByUsername(username);
	}

}

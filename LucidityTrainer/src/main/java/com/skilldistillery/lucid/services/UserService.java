package com.skilldistillery.lucid.services;

import java.util.List;

import com.skilldistillery.lucid.entities.User;

public interface UserService {
	
	List<User> listAllUsers();
	User showUser(Integer id);
	User create(User user);
	User update(Integer id, User user);
	boolean delete(Integer id);
	

}

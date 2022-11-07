package com.skilldistillery.lucid.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.lucid.entities.User;
import com.skilldistillery.lucid.services.UserService;

@RestController
@RequestMapping("api")
public class UserController {
	
	@Autowired
	private UserService uSer;
	
	@GetMapping("users")
	public List<User> show(){
		return uSer.listAllUsers();
	}
	@GetMapping("users/{id}")
	public User find(@PathVariable Integer id, HttpServletResponse res) {
		return uSer.showUser(id);
	}
	@PostMapping("users")
	public User add(@RequestBody User user, HttpServletResponse res) {
		User newUser = null;
		try {
			newUser = uSer.create(user);
			res.setStatus(201);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return newUser;
	}
	@PutMapping("users/{id}")
	public User update(@PathVariable Integer id, @RequestBody User user, HttpServletResponse res) {
		User updateUser = null;
		try {
			updateUser = uSer.update(id, user);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return updateUser;
	}
	@DeleteMapping("users/{id}")
	public boolean delete(@PathVariable Integer id, HttpServletResponse res) {
		boolean deleted = uSer.delete(id);
		if(deleted) {
			res.setStatus(204);
		}
		return deleted;
	}

}

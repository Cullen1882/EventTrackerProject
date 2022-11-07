package com.skilldistillery.lucid.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lucid.entities.User;
import com.skilldistillery.lucid.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository uRep;
	
	@Override
	public List<User> listAllUsers() {
		return uRep.findAll();
	}

	@Override
	public User showUser(Integer id) {
		return uRep.searchById(id);
	}

	@Override
	public User create(User user) {
		return uRep.saveAndFlush(user);
	}

	@Override
	public User update(Integer id, User user) {
		User dbUser = showUser(id);
		if(dbUser != null) {
			dbUser.setActive(user.isActive());
			dbUser.setFirstName(user.getFirstName());
			dbUser.setLastName(user.getLastName());
			dbUser.setRole(user.getRole());
			dbUser.setEmail(user.getEmail());
			dbUser.setUsername(user.getUsername());
			dbUser.setPassword(user.getPassword());
			dbUser.setProfilePicture(user.getProfilePicture());
		}
		return uRep.save(dbUser);
	}

	@Override
	public boolean delete(Integer id) {
		boolean deleted = false;
		if(uRep.existsById(id)) {
			uRep.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}

package com.skilldistillery.lucid.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lucid.entities.Dream;
import com.skilldistillery.lucid.entities.User;
import com.skilldistillery.lucid.repositories.DreamRepository;
import com.skilldistillery.lucid.repositories.UserRepository;

@Service
public class DreamServiceImpl implements DreamService {
	
	@Autowired
	private DreamRepository dRep;
	
	@Autowired
	private UserRepository uRep;

	@Override
	public Set<Dream> listAllDreams(String username) {
		return dRep.findByUser_Username(username);
	}

	@Override
	public Dream showDream(String username, Integer id) {

		return dRep.findByIdAndUser_Username(id, username);
	}

	@Override
	public Dream create(String username, Dream dream) {
		User user = uRep.findByUsername(username);
		if(user != null) {
			dream.setUser(user);
			return dRep.saveAndFlush(dream);
			
		}
		return null;
	}

	@Override
	public Dream update(String username, Integer id, Dream dream) {
		Dream dbDream = dRep.findByIdAndUser_Username(id, username);
		if(dbDream != null) {
			dbDream.setDescription(dream.getDescription());
			dbDream.setDate(dream.getDate());
			dbDream.setLucid(dream.getLucid());
			dbDream.setName(dream.getName());
			dbDream.setTime(dream.getTime());
//			dbDream.setUser(dream.getUser());
		}
		return dRep.save(dbDream);
	}

	@Override
	public boolean delete(String username, Integer id) {
		boolean deleted = false;
		if(dRep.existsById(id)) {
			dRep.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}

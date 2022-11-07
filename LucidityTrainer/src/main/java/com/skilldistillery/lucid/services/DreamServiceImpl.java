package com.skilldistillery.lucid.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.lucid.entities.Dream;
import com.skilldistillery.lucid.entities.User;
import com.skilldistillery.lucid.repositories.DreamRepository;

@Service
public class DreamServiceImpl implements DreamService {
	
	@Autowired
	private DreamRepository dRep;

	@Override
	public List<Dream> listAllDreams() {
		return dRep.findAll();
	}

	@Override
	public Dream showDream(Integer id) {

		return dRep.searchById(id);
	}

	@Override
	public Dream create(int id, Dream dream) {
		User user = new User();
		user.setId(id);
		dream.setUser(user);
		return dRep.saveAndFlush(dream);
		
	}

	@Override
	public Dream update(Integer id, Dream dream) {
		Dream dbDream = showDream(id);
		dbDream.setDescription(dream.getDescription());
		dbDream.setDate(dream.getDate());
		dbDream.setLucid(dream.getLucid());
		dbDream.setName(dream.getName());
		dbDream.setTime(dream.getTime());
		dbDream.setUser(dream.getUser());
		return dRep.save(dbDream);
	}

	@Override
	public boolean delete(Integer id) {
		boolean deleted = false;
		if(dRep.existsById(id)) {
			dRep.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

}

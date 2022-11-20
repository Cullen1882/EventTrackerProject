package com.skilldistillery.lucid.services;

import java.util.List;

import com.skilldistillery.lucid.entities.Dream;
import com.skilldistillery.lucid.entities.User;

public interface DreamService {
	
	List<Dream> listAllDreams();
	Dream showDream(Integer id);
	Dream create(int id, Dream dream);
	Dream update(Integer id, Dream dream);
	boolean delete(Integer id);
	
}

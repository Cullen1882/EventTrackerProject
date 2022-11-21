package com.skilldistillery.lucid.services;

import java.util.Set;

import com.skilldistillery.lucid.entities.Dream;

public interface DreamService {
	
	Set<Dream> listAllDreams(String username);
	Dream showDream(String username, Integer id);
	Dream create(String username, Dream dream);
	Dream update(String username, Integer id, Dream dream);
	boolean delete(String userneame, Integer id);
	
}

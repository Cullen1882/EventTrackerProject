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

import com.skilldistillery.lucid.entities.Dream;
import com.skilldistillery.lucid.services.DreamService;

@RestController
@RequestMapping("api")
public class DreamController {
	
	@Autowired
	private DreamService dSer;

	
	@GetMapping("dreams")
	public List<Dream> show(){
		return dSer.listAllDreams();
	}
	
	@GetMapping("dreams/{id}")
	public Dream find(@PathVariable Integer id, HttpServletResponse res) {
		Dream dream = dSer.showDream(id);
		if(dream == null) {
			res.setStatus(404);
		}
		return dream;
	}
	@PostMapping("dreams/{id}")
	public Dream create(@PathVariable int id, @RequestBody Dream dream, HttpServletResponse res) {
		Dream newDream = null;
		try {
			newDream = dSer.create(id, dream);
			res.setStatus(201);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return newDream;
	}
	@PutMapping("dreams/{id}")
	public Dream update(@PathVariable Integer id, @RequestBody Dream dream, HttpServletResponse res) {
		Dream updateDream = null;
		try {
			updateDream = dSer.update(id, dream);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return updateDream;
	}
	@DeleteMapping("dreams/{id}")
	public boolean delete(@PathVariable Integer id, HttpServletResponse res) {
		boolean deleted = dSer.delete(id);
		if(deleted) {
			res.setStatus(204);
		}
		return deleted;
	}
}

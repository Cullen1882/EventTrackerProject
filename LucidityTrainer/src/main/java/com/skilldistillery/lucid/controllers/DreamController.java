package com.skilldistillery.lucid.controllers;

import java.security.Principal;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin({"*", "http://localhost/"})
public class DreamController {
	
	@Autowired
	private DreamService dSer;

	
	@GetMapping("dreams")
	public Set<Dream> show(HttpServletRequest req, HttpServletResponse res, Principal principal){
		return dSer.listAllDreams(principal.getName());
	}
	
	@GetMapping("dreams/{id}")
	public Dream find(@PathVariable Integer id, HttpServletRequest req, HttpServletResponse res, Principal principal) {
		Dream dream = dSer.showDream(principal.getName(), id);
		if(dream == null) {
			res.setStatus(404);
		}
		return dream;
	}
	@PostMapping("dreams")
	public Dream create(HttpServletRequest req, HttpServletResponse res, @RequestBody Dream dream, Principal principal) {
		Dream newDream = null;
		try {
			newDream = dSer.create(principal.getName(), dream);
			res.setStatus(201);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return newDream;
	}
	@PutMapping("dreams/{id}")
	public Dream update(HttpServletRequest req, HttpServletResponse res, @PathVariable int id, @RequestBody Dream dream, Principal principal) {
		Dream updateDream = null;
		try {
			updateDream = dSer.update(principal.getName(), id , dream);
		}catch(Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return updateDream;
	}
	@DeleteMapping("dreams/{id}")
	public boolean delete(HttpServletRequest req, HttpServletResponse res, @PathVariable Integer id, Principal principal ) {
		boolean deleted = dSer.delete(principal.getName(), id);
		if(deleted) {
			res.setStatus(204);
		}
		return deleted;
	}
}

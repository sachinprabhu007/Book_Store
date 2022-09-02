package com.springboot.react.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.react.entity.Isbn;
import com.springboot.react.entity.User;
import com.springboot.react.service.IsbnService;
import com.springboot.react.service.UserService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class IsbnController {
	@Autowired
	private IsbnService userService;

	@PostMapping("/addIsbn")
	public Isbn addUser(@RequestBody Isbn user) {
		//We send the user object from the body of url
		return userService.createUser(user);
	}

	@GetMapping("/isbn/{id}")
	public Isbn getUserById(@PathVariable int id) {
		return userService.getUserById(id);
	}

	@GetMapping("/allIsbn")
	public List<Isbn> getAllUsers() {
		return userService.getUsers();
	}
//	
//	@PutMapping("/updateisbn")
//	public Isbn updateUser(@RequestBody Isbn user) {
//		return userService.updateUser(user);
//	}

	@DeleteMapping("/delIsbn/{id}/{isbn}")
	public String deleteUser(@PathVariable int id,@PathVariable String isbn) {
		return userService.deleteUserById(id,isbn);
	}
}

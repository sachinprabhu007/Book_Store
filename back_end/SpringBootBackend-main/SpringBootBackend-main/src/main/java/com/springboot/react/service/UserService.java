package com.springboot.react.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.react.dao.UserRepositry;
import com.springboot.react.entity.User;

@Service
//It is used to mark the class as a service provider.
//So overall @Service annotation is used with classes that provide some business functionalities.
//Spring context will autodetect these classes when annotation-based configuration and classpath scanning is used
public class UserService {
	@Autowired
	private UserRepositry userRepository;

	public User createUser(User user) {
		return userRepository.save(user);
	}

	public List<User> createUsers(List<User> users) {
		return userRepository.saveAll(users);
	}

	public User getUserById(int id) {
		return userRepository.findById(id).orElse(null);
		// If user isnt found return null.You can also return a error message here
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public User updateUser(User user) {
		//There is no function for update so we gotta create it ourself
		User oldUser = null;
		Optional<User> optionaluser = userRepository.findById(user.getId());//We search the passed argument id in the database
		if (optionaluser.isPresent()) {
			oldUser = optionaluser.get();//We get the old User value
			oldUser.setName(user.getName());//We update the new user value into it
			oldUser.setEmail(user.getEmail());
			oldUser.setPassword(user.getPassword());
			userRepository.save(oldUser);
		} else {
			return new User();//Supposedly its not present we return new User
		}
		return oldUser;
	}
//	public User updateUser(int id, String isbn) {
//		// There is no function for update so we gotta create it ourself
//		User oldUser;
//		Optional<User> optionaluser = userRepository.findById(id);// We search the passed argument id in the database
//		if (optionaluser.isPresent()) {
//			oldUser = optionaluser.get();
//			List<String> arr = oldUser.getIsbn();
//			arr.add(isbn);
//			oldUser.setIsbn(arr);
//			userRepository.save(oldUser);
//		} else {
//			return new User();// Supposedly its not present we return new User
//		}
//		return oldUser;
//	}

	public String deleteUserById(int id) {
		userRepository.deleteById(id);
		return "User got deleted";
	}

}
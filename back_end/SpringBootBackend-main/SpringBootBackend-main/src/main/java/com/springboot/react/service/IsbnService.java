package com.springboot.react.service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.react.dao.IsbnRepositry;
import com.springboot.react.dao.UserRepositry;
import com.springboot.react.entity.Isbn;
import com.springboot.react.entity.User;

@Service
//It is used to mark the class as a service provider.
//So overall @Service annotation is used with classes that provide some business functionalities.
//Spring context will autodetect these classes when annotation-based configuration and classpath scanning is used
public class IsbnService {
	@Autowired
	private IsbnRepositry userRepository;

	public Isbn createUser(Isbn isbn) {
		return userRepository.save(isbn);
	}

	public List<Isbn> createUsers(List<Isbn> users) {
		return userRepository.saveAll(users);
	}

	public Isbn getUserById(int id) {
		return userRepository.findById(id).orElse(null);
		// If user isnt found return null.You can also return a error message here
	}

	public List<Isbn> getUsers() {
		return userRepository.findAll();
	}

//	public Isbn updateUser(Isbn user) {
//		//There is no function for update so we gotta create it ourself
//		Isbn oldUser = null;
//		Optional<Isbn> optionaluser = userRepository.findById(user.getId());//We search the passed argument id in the database
//		if (optionaluser.isPresent()) {
//			oldUser = optionaluser.get();//We get the old User value
//			oldUser.setName(user.getIsbn());//We update the new user value into it
//			oldUser.setEmail(user.getEmail());
//			oldUser.setPassword(user.getPassword());
//			userRepository.save(oldUser);
//		} else {
//			return new User();//Supposedly its not present we return new User
//		}
//		return oldUser;
//	}


	public String deleteUserById(int userid,String isbn) {
		List<Isbn> arr= userRepository.findAll();
		int flag=0;
		int idf=0;
		for(int i=0;i<arr.size();i++)
		{
			Isbn ele=arr.get(i);
			if(ele.getIsbn().equals(isbn) && ele.getUserid()==userid)
			{
				idf=ele.getId();
				flag=1;
				break;
			}
		}
		if(flag==1)
		{
			flag=0;
			userRepository.deleteById(idf);
			return "User got deleted";
		}
		return "User not found";
		
	}

}

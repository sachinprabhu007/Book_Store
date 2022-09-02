package com.springboot.react.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.react.entity.Isbn;
import com.springboot.react.entity.User;
//Earlier we had created a CrudRepositry
public interface IsbnRepositry extends JpaRepository<Isbn, Integer> {

}


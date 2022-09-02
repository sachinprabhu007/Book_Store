package com.springboot.react.entity;

import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
//Entity Class
@Table(name = "user_table")
public class User {
@Id	
@GeneratedValue
private int id;
private String name;
private String email;
private String password;
}
//@Table(name = "isbn_table")
//
//public class Isbn {
//@Id	
//@GeneratedValue
//private int id;
//private String name;
//private String email;
//private String password;
//}

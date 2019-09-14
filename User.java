package com.purduestudyapp.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class User {
//Course is an object
	 private String userName;
	 private String userMajor;
	 private String userYear;
	 private Course [] classListMinor;
	 private Course [] classListMajor;


     public User(String name, String Major, String year, Course[] a, Course [] b)  {
		userName = name;
		userMajor = major;
		userYear = year;
		classListMajor = a;
		classListMinor = b;
	 }
	 
      
    public string getName () {
		return userName;
	}
 
	public string getMajor() {
		return getMajor;
	}
	public string getYear() {
		return userYear;
	}
	public Course [] getClassesMajor() {
		return classListMajor;
	}
	public Course [] getClassesMinor() {
		return classListMinor;
	}
	public void changeName (String x) {
		userName = x;
	}
 
	public void changeMajor(String y) {
		userMajor = y;
	}
	public void changeYear(String z) {
		userYear = z;
	}
		
		
         
		
	
	



	
}

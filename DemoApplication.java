package com.purduestudyapp.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
private String userName;
	 private String userMajor;
	 private String userYear;


     public User(String name, String Major, String year)  {
		userName = name;
		userMajor = major;
		userYear = year;
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

	public void changeName (String x) {
		userName = x;
	}
 
	public void changeMajor(String y) {
		userMajor = y;
	}
	public void changeYear(String z) {
		userYear = z;
	}



	public static void main(String[] args) {

     










		SpringApplication.run(DemoApplication.class, args);
	}

}

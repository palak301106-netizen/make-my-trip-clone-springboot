package com.makemytrip.makemytrip.services;

import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
//encryption of password
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

//    public Users login(String email, String password) {
//        Users user= userRepository.findByEmail(email);
//        if(user != null && passwordEncoder.matches(password,user.getPassword())){
//            return user;
//        }
//        return null;
//    }
public Users login(String email, String password) {

    Users user = userRepository.findByEmail(email);

    System.out.println("User from DB:");
    System.out.println("id = " + user.get_id());      // or getId()
    System.out.println("firstName = " + user.getFirstName());
    System.out.println("lastName = " + user.getLastName());
    System.out.println("email = " + user.getEmail());
    System.out.println("phone = " + user.getPhoneNumber());
    System.out.println("role = " + user.getRole());

    boolean matched = passwordEncoder.matches(password, user.getPassword());

    if (matched) {
        return user;
    }

    return null;
}


    public Users signup(Users user) {
       // User user= ;
         if (userRepository.findByEmail(user.getEmail())!= null) {
             throw new RuntimeException("Email already exists");
         }
         user.setPassword(passwordEncoder.encode((user.getPassword())));
         if (user.getRole()== null) {
             user.setRole("USER");
         }
         return userRepository.save(user);
         
    }
    public Users getUserByEmail(String email){
    return userRepository.findByEmail(email);
    
    }
    public Users editprofile(String id, Users updatedUser){
    Users user=userRepository.findById(id).orElse(null);
    if(user != null){
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setPhoneNumber(updatedUser.getPhoneNumber());
        return userRepository.save(user);
    }
    return null;
    }
}
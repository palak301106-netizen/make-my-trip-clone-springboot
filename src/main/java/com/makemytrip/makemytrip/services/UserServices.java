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

    System.out.println(email);
    System.out.println(password);

    Users user = userRepository.findByEmail(email);

    System.out.println(user);

    if(user != null){

        System.out.println(user.getPassword());

        boolean matched = passwordEncoder.matches(password, user.getPassword());

        System.out.println(matched);

        if(matched){
            return user;
        }
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
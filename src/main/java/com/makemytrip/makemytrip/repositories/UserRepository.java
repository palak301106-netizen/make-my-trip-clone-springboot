 package com.makemytrip.makemytrip.repositories;
import com.makemytrip.makemytrip.models.Users;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<Users, String> {
    Users findByEmail(String email);
} // mongodb query to find by email

 // to get all the data from the db we =user repository
package com.makemytrip.makemytrip.repositories;

import com.makemytrip.makemytrip.models.Review;
//import com.makemytrip.makemytrip.repositories.ReviewRepository;
import org.springframework.data.mongodb.repository.MongoRepository;


import java.time.LocalDateTime;
import java.util.List;

public interface ReviewRepository extends MongoRepository<Review, String> {

    List<Review> findByItemId(String itemId);
}


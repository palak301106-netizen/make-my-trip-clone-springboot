package com.makemytrip.makemytrip.controllers;

import com.makemytrip.makemytrip.models.Review;
import com.makemytrip.makemytrip.repositories.ReviewRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/review")
@CrossOrigin("*")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @PostMapping("/add")
    public Review addReview(@RequestBody Review review) {

        review.setCreatedAt(LocalDateTime.now().toString());

        return reviewRepository.save(review);
    }

    @GetMapping("/{itemId}")
    public List<Review> getReviews(@PathVariable String itemId) {

        return reviewRepository.findByItemId(itemId);
    }

    @PutMapping("/flag/{id}")
    public Review flagReview(@PathVariable String id) {

        Review review = reviewRepository.findById(id).orElseThrow();

        review.setFlagged(true);

        return reviewRepository.save(review);
    }
}
package com.makemytrip.makemytrip.controllers;

import com.makemytrip.makemytrip.models.Recommendation;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/recommendation")
@CrossOrigin("*")
public class RecommendationController {

    @GetMapping("/{userId}")
    public List<Recommendation> getRecommendations(
            @PathVariable String userId) {

        List<Recommendation> list = new ArrayList<>();

        list.add(

                new Recommendation(

                        "Goa Beach Resort",

                        "You liked beach destinations."

                )

        );

        list.add(

                new Recommendation(

                        "Bali Vacation",

                        "Popular among users with similar bookings."

                )

        );

        return list;

    }

}
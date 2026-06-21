package com.makemytrip.makemytrip.controllers;

import com.makemytrip.makemytrip.services.PricingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pricing")
@CrossOrigin("*")
public class PricingController {

    @Autowired
    private PricingService pricingService;

    @GetMapping("/calculate")
    public double calculatePrice(

            @RequestParam double basePrice,
            @RequestParam boolean weekend,
            @RequestParam boolean holiday

    ) {

        return pricingService.calculatePrice(
                basePrice,
                weekend,
                holiday
        );

    }

}
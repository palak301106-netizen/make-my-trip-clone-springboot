package com.makemytrip.makemytrip.services;

import org.springframework.stereotype.Service;

@Service
public class PricingService {

    public double calculatePrice(double basePrice,
                                 boolean weekend,
                                 boolean holiday) {

        double price = basePrice;

        if (weekend) {
            price *= 1.10;
        }

        if (holiday) {
            price *= 1.20;
        }

        return price;
    }

}
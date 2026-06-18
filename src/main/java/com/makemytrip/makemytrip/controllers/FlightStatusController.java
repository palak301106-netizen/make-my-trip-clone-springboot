package com.makemytrip.makemytrip.controllers;

import com.makemytrip.makemytrip.models.FlightStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/flight-status")
@CrossOrigin("*")
public class FlightStatusController {

    @GetMapping("/{flightId}")
    public FlightStatus getStatus(
            @PathVariable String flightId) {

        int random = (int) (Math.random() * 3);

        if (random == 0) {

            return new FlightStatus(
                    flightId,
                    "ON TIME",
                    "No Delay",
                    "18:30");

        }

        if (random == 1) {

            return new FlightStatus(
                    flightId,
                    "BOARDING",
                    "Gate Open",
                    "18:30");

        }

        return new FlightStatus(
                flightId,
                "DELAYED BY 1 HOUR",
                "Bad Weather",
                "19:30");

    }

}
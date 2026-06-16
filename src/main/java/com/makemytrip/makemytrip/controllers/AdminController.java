package com.makemytrip.makemytrip.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.makemytrip.makemytrip.models.Users;
 import com.makemytrip.makemytrip.models.Hotel;
 import com.makemytrip.makemytrip.models.Flight;
 import com.makemytrip.makemytrip.repositories.UserRepository;
 import com.makemytrip.makemytrip.repositories.HotelRepository;
 import com.makemytrip.makemytrip.repositories.FlightRepository;
 import java.util.List;
 import java.util.Optional;


 @RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
  @Autowired
  private UserRepository userRepository;

  @Autowired
  private HotelRepository hotelRepository;

  @Autowired
  private FlightRepository flightRepository;

  @GetMapping("/users")
  public ResponseEntity<List<Users>> getAllUsers() {
   List<Users> users = userRepository.findAll();
   return ResponseEntity.ok(users);
  }

  @PostMapping("/flight")
  public Flight addFlight(@RequestBody Flight flight) {
   return flightRepository.save(flight);
  }
  @PostMapping("/hotel")
  public Hotel  addHotel(@RequestBody Hotel hotel) {
   return hotelRepository.save(hotel);
  }

  @PutMapping("/flight/{id}")
  public ResponseEntity<Flight> editFlight(@PathVariable String id, @RequestBody Flight updatedflight) {
   Optional<Flight> flightoptional = flightRepository.findById(id);
   if(flightoptional.isPresent()) {
    Flight flight = flightoptional.get();
    flight.setFlightName(updatedflight.getFlightName());
    flight.setFrom(updatedflight.getFrom());
    flight.setTo(updatedflight.getTo());
    flight.setDepartureTime(updatedflight.getDepartureTime());
    flight.setArrivalTime(updatedflight.getArrivalTime());
    flight.setPrice(updatedflight.getPrice());
    flight.setAvailableSeats(updatedflight.getAvailableSeats());
    flightRepository.save(flight);
    return ResponseEntity.ok(flight);

   }
   return ResponseEntity.notFound().build();
  }

  @PutMapping("/hotel/{id}")
  public ResponseEntity<Hotel> editHotel(@PathVariable String id, @RequestBody Hotel updatedhotel) {
   Optional<Hotel> hoteloptional = hotelRepository.findById(id);
   if(hoteloptional.isPresent()) {
    Hotel hotel = hoteloptional.get();
    hotel.sethotelName(updatedhotel.gethotelName()); //HotelName = Name(mentors code)
    hotel.setLocation(updatedhotel.getLocation());
    hotel.setAvailableRooms(updatedhotel.getAvailableRooms());
    hotel.setPricePerNight(updatedhotel.getPricePerNight());
    hotel.setAmenities(updatedhotel.getAmenities()); //Ameneties - amenties(mentors code)

     hotelRepository.save(hotel);
     return ResponseEntity.ok(hotel);

   }
   return ResponseEntity.notFound().build();
  }
 }
 
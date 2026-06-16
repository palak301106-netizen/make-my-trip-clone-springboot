package com.makemytrip.makemytrip.controllers;
import com.makemytrip.makemytrip.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.services.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController{
    @Autowired
    private BookingService bookingService;

    @Autowired
    private UserServices userServices;

    @PostMapping("/flight")
    public Users.Booking bookflight(@RequestParam String useId, @RequestParam String flightId, @RequestParam int seats, @RequestParam double price){
        return bookingService.bookflight(useId, flightId, seats, price);
    }
    @PostMapping("/hotel")
    public Users.Booking bookhotel(@RequestParam String useId, @RequestParam String  hotelId, @RequestParam int rooms, @RequestParam double price){
        return bookingService.bookhotel(useId, hotelId, rooms, price);
    }
//   @GetMapping("/{email}")
//   public ResponseEntity<Users> getuserbyemail(@PathVariable String email){
//        Users user= UserServices.getUserByEmail(email);
//        if(user != null){
//            return ResponseEntity.ok(user);
//        }
//        return ResponseEntity.notFound().build();
//   }
@GetMapping("/{email}")
public ResponseEntity<Users> getuserbyemail(@PathVariable String email) {
    Users user = userServices.getUserByEmail(email);

    if (user != null) {
        return ResponseEntity.ok(user);
    }

    return ResponseEntity.notFound().build();
}
}

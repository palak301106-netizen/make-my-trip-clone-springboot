package com.makemytrip.makemytrip.controllers;
import com.makemytrip.makemytrip.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.services.BookingService;

@RestController
@RequestMapping("/booking")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private UserServices userServices;

    @PostMapping("/flight")
    public Users.Booking bookflight(@RequestParam String userId, @RequestParam String flightId, @RequestParam int seats, @RequestParam double price) {
        return bookingService.bookflight(userId, flightId, seats, price);
    }

    @PostMapping("/hotel")
    public Users.Booking bookhotel(@RequestParam String userId, @RequestParam String hotelId, @RequestParam int rooms, @RequestParam double price) {
        return bookingService.bookhotel(userId, hotelId, rooms, price);
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

    @PostMapping("/cancel")
    public Users.Booking cancelBooking(
            @RequestParam String userId,
            @RequestParam String bookingId,
            @RequestParam String reason)
    {

        return bookingService.cancelBooking(userId, bookingId, reason);
    }

    @PutMapping("/refund/status")
    public ResponseEntity<?> updateRefundStatus(

            @RequestParam String userId,
            @RequestParam String bookingId,
            @RequestParam String status

    ) {

        Users.Booking booking =
                bookingService.updateRefundStatus(userId, bookingId, status);

        return ResponseEntity.ok(booking);

    }
}

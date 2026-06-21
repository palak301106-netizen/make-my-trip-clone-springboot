package com.makemytrip.makemytrip.services;
import com.makemytrip.makemytrip.models.Users;
import com.makemytrip.makemytrip.models.Users.Booking;
import com.makemytrip.makemytrip.models.Flight;
import com.makemytrip.makemytrip.models.Hotel;
import com.makemytrip.makemytrip.repositories.UserRepository;
import com.makemytrip.makemytrip.repositories.FlightRepository;
import com.makemytrip.makemytrip.repositories.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDate;
import java.util.Optional;

@Service
public class BookingService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FlightRepository flightRepository;

    @Autowired
    private HotelRepository hotelRepository;

    public Booking bookflight(String userId, String flightId, int seats, double price) {
        Optional<Users> usersOptional = userRepository.findById(userId);
        Optional<Flight> flightOptional = flightRepository.findById(flightId);
        if (usersOptional.isPresent() && flightOptional.isPresent()) {
            Users user = usersOptional.get();
            Flight flight = flightOptional.get();
            if (flight.getAvailableSeats() >= seats) {
                flight.setAvailableSeats(flight.getAvailableSeats() - seats);
                flightRepository.save(flight);

                Booking booking = new Booking();
                booking.setType("Flight");
                booking.setBookingId(flightId);
                booking.setDate(LocalDate.now().toString());
                booking.setQuantity(seats);
                booking.setSelectedSeat("12A");
                booking.setPremiumUpgrade(false);
                booking.setRoomType(null);
                booking.setTotalPrice(price);
                booking.setBookingStatus("CONFIRMED");
                booking.setPaymentStatus("PAID");
                booking.setRefundStatus("NONE");
                booking.setRefundAmount(0);
                booking.setCancellationReason(null);
                booking.setCancelledAt(null);
                booking.setExpectedRefundDate(null);
                user.getBookings().add(booking);

                userRepository.save(user);
                return booking;
            } else {
                throw new RuntimeException("Not enought seats available");
            }
        }
        throw new RuntimeException("User or flight not found");
    }

    public Booking bookhotel(String userId, String hotelId, int rooms, double price) {
        Optional<Users> usersOptional = userRepository.findById(userId);
        Optional<Hotel> hotelOptional = hotelRepository.findById(hotelId);
        if (usersOptional.isPresent() && hotelOptional.isPresent()) {
            Users user = usersOptional.get();
            Hotel hotel = hotelOptional.get();
            if (hotel.getAvailableRooms() >= rooms) {
                hotel.setAvailableRooms(hotel.getAvailableRooms() - rooms);
                hotelRepository.save(hotel);

                Booking booking = new Booking();
                booking.setType("Hotel");
                booking.setBookingId(hotelId);
                booking.setDate(LocalDate.now().toString());
                booking.setQuantity(rooms);
                booking.setRoomType("Deluxe");
                booking.setSelectedSeat(null);
                booking.setPremiumUpgrade(false);
                booking.setTotalPrice(price);
                booking.setBookingStatus("CONFIRMED");
                booking.setPaymentStatus("PAID");
                booking.setRefundStatus("NONE");
                booking.setRefundAmount(0);
                booking.setCancellationReason(null);
                booking.setCancelledAt(null);
                booking.setExpectedRefundDate(null);
                user.getBookings().add(booking);
                userRepository.save(user);
                return booking;
            } else {
                throw new RuntimeException("Not enought rooms available");
            }
        }
        throw new RuntimeException("User or  hotel not found");
    }


    public Booking cancelBooking(String userId, String bookingId, String reason) {

        Optional<Users> usersOptional = userRepository.findById(userId);

        if (usersOptional.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        Users user = usersOptional.get();

        for (Booking booking : user.getBookings()) {

            if (booking.getBookingId().equals(bookingId)) {

                if ("CANCELLED".equalsIgnoreCase(booking.getBookingStatus())) {
                    throw new RuntimeException("Booking already cancelled");
                }

                double refundPercentage = 0.50;

                // Partial Refund Logic
                if (reason.equalsIgnoreCase("Medical Emergency")) {
                    refundPercentage = 0.80;
                } else if (reason.equalsIgnoreCase("Airline Cancelled")) {
                    refundPercentage = 1.00;
                }

                double refundAmount = booking.getTotalPrice() * refundPercentage;

                booking.setBookingStatus("CANCELLED");
                booking.setRefundAmount(refundAmount);
                booking.setRefundStatus("PENDING");
                booking.setPaymentStatus("REFUND_INITIATED");
                booking.setCancellationReason(reason);
                booking.setCancelledAt(LocalDate.now().toString());
                booking.setExpectedRefundDate(
                        LocalDate.now().plusDays(5).toString()
                );

                userRepository.save(user);

                return booking;
            }

        }

        throw new RuntimeException("Booking not found");
    }
    public Booking updateRefundStatus(
            String userId,
            String bookingId,
            String status) {

        Optional<Users> optionalUsers = userRepository.findById(userId);

        if (optionalUsers.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        Users user = optionalUsers.get();

        for (Booking booking : user.getBookings()) {

            if (booking.getBookingId().equals(bookingId)) {

                booking.setRefundStatus(status);

                if ("COMPLETED".equalsIgnoreCase(status)) {
                    booking.setPaymentStatus("REFUNDED");
                }

                userRepository.save(user);

                return booking;
            }
        }

        throw new RuntimeException("Booking not found");
    }
}
import SignupDialog from "@/components/ui/SignupDialog";
import { Plane } from "lucide-react";

// export default function Home() {
//     return (
//         <div 
//         className="min-h-screen bg-cover bg-no-repeat"
//         style={{
//             backgroundImage:
//             'url("https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycG9ydHN8ZW58MHx8MHx8fDA%3D")'
//         }}
//         >

//         </div>
//     );
// }

import axios from "axios"

const BACKEND_URL = "https://make-my-trip-clone-springboot-4-qxnn.onrender.com"

export const login = async (
  email: string,
  password: string
) => {
  try {
    const url = `${BACKEND_URL}/user/login?email=${email}&password=${password}`;
    const res = await axios.post(url);
    const data = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/user/signup`, {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    });

    const data = res.data;
    return data;
  } catch (error) {
    throw error;
  }
};

export const getuserbyemail = async (email: any) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/user/email?email=${email}`
    );

    const data = res.data;
    return data;

  } catch (error) {
    throw error;
  }
};

export const editprofile = async (id: any, firstName: any,
  lastName: any, email: any,
  phoneNumber: any,
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/user/edit?id=${id}`, {
      firstName,
      lastName, email,
      phoneNumber,
    });

    const data = res.data;
    return data;

  } catch (error) {

  }
}
export const getflight = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/flight`)
    const data = res.data
    return data
  } catch (error) {
    console.log(error)
    return [];
  }
};
export const addflight = async (
  flightName: string,
  from: string,
  to: string,
  departureTime: string,
  arrivalTime: string,
  price: number,
  availableSeats: number
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/admin/flight`, {
      flightName,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
      availableSeats,
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const editflight = async (
  id: any,
  flightName: string,
  from: string,
  to: string,
  departureTime: string,
  arrivalTime: string,
  price: number,
  availableSeats: number
) => {
  try {
    const res = await axios.put(`${BACKEND_URL}/admin/flight/${id}`, {
      flightName,
      from,
      to,
      departureTime,
      arrivalTime,
      price,
      availableSeats,
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};



export const gethotel = async () => {
  try {
    const res = await axios.get(`${BACKEND_URL}/hotel`);
    console.log("Hotel API response:", res.data);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const handleflightbooking = async (userId: any, flightId: string, seats: number, price: number) => {
  try {
    const url = `${BACKEND_URL}/booking/flight?userId=${userId}&flightId=${flightId}&seats=${seats}&price=${price}`;
    const res = await axios.post(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const handlehotelbooking = async (userId: any, hotelId: string, rooms: number, price: number) => {
  try {
    const url = `${BACKEND_URL}/booking/hotel?userId=${userId}&hotelId=${hotelId}&rooms=${rooms}&price=${price}`;
    const res = await axios.post(url);
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const cancelBooking = async (
  userId: string,
  bookingId: string,
  reason: string
) => {
  try {
    const url = `${BACKEND_URL}/booking/cancel?userId=${userId}&bookingId=${bookingId}&reason=${reason}`;

    const res = await axios.post(url);

    return res.data;
  } catch (error) {
    console.log(error);
  }
  
};
export const addhotel = async (
  hotelName: string,
  location: string,
  pricePerNight: number,
  availableRooms: number,
  amenities: string
) => {
  try {
    const res = await axios.post(`${BACKEND_URL}/admin/hotel`, {
      hotelName,
      location,
      pricePerNight,
      availableRooms,
      amenities,
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }

};

export const edithotel = async (
  id: any,
  hotelName: string,
  location: string,
  pricePerNight: number,
  availableRooms: number,
  amenities: string
) => {
  try {
    const res = await axios.put(`${BACKEND_URL}/admin/hotel/${id}`, {
      hotelName,
      location,
      pricePerNight,
      availableRooms,
      amenities,
    });

    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }

};
export const updateRefundStatus = async (
  userId: string,
  bookingId: string,
  status: string,
) => {
  try {
    const res = await axios.put(
      `${BACKEND_URL}/booking/refund/status?userId=${userId}&bookingId=${bookingId}&status=${status}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addReview = async (
  review: any
) => {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/review/add`,
      review
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getReviews = async (
  itemId: string
) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/review/${itemId}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const flagReview = async (
  id: string
) => {
  try {
    const res = await axios.put(
      `${BACKEND_URL}/review/flag/${id}`
    );
    return res.data;
  } catch(error) {
    console.log(error);
  }
};
export const getFlightStatus =async (
  flightId: string
) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/flight-status/${flightId}`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getDynamicPrice = async (
  basePrice: number,
  weekend: boolean,
  holiday: boolean
) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/pricing/calculate?basePrice=${basePrice}&weekend=${weekend}&holiday=${holiday}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const getRecommendations = async (
  userId: string
) => {
  try {
    const res = await axios.get(
      `${BACKEND_URL}/recommendation/${userId}`
    );

    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
"use client"
//import { addflight, addhotel } from "../../api";
import {
  addflight as addFlightApi,
  addhotel as addHotelApi,
  edithotel,
} from "../../api";
import FlightList from '@/components/Flights/Flightlist';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
//import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Hotel } from 'lucide-react';
import React, { useEffect, useState } from 'react';



const Flights = [
    {
        _id: "1",
        flightName: "AirOne 101",
        from: "New York",
        to: "London",
        departureTime: "2023-07-01T08:00",
        arrivalTime: "2023-07-01T20:00",
        price: 500,
        availableSeats: 150,
    },
    {
        _id: "2",
        flightName: "SkyHigh 202",
        from: "Paris",
        to: "Tokyo",
        departureTime: "2023-07-01T10:00",
        arrivalTime: "2023-07-03T06:00",
        price: 800,
        availableSeats: 200,

    },
    {
        _id: "3",
        flightName: "EagleWings 303",
        from: "Los Angeles",
        to: "Sydney",
        departureTime: "2023-07-03T22:00",
        arrivalTime: "2023-07-05T06:00",
        price: 1200,
        availableSeats: 180,
    }

];

const Hotels = [
    {
        _id: "1",
        hotelName: " Luxury Palace",
        location: "Paris, France",
        pricePerNight: 300,
        availableRooms: 50,
        amenities: "Wi-fi, Pool, Spa, Restaurant",
    },
    {
        _id: "2",
        hotelName: " Seaside Resort",
        location: "Bali, Indonesia",
        pricePerNight: 200,
        availableRooms: 100,
        amenities: "Wi-fi, Pool, Beach Access,Water Sports, Restaurant",
    },
    {
        _id: "3",
        hotelName: "Mountain Lodge",
        location: "Aspen, Colorado",
        pricePerNight: 250,
        availableRooms: 30,
        amenities: "Ski-in/Ski-out, FirePlace, Hot Tub, Restaurant",
    }

];

 
const index = () => {
    const [activeTab, setActiveTab] = useState("flights")
    const [selectedFlight, setSelectedFlight] = useState(null)
    const [selectedHotel, setSelectedHotel] = useState(null)
    return (

        <div className="max-w-7xl mx-auto p-8 bg-background min-h-screen">
            <h1 className="text-4xl font-bold tracking-tight mb-8">Admin Dashboard</h1>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-black text-white">
                    <TabsTrigger value="flights">Flights</TabsTrigger>
                    <TabsTrigger value="hotels">Hotel</TabsTrigger>
                    <TabsTrigger value="users">Users</TabsTrigger>
                </TabsList>
                <TabsContent value="flights">
                    <Card className="shadow-md border rounded-xl">
                        <CardHeader className="pb-6">
                            <CardTitle>Manage flights</CardTitle>
                            <CardDescription>Add, edit or remove flights from the system</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">
                                        Flight list
                                        
                                    </h3>
                                    <Table className="border rounded-lg overflow-hidden">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Flight Name</TableHead>
                                                <TableHead>From</TableHead>
                                                <TableHead>To</TableHead>
                                                <TableHead>Action</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {Flights.map((flight: any) => (
                                                <TableRow key={flight._id}>
                                                    <TableCell>{flight.flightName}</TableCell>
                                                    <TableCell>{flight.from}</TableCell>
                                                    <TableCell>{flight.to}</TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="hover:scale-105 transition-transform"
                                                            onClick={() => setSelectedFlight(flight)}>
                                                            Edit
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <FlightList
                                    onSelect={setSelectedFlight}/>
                                    <AddEditFlight flight={selectedFlight} />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="hotels">
                    <Card>
                        <CardHeader>
                            <CardTitle>Manage Hotels</CardTitle>
                            <CardDescription>
                                add, edit, or remove hotel from the system.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 gap-4">
                                <HotelList hotels={Hotels} onSelect={setSelectedHotel} />
                                <AddEditHotel hotel={selectedHotel} />

                            </div>
                            {/* //table  */}
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">
                                        Hotels list
                                    </h3>
                                    <Table className="border rounded-lg overflow-hidden">
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Hotel Name</TableHead>
                                                <TableHead>Location</TableHead>
                                                <TableHead>Price per Night</TableHead>
                                                <TableHead>Action</TableHead>
                                            </TableRow>
                                        </TableHeader>

                                        <TableBody>
                                            {Hotels.map((Hotels: any) => (
                                                <TableRow key={Hotels._id}>
                                                    <TableCell>{Hotels.hotelName}</TableCell>
                                                    <TableCell>{Hotels.location}</TableCell>
                                                    <TableCell>{Hotels.pricePerNight}</TableCell>
                                                    <TableCell>
                                                        <Button
                                                            variant="outline"
                                                            size="sm"
                                                            className="hover:scale-105 transition-transform"
                                                            onClick={() => setSelectedHotel(Hotels)}>
                                                            Edit
                                                        </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>


                <TabsContent value="users">
                    <Card>
                        <CardHeader>
                            <CardTitle>User Management</CardTitle>
                            <CardDescription>
                                search users by email.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <UserSearch />
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default index;
interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    phoneNumber: string;
}
function UserSearch() {
    const [email, setemail] = useState("");
    const [user, setuser] = useState<User | null>(null);
    const handlesearch = (e: React.FormEvent) => {
        e.preventDefault();
        const sampleuser: any = {
            _id: "1",
            firstName: "john",
            lastName: "Doe",
            email: email,
            role: "USER",
            phoneNumber: "1234567890",
        };
        setuser(sampleuser);
    };

    return (<div>

        <form onSubmit={handlesearch}>
            <div>
                <Label>
                    Email
                </Label>
                <Input id="email" placeholder="search user by email" value={email} onChange={(e) => setemail(e.target.value)} required />
            </div>
            <Button type="submit"> Search</Button>
        </form>
        {user && (
            <div className="border p-4 rounded-md">
                <h3 className="font-bold mb-2">User Details</h3>
                <p>
                    <strong>Name:</strong> {user.firstName} {user.lastName}
                </p>
                <p>
                    <strong>Email:</strong> {user.email}
                </p>
                <p>
                    <strong>Role:</strong> {user.role}
                </p>
                <p>
                    <strong>Phone:</strong> {user.phoneNumber}
                </p>
            </div>
        )} </div>);

}
interface Hotel {
  id?: string;
  hotelName: string;
  location: string;
  pricePerNight: number;
  availableRooms: number;
  amenities: string;
}
function HotelList({ hotels, onSelect }: any) {
    return (
        <div>
            <h3 className="text-lg font-semibold md-2">hotel List</h3>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Hotel Name</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Price/Night</TableHead>
                        <TableHead>Action</TableHead>
                         
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    )
}
function AddEditHotel({ hotel }: any) {
    const [formData, setFormData] = useState({
        hotelName: "",
        location: "",
        pricePerNight: 0,
        availableRooms: 0,
        amenities: "",
    });

    useEffect(() => {
        if (hotel) {
            setFormData(hotel);
        } else {
            setFormData({
                hotelName: "",
                location: "",
                pricePerNight: 0,
                availableRooms: 0,
                amenities: "",
            });
        }
    }, [hotel]);

    //   const handleChange = (
    //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    //   ) => {
    //     const { name, value } = e.target;
    //     setFormData((prev) => ({ ...prev, [name]: value }));
    //   };
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev: any) => ({
            ...prev,
            [name]:
                name === "pricePerNight" || name === "availableRooms"
                    ? Number(value)
                    : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(hotel){
        await edithotel(
        hotel._id,
      formData.hotelName,
      formData.location,
      formData.pricePerNight,
      formData.availableRooms,
      formData.amenities
        );
        return;
    }
     
    await addhotel(
      formData.hotelName,
      formData.location,
      formData.pricePerNight,
      formData.availableRooms,
      formData.amenities
    );
    if (!hotel) {
      setFormData({
        hotelName: "",
        location: "",
        pricePerNight: 0,
        availableRooms: 0,
        amenities: "",
      });
    }
  };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-lg font-semibold mb-2">
                {hotel ? "Edit Hotel" : "Add New Hotel"}
            </h3>
            <div>
                <Label htmlFor="hotelName">Hotel Name</Label>
                <Input
                    id="hotelName"
                    name="hotelName"
                    value={formData.hotelName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="location">Location</Label>
                <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="pricePerNight">Price Per Night</Label>
                <Input
                    id="pricePerNight"
                    name="pricePerNight"
                    type="number"
                    value={formData.pricePerNight}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="availableRooms">Available Rooms</Label>
                <Input
                    id="availableRooms"
                    name="availableRooms"
                    type="number"
                    value={formData.availableRooms}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <Label htmlFor="amenities">Amenities</Label>
                <Textarea
                    id="amenities"
                    name="amenities"
                    value={formData.amenities}
                    onChange={handleChange}
                    required
                />
            </div>
            <Button type="submit">{hotel ? "Update Hotel" : "Add Hotel"}</Button>
        </form>
    );
};
interface Flight {
  _id?: string;
  flightName: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  availableSeats: number;
}

function AddEditFlight({ flight }: any) {
    const [formData, setformData] = useState({
        flightName: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        price: 0,
        availableSeats: 0,

    });
    useEffect(() => {
        if (flight) {
            setformData(flight)
        } else {
            setformData({
                flightName: "",
                from: "",
                to: "",
                departureTime: "",
                arrivalTime: "",
                price: 0,
                availableSeats: 0,

            });
        }
    }, [flight]);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setformData((prev) => ({ ...prev, [name]: value }));
    };
     const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log("Submitting flight data:", formData);
    await addFlightApi(
      formData.flightName,
      formData.from,
      formData.to,
      formData.departureTime,
      formData.arrivalTime,
      formData.price,
      formData.availableSeats
    );
    if (!flight) {
      setformData({
        flightName: "",
        from: "",
        to: "",
        departureTime: "",
        arrivalTime: "",
        price: 0,
        availableSeats: 0,
      });
    }
  };
   return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">
        {flight ? "Edit Flight" : "Add New Flight"}
      </h3>
      <div>
        <Label htmlFor="flightName">Flight Name</Label>
        <Input
          id="flightName"
          name="flightName"
          value={formData.flightName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="from">From</Label>
        <Input
          id="from"
          name="from"
          value={formData.from}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="to">To</Label>
        <Input
          id="to"
          name="to"
          value={formData.to}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="departureTime">Departure Time</Label>
        <Input
          id="departureTime"
          name="departureTime"
          type="datetime-local"
          value={formData.departureTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="arrivalTime">Arrival Time</Label>
        <Input
          id="arrivalTime"
          name="arrivalTime"
          type="datetime-local"
          value={formData.arrivalTime}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="availableSeats">Available Seats</Label>
        <Input
          id="availableSeats"
          name="availableSeats"
          type="number"
          value={formData.availableSeats}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">{flight ? "Update Flight" : "Add Flight"}</Button>
    </form>
  );
}

function addhotel(hotelName: string, location: string, pricePerNight: number, availableRooms: number, amenities: string) {
    throw new Error('Function not implemented.');
}

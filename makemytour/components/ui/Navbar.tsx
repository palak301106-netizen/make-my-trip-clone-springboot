"use client";

import { useEffect, useState } from "react";
import { LogOut, Plane, User } from "lucide-react"
import React from "react"
import SignupDialog from "./SignupDialog"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { clearUser } from "@/store";

 

const Navbar = () => {
    const dispatch=useDispatch()
     const [mounted, setMounted] = useState(false);
    const user = useSelector((state: any) => state.user.user);
    console.log("USER FROM REDUX:", user);
    const router=useRouter();
    const logout=()=>{
        dispatch(clearUser());
        router.push("/");
    };
    useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
    return (
        <header className="backdrop-blur-md py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="flex itmes-center space-x-2 text-white">
                    <Plane className="w-8 h-8 text-red-500" />
                    <span className="text-2x1 font-bold text-black">MakeMyTour</span>
                </div>
                <div className="flex items-center space-x-4">

                    {user ? <>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    className="relative h-8 w-8 rounded-full">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback>
                                            {user?.firstName?.charAt(0)}
                                        </AvatarFallback>
                                        {/* <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback> */}
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56" align="end" forceMount>
                                <DropdownMenuLabel className="font-normal">
                                    <div className="flex flex-col space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {user.firstName}
                                        </p>
                                        <p className="text-xs leading-none text-muted-foreground">
                                            {user.email}
                                        </p>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={() => router.push('/profile')}>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => logout()}>
                                    <LogOut className="mr-2 h-4 w-4" />
                                    <span>logout</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </> : (

                     <SignupDialog />
                    )}


                </div>
            </div>
        </header>
    );
};

export default Navbar 
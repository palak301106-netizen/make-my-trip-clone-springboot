import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import Head from "next/head";
import store, { setUser } from "../store"
import Navbar from "@/components/ui/Navbar";
import { Component } from "lucide-react";
import { useEffect } from "react";
import Footer from "@/components/Fotter";

const Myapp = ({ Component, pageProps }: AppProps) => {
    useEffect(() => {
        const storeduser = localStorage.getItem("user");
        console.log("Local Storage Raw", storeduser);
        if (storeduser) {
            const parsed = JSON.parse(storeduser);
            console.log("LOCAL STORAGE PARSED",parsed)
            console.log("LOCAL STORAGE KEYS", Object.keys(parsed));

            store.dispatch(setUser(parsed));
        }
    }, []);
    return (
        <div className="min-h-screen">
            <Navbar />,
            <Component {...pageProps} />
            <Footer/>
        </div>
    );
};
export default function App(props: AppProps) {
    return (
        <Provider store={store}>
            <Head>
                <title>MakeMyTour</title>
            </Head>
             <Myapp{...props}/>
        </Provider>
    );
}
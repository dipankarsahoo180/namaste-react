import React from "react";
import { useEffect } from "react";

const ContactUs = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("set interval called");
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });

    return <h1>ContactUs</h1>;
};

export default ContactUs;

import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const ContactUs = () => {
    const data = useContext(UserContext);
    return (
        <>
            <h1>
                Hello! <span className="font-bold">{data.loggedInUser}</span>{" "}
                You can email us at dipankarsahoo180@gmail.com
            </h1>
            <div className="m-2 p-1 flex items-center">
                <label>UserName : </label>
                <input
                    className="border border-black"
                    value={data.loggedInUser}
                    onChange={(e) => data.setUserName(e.target.value)}
                />
            </div>
            <button
                className="m-2 p-1 bg-blue-600 font-bold text-white rounded-lg"
                onClick={() => data.setUserName("Lizu Sahoo")}
            >
                Update User Name
            </button>

            <form>
                <input
                    type="text"
                    className=" border border-black p-2 m-2"
                    placeholder="name"
                />
                <input
                    type="text"
                    className=" border border-black p-2 m-2"
                    placeholder="message"
                />
                <button className=" border border-black p-2 m-2 bg-blue-100 rounded-lg">
                    Submit
                </button>
            </form>
        </>
    );
};

export default ContactUs;

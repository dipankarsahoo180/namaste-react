import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";


const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(<AppLayout/>);
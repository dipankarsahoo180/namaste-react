import React from "react";
import ReactDOM from "react-dom/client";

const Elem = () =>(
    <>
        <h1>React Element!!</h1>
    </>
)
const title =  (
        <>
            <h1 key='title' className="jsxClass">Title!!</h1>
        </>
        )
const number = 1000;
const Header = ()=> {
    return (
        <>
            {title} 
            {<Elem/>}
            {number}
            {console.log('Dipankar')}
            <h1 key='header' className="jsxClass">JSX Heading!!</h1>
        </>
        )
};


//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(<Header/>);
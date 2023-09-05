import React from "react";
import ReactDOM from "react-dom/client";

//create an element-simillar to document.createElement
/**
 * React.createElement(object) =>HTML (browser understands)
 * React.createElement creates and object
 * While it is rendering into DOM it converts the object into html
 * param 1 - type: element name
 * param 2 - props: attributes
 * param 3 - children inside props: text of the element
 */
const h1 = React.createElement("h1",{xyz:'abc',id:'heading'},"hello World from React!");
const h2 = React.createElement("h2",{xyz:'abc',id:'heading2'},"This is Namaste React ");

// Create nested Child using React.

//add multiple child inside the element using array (siblings)
const child = React.createElement('div',{id:'child'},['child div',h1,h2]); 
const parent = React.createElement('div',{id:'parent'},child); 

//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(parent);
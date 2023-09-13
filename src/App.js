import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from './components/ErrorPage'
import RestaurantMenu from "./components/RestaurantCardMenu";
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}


const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            errorElement: <Error />,
            children: [
                {
                    path: "",
                    element: <Body />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "contact-us",
                    element: <ContactUs />
                },
                {
                    path: "cart",
                    element: <Cart />
                },
                {
                    path: "restaurant/:resId",
                    element: <RestaurantMenu />
                }
            ]
        }

    ]
);

//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(<RouterProvider router={appRouter} />);
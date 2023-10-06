import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import Error from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantCardMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));


const AppLayout = () => {
    const [userName, setUserName] = useState();

    //authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Dipankar Sahoo",
        };
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider
                value={{ loggedInUser: userName, setUserName: setUserName }}
            >
                <div className="app">
                    {/* Nested Provider Example */}
                    <UserContext.Provider
                        value={{ loggedInUser: userName, setUserName: setUserName }}
                    >
                        <Header />
                    </UserContext.Provider>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Body />,
            },
            {
                path: "about",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "contact-us",
                element: <ContactUs />,
            },
            {
                path: "cart",
                element: <Cart />,
            },
            {
                path: "grocery",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "restaurant/:resId",
                element: <RestaurantMenu />,
            },
        ],
    },
]);

//ReactDOM is for dom interaction, Make #root as the root element of react
const root = ReactDOM.createRoot(document.getElementById("root"));
//render the element inside root
root.render(<RouterProvider router={appRouter} />);

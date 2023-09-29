import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
import Search from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const online = useOnlineStatus();
    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const data = await response.json();
            const card = data.data.cards.find(
                (el) => el.card.card.id === "restaurant_grid_listing"
            ).card.card;
            setListOfRestaurants(
                card?.gridElements?.infoWithStyle?.restaurants
            );
            setFilteredRestaurants(
                card?.gridElements?.infoWithStyle?.restaurants
            );
            console.warn(card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Fetch error:", error);
            //throw error;
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    if (!online)
        return (
            <>
                <h1>Looks like you are offline!</h1>
            </>
        );
    return listOfRestaurants?.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="">
            <Search
                listOfRestaurants={listOfRestaurants}
                setFilteredRestaurants={setFilteredRestaurants}
                searchText={searchText}
                setSearchText={setSearchText}
            />

            <div className="flex flex-wrap justify-around">
                {filteredRestaurants?.map((el) => (
                    <Link
                        className=""
                        to={"restaurant/" + el.info.id}
                        key={el.info.id}
                    >
                        <RestaurantCard resData={el} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { Body };

import React, { useState, useEffect } from "react";
import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
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
    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard); //higher order function
    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const data = await response.json();
            let card = data?.data?.cards?.find(
                (el) => el.card.card.id === "restaurant_grid_listing"
            )?.card?.card;
            card?.gridElements?.infoWithStyle?.restaurants?.forEach((el,idx)=>{
                if(idx%3==0) el.promoted = true
                else el.promoted =  false;
            });
            setListOfRestaurants(
                card?.gridElements?.infoWithStyle?.restaurants
            );
            setFilteredRestaurants(
                card?.gridElements?.infoWithStyle?.restaurants
            );
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
                        {
                            el.promoted ? <RestaurantCardPromoted resData={el}/> : <RestaurantCard resData={el} />
                        }
                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export { Body };

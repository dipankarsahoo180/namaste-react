import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";
import Shimmer from "./Shimmer";
import Search from "./Search";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const fetchData = async () => {
        try {
            const response = await fetch(SWIGGY_URL);
            const data = await response.json();
            const card = data.data.cards.find(el => el.card.card.id === 'restaurant_grid_listing').card.card;
            setListOfRestaurants(card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(card?.gridElements?.infoWithStyle?.restaurants);
            console.warn(card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error('Fetch error:', error);
            //throw error;
        }

    }

    useEffect(() => {
        fetchData()
    }, []);

    return (listOfRestaurants.length === 0) ?
        <Shimmer /> :

        (
            <div className="body">
                <Search 
                    listOfRestaurants = {listOfRestaurants} 
                    setFilteredRestaurants={setFilteredRestaurants}
                    searchText = {searchText}
                    setSearchText ={setSearchText}
                />
                
                <div className="res-container">
                    {
                        filteredRestaurants?.map(el =>
                            <RestaurantCard key={el.info.id} resData={el} />
                        )
                    }
                </div>
            </div>
        )
}

export { Body };
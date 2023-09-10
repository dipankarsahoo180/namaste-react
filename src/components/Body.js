import React, { useState,useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { SWIGGY_URL } from "../utils/Constants";

const Body = () => {

    const [card,setCard] = useState([]);
    const [filteredCard,setFilteredCard] = useState([]);
    const  fetchData = async() => {
        try {
          const response = await fetch(SWIGGY_URL);
          const data = await response.json();
          const card = data.data.cards.find(el => el.card.card.id === 'top_brands_for_you').card.card;
          setCard(card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredCard(card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
          console.error('Fetch error:', error);
          //throw error;
        }
      
    }

    useEffect(() => {
        fetchData();
      }, []);

    
    return(
        <div className="body">
            <div className="search">
                <button className='top-rated-btn' onClick={
                    ()=>{
                        const filteredCard = card.filter(el=>el.info.avgRating > 4);
                        setFilteredCard(filteredCard);
                    }
                }> Filter Top Rated restaurants</button>

                <button className='reset-btn' onClick={
                    ()=>{
                        setFilteredCard(card);
                    }
                }> Reset </button>
            </div>

            <div className="res-container">
            {
                filteredCard?.map(el=>
                    <RestaurantCard key={el.info.id} resData={el}/>
                )
            }
            </div>
        </div>
    )
}

export  {Body};
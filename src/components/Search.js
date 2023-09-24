import React from "react";

const Search = ({ listOfRestaurants, setFilteredRestaurants }) => {
    return (
        <div className="filter">
            <div className="search">
                <input
                    className="search-text"
                    placeholder="Search your restaurant"
                    type="text"
                    onChange={(e) => {
                        if (!e.target?.value) {
                            setFilteredRestaurants(listOfRestaurants);
                            return;
                        } else {
                            const filteredCard = listOfRestaurants.filter(
                                (el) =>
                                    el.info.name
                                        .toUpperCase()
                                        .includes(
                                            e.target?.value?.toUpperCase()
                                        )
                            );
                            setFilteredRestaurants(filteredCard);
                        }
                    }}
                ></input>
            </div>
            <button
                className="top-rated-btn"
                onClick={() => {
                    const filteredCard = listOfRestaurants.filter(
                        (el) => el.info.avgRating > 4
                    );
                    setFilteredRestaurants(filteredCard);
                }}
            >
                {" "}
                Filter Top Rated restaurants
            </button>

            <button
                className="reset-btn"
                onClick={() => {
                    setFilteredRestaurants(listOfRestaurants);
                }}
            >
                {" "}
                Reset{" "}
            </button>
        </div>
    );
};

export default Search;

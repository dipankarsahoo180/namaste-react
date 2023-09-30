import React from "react";

const Search = ({ listOfRestaurants, setFilteredRestaurants }) => {
    return (
        <div className="filter m-4 p-4  my-1 flex flex-wrap">
            <div className="border-solid my-2">
                <input
                    className="p-2 text-center rounded-lg"
                    type="text"
                    placeholder="Search your fav restaurant"
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
                className="my-2 mx-2 rounded-md px-3 py-1 bg-blue-500 text-white"
                onClick={() => {
                    const filteredCard = listOfRestaurants.filter(
                        (el) => el.info.avgRating > 4
                    );
                    setFilteredRestaurants(filteredCard);
                }}
            >
                Top Rated
            </button>

            <button
                className="my-2 mx-2 rounded-md px-7 py-1 bg-blue-500 text-white"
                onClick={() => {
                    setFilteredRestaurants(listOfRestaurants);
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Search;

import React from "react";

const Search = ({ listOfRestaurants, setFilteredRestaurants }) => {
    return (
        <div className="filter m-4 p-4  my-1 flex flex-wrap">
            <div className="border-solid">
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
                className="mx-2 rounded-sm  px-2 py-1 my-1 bg-green-500"
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
                className="mx-2 rounded-sm px-2 py-1  my-1 bg-green-500"
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

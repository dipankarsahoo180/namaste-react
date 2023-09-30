import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, idx }) => {
    console.log("restaurant category data is ", data);

    if (!data?.card?.card?.itemCards?.length) return <></>;
    return (
        <div className="mx-auto w-8/12 bg-slate-300 mt-4">
            <div
                className="py-2 my-2 px-2 rounded flex justify-between cursor-pointer"
                onClick={() =>
                    !showItems ? setShowIndex(idx) : setShowIndex(-1)
                }
            >
                <span>
                    {data?.card?.card?.title} (
                    {data?.card?.card?.itemCards?.length})
                </span>
                <span> ⬇️</span>
            </div>
            {showItems && <ItemList items={data?.card?.card?.itemCards} />}
        </div>
    );
};

export default RestaurantCategory;

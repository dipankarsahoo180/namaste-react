import React from "react";
// import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";
const ItemList = ({ items, toggle }) => {
    return (
        <div
            className="flex flex-wrap justify-between bg-slate-300"
        >
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 mt-2 border-gray-200 border-b-2 text-left flex items-start w-full"
                >
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4 items-end relative">
                        <div className="absolute bottom-1 z-1">
                            <button className="p-2 mx-16 rounded-lg bg-white text-green-600 font-bold shadow-lg">
                                ADD +
                            </button>
                        </div>
                        <img
                            src={
                                SWIGGY_API_CARD_IMAGE +
                                "/" +
                                item.card.info.imageId
                            }
                            className="w-full"
                        />
                    </div>
                </div>
            ))}
        </div>
    );

    {
        /* {items?.map((el, idx) => {
                    const resData = {
                        info: {
                            name: el.card.info.name,
                            cloudinaryImageId: el.card.info.imageId,
                            cuisines: [
                                el.card.info.itemAttribute.vegClassifier,
                                el.card.info.description,
                            ],
                            avgRating:
                                el.card.info.ratings.aggregatedRating.rating,
                            price: el.card.info.price,
                            showLogInOutBtn: true,
                        },
                    };
                    return (
                        <div key={el.card.info.id + "_" + idx + 0}>
                            <RestaurantCard
                                key={el.card.info.id + "_" + idx + 1}
                                resData={resData}
                            />
                        </div>
                    );
                })} */
    }
};

export default ItemList;

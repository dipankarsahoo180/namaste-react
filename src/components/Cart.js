import React, { useEffect, useState } from "react";
// import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Cart = () => {
    //Subscribing to the store using a selector(appStore)
    //cart is the name of one of the reducer in the appStore
    const cartItems = useSelector((store) => store?.cart?.items);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const price = cartItems?.reduce(
            (total, current, idx, array) =>
                (total += current.card.info.price
                    ? current.card.info.price / 100
                    : current.card.info.defaultPrice / 100),
            0
        ) ||0;
        setTotalPrice(price);
    }, [cartItems]);
    //publishing the value to the store
    const dispatch = useDispatch();
    const handleRemoveItem = (item) => {
        //dispatch an action with item as payload
        dispatch(removeItem(item));
    };

    return (
        <div className="bg-slate-300">
            <h1 className=" text-xl font-bold text-center">
                Cart total ₹{totalPrice}/-
            </h1>
            <div className="flex flex-wrap justify-between w-9/12 mx-auto">
                {cartItems.map((item) => (
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
                            <p className="text-xs">
                                {item.card.info.description}
                            </p>
                        </div>
                        <div className="w-3/12 p-4 items-end relative">
                            <div className="absolute bottom-1 z-1">
                                <button
                                    className="p-2 mx-4 rounded-lg bg-white text-red-600 font-bold shadow-lg"
                                    onClick={() => handleRemoveItem(item)}
                                >
                                    REMOVE -
                                </button>
                            </div>
                            <img
                                height="240px"
                                width="180px"
                                src={
                                    SWIGGY_API_CARD_IMAGE +
                                    "/" +
                                    item.card.info.imageId
                                }
                                className="w-1/2"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;

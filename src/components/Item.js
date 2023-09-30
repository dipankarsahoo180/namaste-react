import React, { useState } from "react";
import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";

const Item = ({ item, handleAddItem }) => {
    const [disabled, setDisabled] = useState(false);
    const [button, setButton] = useState("ADD +");
    const addItem = (value) => {
        handleAddItem(value);
        setButton("ADDED");
        setDisabled(true);
    };
    return (
        <>
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
                    <button
                        className="p-2 mx-16 rounded-lg bg-white text-green-600 font-bold shadow-lg"
                        onClick={() => addItem(item)}
                        disabled={disabled}
                    >
                        {button}
                    </button>
                </div>
                <img
                    src={SWIGGY_API_CARD_IMAGE + "/" + item.card.info.imageId}
                    className="w-full"
                />
            </div>
        </>
    );
};

export default Item;

import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import Item from "./Item";

const ItemList = ({ items, toggle }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action with item as payload
        dispatch(addItem(item));
    };
    return (
        <div className="flex flex-wrap justify-between bg-slate-300">
            {items.map((item) => (
                <div
                    key={item.card.info.id}
                    className="p-2 mt-2 border-gray-200 border-b-2 text-left flex items-start w-full"
                >
                    <Item item={item} handleAddItem={handleAddItem} />
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

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestrauntCategory from "./RestaurantCategory";
import { useState } from "react";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const restaurantDetails = useRestrauntMenu(resId);
    const [showIndex, setShowIndex] = useState(-1);
    const categories =
        restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
            (el) => el.card?.card?.["@type"]?.includes("ItemCategory")
        );
    console.warn("RestaurantMenu categories", categories);
    const isOnline = useOnlineStatus();

    if (!restaurantDetails || !isOnline) return <Shimmer />;

    return (
        <>
            <div className="">
                <div className="flex flex-wrap flex-col text-center mx-1 px-3 py-2 text-2xl">
                    <h1 className="font-bold">
                        {restaurantDetails.cards[0]?.card?.card?.info?.name}
                    </h1>
                    <h2>
                        Rating:{" "}
                        {
                            restaurantDetails.cards[0]?.card?.card?.info
                                ?.avgRatingString
                        }
                    </h2>
                    <h3>
                        Total Categories:{" "}
                        {
                            categories?.filter(
                                (data) => data.card?.card?.itemCards?.length > 0
                            )?.length
                        }
                    </h3>
                </div>
                <div className="">
                    {categories?.map((el, idx) => {
                        return (
                            //Controlled Component
                            <div key={el?.card?.info?.id || idx}>
                                <RestrauntCategory
                                    key={el?.card?.info?.id || idx}
                                    data={el}
                                    showItems={idx == showIndex}
                                    idx={idx}
                                    setShowIndex={setShowIndex}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

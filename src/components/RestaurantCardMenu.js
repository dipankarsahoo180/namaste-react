import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SWIGGY_REST_MENU } from "../utils/Constants";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";


export default function RestaurantMenu() {
    const { resId } = useParams();
    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [itemList, setItemList] = useState([]);

    const fetchMenu = async () => {
        const response = await fetch(SWIGGY_REST_MENU + resId);
        const data = await response.json();
        setRestaurantDetails(data.data);
        console.log(data.data);
        const card = data.data?.cards[3]?.groupedCard? 
                        data.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
                            data.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
                            data.data.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
                        :
                        data.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
                            data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
                            data.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
        setItemList(card)
        console.log(card);
    }

    useEffect(() => {
        fetchMenu()
    }, [])

    if (!restaurantDetails || !itemList) return <Shimmer />;

    return (
        <>
            <div className="body">
                <h1>{restaurantDetails.cards[0].card.card.info.name}</h1>
                <h2>Rating: {restaurantDetails.cards[0].card.card.info.avgRatingString}</h2>
                <h3>Total items: {itemList.length}</h3>
                <div className="res-container">
                    {
                        itemList.map((el, idx) => {
                            const resData = {
                                info: {
                                    name: el.card.info.name,
                                    cloudinaryImageId: el.card.info.imageId,
                                    cuisines: [el.card.info.itemAttribute.vegClassifier, el.card.info.description],
                                    avgRating: el.card.info.ratings.aggregatedRating.rating,
                                    price: el.card.info.price,
                                }
                            }

                            return (
                                <div key={el.card.info.id + '_' + idx + 0}>
                                    <RestaurantCard key={el.card.info.id + '_' + idx + 1} resData={resData} />
                                    <div key={el.card.info.id + '_' + idx + 2} className="cart-add-remove">
                                        <button className="log-in-out-btn" >Add</button>
                                        <button className="log-in-out-btn" >remove</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
import { useParams } from "react-router-dom"
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function RestaurantMenu() {
    const { resId } = useParams();
    const restaurantDetails = useRestrauntMenu(resId);
    console.warn('resInfo',restaurantDetails);
    const isOnline = useOnlineStatus();
    const itemList = 
    restaurantDetails?.cards? restaurantDetails?.cards[3]?.groupedCard? 
        restaurantDetails?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
            restaurantDetails.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
            restaurantDetails.cards[3]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
        :
        restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards ?
            restaurantDetails.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card.card.itemCards :
            restaurantDetails.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card.card.itemCards 
    :null;
    console.log('card',itemList);

    if (!restaurantDetails || !itemList || !isOnline) return <Shimmer />;

    return (
        <>
            <div className="body">
                <h1>{restaurantDetails.cards[0]?.card?.card?.info?.name}</h1>
                <h2>Rating: {restaurantDetails.cards[0]?.card?.card?.info?.avgRatingString}</h2>
                <h3>Total items: {itemList?.length}</h3>
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
                                    showLogInOutBtn:true
                                }
                            }

                            return (
                                <div key={el.card.info.id + '_' + idx + 0}>
                                    <RestaurantCard key={el.card.info.id + '_' + idx + 1} resData={resData} />
                                    {/* <div key={el.card.info.id + '_' + idx + 2} className="cart-add-remove">
                                        <button className="log-in-out-btn" >Add</button>
                                        <button className="log-in-out-btn" >remove</button>
                                    </div> */}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
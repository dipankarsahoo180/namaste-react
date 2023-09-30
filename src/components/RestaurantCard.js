import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";

const RestaurantCard = (props) => {
    const {
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        price,
        showLogInOutBtn,
    } = props.resData.info;
    return (
        <div className="w-[250px] m-4 h-[420px] rounded-lg bg-slate-300 hover:bg-green-400 relative">
            <img
                className="w-[250px] h-56 rounded-lg"
                src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`}
                alt="Image no available"
            ></img>
            <h3 className="text-center p-2 font-bold text-lg">
                {name.length > 25 ? name.slice(0, 25) : name || ""}
            </h3>
            <div className="p-2">
                <p>
                    {cuisines.join(", ").length <= 20
                        ? cuisines.join(", ")
                        : cuisines.join(", ").slice(0, 20) + "..."}
                </p>
                <p>Rating: {avgRating || ""}</p>
                {price ? <p>Price: {price / 100}</p> : ""}
                {showLogInOutBtn == true ? (
                    <div className="absolute bottom-2 left-[20%]">
                        <button className="mx-2 rounded-md px-4 py-1 bg-blue-500 text-white">
                            Add
                        </button>
                        <button className="mx-2 rounded-md px-1 py-1 bg-blue-500 text-white">
                            remove
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

// Higher Order Component
// input - RestaurantCard =>> RestaurantCardPromoted
export const withPromtedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg z-10">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};
export default RestaurantCard;

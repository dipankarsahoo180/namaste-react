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
        <div className="w-[250px] m-4 h-[420px] rounded-lg bg-slate-300 hover:bg-green-400">
            <img
                className="w-[250px] h-56 rounded-lg"
                src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`}
                alt="Image no available"
            ></img>
            <h3 className="text-center p-2 font-bold text-lg">{name || ""}</h3>
            <div className="p-2">
                <p>
                    {cuisines.join(", ").length <= 30
                        ? cuisines.join(", ")
                        : cuisines.join(", ").slice(0, 30) + "..."}
                </p>
                <p>Rating: {avgRating || ""}</p>
                {price ? <p>Price: {price / 100}</p> : ""}
                {showLogInOutBtn == true ? (
                    <div className="flex flex-wrap justify-center">
                        <button className="mx-2 rounded-lg px-1 py-1 bg-green-500">
                            Add
                        </button>
                        <button className="mx-2 rounded-lg px-1 py-1 bg-green-500">
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

export default RestaurantCard;

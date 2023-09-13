import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";

const styleCard = {
    background: 'lightgrey',
    textAlign:'center'
}

const RestaurantCard = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating,price} = props.resData.info;
    return(
        <div className="res-card" style={styleCard}>
            <img src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`} alt="Image no available"></img>
            <h3>{name || ''}</h3>
            <p>{cuisines.join(', ').length <=30? cuisines.join(', '):cuisines.join(', ').slice(0,30)+"..."}</p>
            <p>Rating: {avgRating || ''}</p>
            {price?<p>Price: {price/100}</p>:""}
        </div>
    )
}

export default RestaurantCard;
import { SWIGGY_API_CARD_IMAGE } from "../utils/Constants";

const styleCard = {
    background: 'lightgrey',
    textAlign:'center'
}

const RestaurantCard = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating} = props.resData.info;
    return(
        <div className="res-card" style={styleCard}>
            <img src={`${SWIGGY_API_CARD_IMAGE}/${cloudinaryImageId}`}></img>
            <h3>{name || ''}</h3>
            <p>{cuisines.join(', ')}</p>
            <p>{avgRating || ''}</p>
        </div>
    )
}

export default RestaurantCard;
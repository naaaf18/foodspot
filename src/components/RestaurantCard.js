import { imageURL } from "../constants";
export const RestaurantCard = ({name,cuisines,avgRating,cloudinaryImageId})=>{
  return(
  <div className="card">
      
  <img className="restrauntphoto "alt= "burger"src={imageURL+
  cloudinaryImageId}/>
  <h2>{name}</h2>
  <h3>{cuisines}</h3>
  <h4>{avgRating}</h4>
  
  </div>
  )
}
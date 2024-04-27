import { useState , useEffect} from "react";
import { restaurantList } from "../constants";
import { RestaurantCard } from "./RestaurantCard";
  
function filterData(inputText,restroList){
  const filterData= restroList.filter((res)=>res.info.name.includes(inputText))
  return filterData;
}
const Body=()=>{
  const [inputText,setInputText]=useState("")
  const [restroList,setRestroList]=useState(restaurantList)
  useEffect(()=>{
    console.log('hello')
    getRestaurant()
  },[])
  async function getRestaurant(){
   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.31973&lng=75.80146549999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json = await data.json();
console.log(json)
setRestroList(json?.data?.cards)  
   } return(
    <div>

      <div className="searchcontainer">
<input 
type="text"
 className="searchinput"
 placeholder="search for restaurant"
 value={inputText}
 onChange={(e)=>{
  setInputText(e.target.value)
 

 }}/>
 
 <button 
  className="searchbtn" onClick={()=>{
    const data = filterData(inputText,restroList);
    setRestroList(data)
 }}>search</button>
      </div>
    <div className="Restaurantlist">
        {restroList.map((res)=>{
          return <RestaurantCard {...res?.info} key={res?.info?.id}/>
        })}
      
      
    </div>
    </div>
  )
}
export default Body;
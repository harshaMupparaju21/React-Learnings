import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {
    //this is actually also array destructruing 
    const [listOfRestaurants, setListofRestaurant] = useState(resList);
    
    // the above thing can also be written as:
    // const [listOfRestaurants, setListofRestaurant] = arr
    // const listOfRestaurants = arr[0];
    // const setListofRestaurant = arr[1];

    return(
     <div className="body">
        <div className="filter">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurants.filter( 
                    (res) => res.data.avgRating > 4
                );
                setListofRestaurant(filteredList);
            }} >Top Rated Restaurants</button>
        </div>

        <div className="res-container">
            {listOfRestaurants.map((restaurant) => ( 
            <RestaurantCard key={restaurant.data.id} resData={restaurant}/> 
            ))}          
        </div>
     </div>   
    )    
}

export default Body;



// const Body = () => {
//     return(
//      <div className="body">
//         <div className="search">Search</div>
//         <div className="res-container">
//             <RestaurantCard resName="Kritinga" cuisine="Biryani, South Asian" rating="4.4 stars"/>
//             <RestaurantCard resName="KFC" cuisine="Fast food" rating= "4.7 stars"/> 
//             <RestaurantCard resName="Meghana" cuisine="Biryani, North Indian" rating="4.1 stars" />         }
//             <RestaurantCard resData={resData}/>            
//         </div>
//      </div>   
//     )    
// }
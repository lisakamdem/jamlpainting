"use client";
// FavoritesPage.js
import "../artistcss.css";
import { useEffect, useState } from "react";
import Header from "../Header/page";
import Footer from "../Footer/footer";

export default function Page({ onRemoveFavorite }) {
    const [favoritesList, setFavoritesList] = useState([]);

    useEffect(() => {
      // Check if running on the client side
      if (typeof window !== "undefined") {
        // Access localStorage only on the client side
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavoritesList(storedFavorites);
      }
    }, []);

    const handleRemoveFavorite = (item) => {
        // Call the parent component's onRemoveFavorite function
        if (onRemoveFavorite) {
          onRemoveFavorite(item);
        }
    
        // Update the local state
        setFavoritesList((prevFavorites) => prevFavorites.filter((fav) => fav !== item));
    
        // Update localStorage
        localStorage.setItem("favorites", JSON.stringify(favoritesList.filter((fav) => fav !== item)));
      };


  useEffect(() => {
    // You may want to update the component state or perform other actions
    // when the favorites data changes.
  }, [favoritesList]);

   return (
    <>
    
        <Header/>

            <div >
            <h2 style={{ backgroundColor: "rgb(46,139,87)", color: "rgb(173,216,230)"}}>Favorites</h2>
            <ul className="img-gallery mb-4">
                {favoritesList.map((item) => (
                <li key={item}>
                    <img src={item} alt={`Favorite ${item.alt}`} />
                    <p>{item.title}</p>
                    <button className="btn btn-wide text-green-400 bg-black hover:text-black hover:bg-green-400 ml-10 mt-2" onClick={() => handleRemoveFavorite(item)}>Remove from Favorites</button>
                </li>
                ))}
            </ul>
            </div>

        <Footer/>

    </> 
   );
 }

// FavoritesPage.js
import "../artistcss.css";

export default function Page({ favorites, onRemoveFavorite }) {
   // Ensure that favorites is always an array
   const favoritesList = favorites || [];
   return (
     <div >
       <h2 style={{ backgroundColor: "rgb(46,139,87)", color: "rgb(173,216,230)"}}>Favorites</h2>
       <ul className="img-gallery mb-4">
         {favoritesList.map((item, index) => (
           <li key={index}>
             <img src={item} alt={`Favorite ${index + 1}`} />
             <button className="btn btn-wide text-green-400 bg-black hover:text-black hover:bg-green-400 ml-10 mt-2" onClick={() => onRemoveFavorite(item)}>Remove from Favorites</button>
           </li>
         ))}
       </ul>
     </div>
   );
 }

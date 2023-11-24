// FavoritesPage.js
import FavoritesPage from "./favorites";

export default function Page({ favorites, onRemoveFavorite }) {
   // Ensure that favorites is always an array
   const favoritesList = favorites || [];
   return (
     <div>
       <h2>Favorites</h2>
       <ul>
         {favoritesList.map((item, index) => (
           <li key={index}>
             {item}
             <button onClick={() => onRemoveFavorite(item)}>Remove from Favorites</button>
           </li>
         ))}
       </ul>
     </div>
   );
 }

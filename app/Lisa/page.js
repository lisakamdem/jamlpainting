// Import necessary modules and components
"use client";
import Header from "../Header/page";
import Footer from "../Footer/footer";
import "../artistcss.css";
import FavoritesPage from "../favorite/page";
import React, { useState } from "react";

export default function Page() {
  const [fullImage, setFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [heartColors, setHeartColors] = useState({});
  const [favorites, setFavorites] = useState([]);

 const handleButtonClick = (paintingSrc) => {
    // Toggle heart color between 'red' and 'currentColor'
    setHeartColors((prevColors) => {
      const currentColor = prevColors[paintingSrc] || 'currentColor';
      const newColor = currentColor === 'red' ? 'currentColor' : 'red';

      // Update heart color for the clicked painting
      return {
        ...prevColors,
        [paintingSrc]: newColor,
      };
    });

    // Add or remove the painting from favorites
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(paintingSrc)) {
        // Remove from favorites
        return prevFavorites.filter((fav) => fav !== paintingSrc);
      } else {
        // Add to favorites
        return [...prevFavorites, paintingSrc];
      }
    });
  };

  const handleRemoveFavorite = (favSrc) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== favSrc));

    // Update heart color to 'currentColor' when removing from favorites
    setHeartColors((prevColors) => {
      return {
        ...prevColors,
        [favSrc]: 'currentColor',
      };
    });
  };

  const openImage = (src) => {
    setFullImageSrc(src);
    setFullImage(true);
  };

  const closeImage = () => {
    setFullImage(false);
  };

  // Array of paintings with details
  const paintings = [
    { src: "/LisaPainting/L1.jpg", title: "Charmander By: Lisa" },
    { src: "/LisaPainting/L5.jpg", title: "Loudred By: Lisa" },
    { src: "/LisaPainting/L3.jpg", title: "Dark Tree By: Lisa" },
    { src: "/LisaPainting/L4.jpg", title: "Spring Tree By: Lisa" },
    { src: "/LisaPainting/L2.jpg", title: "4 Season Trees By: Lisa" },
  ];

  return (
    <>
      <Header />
      <article className="bio-image">
        {/* Your bio content goes here */}
      </article>

    <div className="img-gallery">
			{/* Map through the paintings and create gallery items */}
			{paintings.map((painting) => (
			<div className="gallery" key={painting.src}>
				<img src={painting.src} onClick={() => openImage(painting.src)} />
				<div className="desc">
				{/* Gallery item content */}
				<p>{painting.title}</p>

				<button
					className="btn"
					onClick={() => handleButtonClick(painting.src)}
					style={{ fill: heartColors[painting.src] || 'currentColor' }}
				>
					Button
					<svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
				</button>
			</div>
		</div>
			))}
    </div>

      {fullImage && (
        <div className="full-img" id="full-img">
          <img src={fullImageSrc} id="fullimg" alt="Full Size" />
          <span onClick={closeImage}>X</span>
        </div>
      )}
		<FavoritesPage favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
      <Footer />

    </>
  );
}
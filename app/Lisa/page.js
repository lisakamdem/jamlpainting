// Import necessary modules and components
"use client";
import Header from "../Header/page";
import Footer from "../Footer/footer";
import "../artistcss.css";
import FavoritesPage from "../favorite/page";
import { useUserAuth } from "../Header/_utils/auth-context";
import { addReview, getReviews } from "../_services/review_services";
import ReviewForm from "../Review/review";
import React, { useState, useEffect } from "react";

export default function Page() {

  const [fullImage, setFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [heartColors, setHeartColors] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const {user} = useUserAuth();


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
      const newFavorites = prevFavorites.includes(paintingSrc)
        ? prevFavorites.filter((fav) => fav !== paintingSrc)
        : [...prevFavorites, paintingSrc];
  
      // Update local storage
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
  
      return newFavorites;
    });
  };

  const handleRemoveFavorite = (favSrc) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.filter((fav) => fav !== favSrc);
  
      // Update local storage
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
  
      return newFavorites;
    });


    // Update heart color to 'currentColor' when removing from favorites
    setHeartColors((prevColors) => ({
      ...prevColors,
      [favSrc]: 'currentColor',
    }));
  };

  // Load favorites from local storage on component mount
useEffect(() => {
  const storedFavorites = localStorage.getItem('favorites');
  if (storedFavorites) {
    setFavorites(JSON.parse(storedFavorites));
  }
}, []);

  const loadReview = async () => {
      const userReviews = await getReviews();
      setReviews(userReviews);
  };

  useEffect(() => {
    loadReview();
  }, []);
  

  const handleAddReview = async (review) => {
    try {
      const reviewId = await addReview(review);
      setReviews([...reviews, { id: reviewId, ...review }]);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleRemoveReview = async (review) => {
    try {
      console.log("User ID:", user.uid);
      console.log("Review User ID:", review.id);
  
      if (user && user.uid && review && review.id === user.uid) {
        console.log("User is authorized to delete the review.");
        await deleteReview(review.id);
        setReviews((prevReviews) => prevReviews.filter((r) => r.id !== review.id));
      } else {
        console.error("User is not authorized to delete this review.");
      }
    } catch (error) {
      console.error("Error removing review:", error);
    }
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

        {user ? (
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
				</button>) : (
          <div>
            <p className="text-sm">Sign in to add to favorites</p>
          </div>
        )}

      

				
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

        <div>
          <h1 style={{ backgroundColor: "rgb(46,139,87)", color: "rgb(173,216,230)"}}>Review</h1>
          

         {user && <ReviewForm onAddReview={handleAddReview} />}
          {reviews !== null ? (
            reviews && reviews.length > 0 ? (
              <ul className="space-y-4 mb-8 mt-4">
                {reviews.map((review) => (
                  <li key={review.id} className="border-2 border-white text-base flex items-center justify-center w-1/2">
                    <div className="m-4">
                      <p>Name: {review.name}</p>
                      <p>Email: {review.email}</p>
                      <p>Rating: {review.rating}</p>
                      <p>Message: {review.message}</p>
                      <p>Date: {review.date}</p>
                      { user && <button
                        className="btn btn-wide text-green-400 bg-black hover:text-black hover:bg-green-400 ml-10 mt-2"
                        onClick={() => handleRemoveReview(review)}>Delete</button>}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No reviews</p>
            )
          ) : (
            <p>Loading reviews...</p>
          )}

        </div>
      <Footer />
    </>
  );
}
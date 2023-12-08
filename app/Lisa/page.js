// Import necessary modules and components
"use client";
import Header from "../Header/page";
import Footer from "../Footer/footer";
import "../artistcss.css";
import { useUserAuth } from "../Header/_utils/auth-context";
import { addReview, getReviews, deleteReview } from "../_services/review_services";
import ReviewForm from "../Review/review";
import React, { useState, useEffect } from "react";

export default function Page() {

  const [fullImage, setFullImage] = useState(false);
  const [fullImageSrc, setFullImageSrc] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [reviews, setReviews] = useState([]);
  const {user} = useUserAuth();


  const handleButtonClick = (paintingSrc) => {
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
      const reviewId = await addReview(review, user.uid);
      setReviews([...reviews, { id: reviewId, ...review }]);
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  const handleRemoveReview = async (review) => {
    try {
      console.log("User ID:", user.uid);
      console.log("Review User ID:", review.userId); // Assuming userId is where you store the user ID
  
      if (user && user.uid && review) {
        console.log("User is authorized to delete the review.");
        await deleteReview(review.id, user.uid);
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
    { src: "/L/L1.jpg", title: "Charmander By: Lisa", alt: "Charmander" },
    { src: "/L/L5.jpg", title: "Loudred By: Lisa", alt: "Loudred" },
    { src: "/L/L3.jpg", title: "Dark Tree By: Lisa", alt: "Dark Tree" },
    { src: "/L/L4.jpg", title: "Spring Tree By: Lisa", alt: "Spring Tree"},
    { src: "/L/L2.jpg", title: "4 Season Trees By: Lisa", alt: "4 Season Trees" },
  ];

  return (
    <>
      <Header />
      <article className="bio-image">
					<h1>Lisa&apos;s paintings</h1>
					<p className="mt-2">Hello my name is Lisa and when I&apos; not watching the Big Bang Theory, study, working-out or watching Netflix
					I paint here are some of my paintings</p>
			</article>

    <div className="img-gallery">
			{/* Map through the paintings and create gallery items */}
			{paintings.map((painting) => (
			<div className="gallery" key={painting.src}>
				<img src={painting.src} alt={painting.alt} onClick={() => openImage(painting.src)} />
				<div className="desc">
				{/* Gallery item content */}
				<p>{painting.title}</p>

        {user ? (
          <button
          className={`btn hover:bg-red-700 hover:text-black ${favorites.includes(painting.src) ? 'favorite-btn' : ''}  `}
          onClick={() => handleButtonClick(painting.src)}>
                  
                  Favorite
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
                    <div className="m-4 ">
                      <p>Name: {review.name}</p>
                      <p>Email: {review.email}</p>
                      <p>Rating: {review.rating}</p>
                      <p>Message: {review.message}</p>
                      <p className="mb-2">Date: {review.date}</p>
                      { user && <button
                        className="btn btn-wide text-green-400 bg-black hover:text-black hover:bg-green-400 flex justify-center "
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
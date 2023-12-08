import { db } from "../Header/_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc, getDoc, doc} from "firebase/firestore";

export const getReviews = async () => {
 try{
  const q = query(collection(db, "reviews"));
  const querySnapshot = await getDocs(q);

 const mappedItems = querySnapshot.docs.map((doc) => ({
   id: doc.id,
   ...doc.data(),
    }));
  return mappedItems;
} catch (error) {
  console.log(error);
}
};

export const addReview = async (review, userId) => {
  try {
    const reviewsCollection = collection(db, "reviews");
    
    // Include the userId property in the review object
    const reviewWithUserId = { ...review, userId: userId };

    const newReviewRef = await addDoc(reviewsCollection, reviewWithUserId);
    console.log("Document written with ID: ", newReviewRef.id);
    return newReviewRef.id;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error; // Propagate the error up to the calling code
  }
};


export const deleteReview = async (reviewId, userId) => {
  try {
    // Retrieve the review document
    const reviewRef = doc(db, 'reviews',reviewId);
    const reviewSnapshot = await getDoc(reviewRef);

    // Check if the review exists
    if (reviewSnapshot.exists()) {
      // Check if the authenticated user is the creator of the review
      if (userId === reviewSnapshot.data().userId) {
        // If yes, delete the review
        await deleteDoc(reviewRef);
        console.log('Review successfully deleted!');
        return reviewId;
      } else {
        console.log('Unauthorized: You cannot delete reviews created by other users.');
        return null; // or throw an error, depending on your application flow
      }
    } else {
      console.log('Review not found.');
      return null; // or throw an error, depending on your application flow
    }
  } catch (error) {
    console.error('Error deleting review: ', error);
    throw error; // Propagate the error up to the calling code
  }
};
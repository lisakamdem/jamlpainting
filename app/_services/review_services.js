import { db } from "../Header/_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getReviews = async (userID) => {
 try{
  const q = query(collection(db, "users", userID, "reviews"));
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

export const addReview = async (userId,review) => {
 try{
  const userRef = collection(db, "users", userId, "reviews");
  const reviewsCollection = await addDoc(userRef, review)
  console.log("Document written with ID: ", docRef.id);
  return reviewsCollection.id;
} catch (error) {
  console.log(error);
}
};
import { db } from "../Header/_utils/firebase";
import { collection, getDocs, addDoc, query} from "firebase/firestore";

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

export const addReview = async (review) => {
 try{
  const userRef = collection(db, "reviews");
  const reviewsCollection = await addDoc(userRef, review)
  console.log("Document written with ID: ", reviewsCollection.id);
  return reviewsCollection.id;
} catch (error) {
  console.log(error);
}
};

export const deleteReview = async ( reviewId) => {
  try{
    const userRef = collection(db, "reviews");
    await deleteDoc(userRef, reviewId)
    console.log("Document written with ID: ", reviewId);
    return reviewId;
  } catch (error) {
    console.log(error);
  }
};
import { db } from "../Header/_utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export const addContact = async (contact) => {
    try {
        const contactCollection = collection(db, "contacts");
        
        const newContactRef = await addDoc(contactCollection, contact);
        console.log("Document written with ID: ", newContactRef.id);
        return newContactRef.id;
    } catch (error) {
        console.error("Error adding contact:", error);
        throw error; // Propagate the error up to the calling code
    }
};
import {db} from '../FirebaseConfig';
import { getAuth } from 'firebase/auth';
import { 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    setDoc,
    doc 
} from 'firebase/firestore';

function getCollectionPath() {
    const auth = getAuth();
    const user = auth.currentUser;
    
    if (user !== null) {  
        console.log("Sign-in provider: " + user.providerId);
        console.log("  Provider-specific UID: " + user.uid);
        console.log("  Name: " + user.displayName);
        console.log("  Email: " + user.email);
        console.log("  Photo URL: " + user.photoURL); 
        const id = user.uid;
        const collection = "CheckoutLogs/" + id + "/BookList";
        return id;
    }
    else {
        return "CheckoutLogs"
    } 
}

const collectionPath = getCollectionPath();
const CheckoutCollectionRef = collection(db, collectionPath);

class CheckoutDataService {
    addUserLog = (newUserLog) => { 
        return setDoc(CheckoutCollectionRef, newUserLog);
    }
    getCartBooks = () => {
        return getDocs(CheckoutCollectionRef);
    }
}

export default new CheckoutDataService();


/*  when clicking checkout,
    create user document using the users uid under the CheckoutLogs collection,
    add book to users BookList collection (which is under their user document in CheckoutLogs), 
    */
    
       
import {db} from '../FirebaseConfig';
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

const CheckoutCollectionRef = collection(db, "CheckoutLogs");

class CheckoutDataService {
    addUserLog = (newUserLog) => { //maybe change to set
        return setDoc(CheckoutCollectionRef, newUserLog);
    }

}

const CartCollectionRef = collection(db, "Cart");

class CartDataService {
    getCartBooks = () => {
        return getDocs(CartCollectionRef);
    }
}

export default new CartDataService();

/*  when clicking checkout,
    create user document using the users uid under the CheckoutLogs collection,
    add book to users BookList collection (which is under their user document in CheckoutLogs), 
    */
    
       
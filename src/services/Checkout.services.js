import {db} from '../FirebaseConfig';
import { 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore';

const CheckoutCollectionRef = collection(db, "CheckoutLogs");

class CheckoutDataService {
    addUserLog = (newUserLog) => { //maybe change to set
        return addDoc(CheckoutCollectionRef, newUserLog);
    }

}

const CartCollectionRef = collection(db, "Cart");

class CartDataService {
    getCartBooks = () => {
        return getDocs(CartCollectionRef);
    }
}

export default new CartDataService();
/*  create cart collection,
    add book to cart collection,
    when clicking checkout,
        lookup users document in cart collection,
        add items in cart to BookList collection as documents,
        refresh page,
        clear all book documents from cart collection
        */
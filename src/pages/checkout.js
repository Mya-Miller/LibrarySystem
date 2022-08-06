import { useEffect, useState } from "react";
import Book from "../components/Book";
import CheckoutServices from "../services/Checkout.services";
import './checkout.css';
import { 
    collection, 
    getDocs, 
    getDoc, 
    setDoc, 
    addDoc,
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore';
import { getAuth } from 'firebase/auth'
import {db} from '../FirebaseConfig';

function Checkout() {
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        getCheckout();  
    },[]);

    function getUID() {
        const auth = getAuth();
        const user = auth.currentUser;
        
        if (user !== null) {  
            console.log("Sign-in provider: " + user.providerId);
            console.log("  Provider-specific UID: " + user.uid);
            console.log("  Name: " + user.displayName);
            console.log("  Email: " + user.email);
            console.log("  Photo URL: " + user.photoURL); 
            const id = user.uid;
            return id;
        }
    }

    function getCheckoutBooks() {
        const uid = getUID();
        const collectionPath = "CheckoutLogs/" + uid + "/BookList";
        const CheckoutCollectionRef = collection(db, collectionPath);
        
        return getDocs(CheckoutCollectionRef);
    }

    async function getCheckout() {
        const checkoutData = await getCheckoutBooks();
        setCheckout(checkoutData.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    return (
        <div className="cartcontainer">
            <h2 className="section-header">CART</h2>
            <div className="cart-row">
                {
                checkout.map((book, index) => {
                    return (
                    <Book
                        key={book.id}
                        Title={book.Title}
                        Image={book.Image}
                        Description={book.Description}
                        Author={book.Author}
                        Genre={book.Genre}
                    />
                    );
                })
                }
                <button className="removeBtn">Remove</button>
            </div>
            <button className="checkoutBtn">
            CHECKOUT
            </button>
        </div>
    );
}

export default Checkout;
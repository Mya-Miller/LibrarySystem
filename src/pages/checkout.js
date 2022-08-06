import { useEffect, useState } from "react";
import Book from "../components/Book";
import './checkout.css';
import {  collection,  getDocs, deleteDoc, doc } from 'firebase/firestore';
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

    /*function returnBook() {
        const uid = getUID();
        const collectionPath = "CheckoutLogs/" + uid + "/BookList";

        deleteDoc(doc(db, collectionPath, props.Title));
        
    }*/

    return[
        <div className="cartcontainer">
            <h2 className="section-header">My Books</h2>
            <div className="cart-row">
                {
                checkout.map((book, index) => {
                    return (
                    <>
                        <div className="checkout-thumbnail">
                            <Book
                                key={book.id}
                                Title={book.Title}
                                Image={book.Image}
                                Description={book.Description}
                                Author={book.Author}
                                Genre={book.Genre} 
                            />
                            <button onClick={() => { 
                                const uid = getUID();
                                const collectionPath = "CheckoutLogs/" + uid + "/BookList";
                                deleteDoc(doc(db, collectionPath, book.Title));
                                //window.location.reload(); this reloads the page but with this here book doesnt get removed
                                }} className="return-Btn">Return</button>
                        </div>
                    </>
                    );
                })
                }
            </div>
        </div>
    ];
}

export default Checkout;
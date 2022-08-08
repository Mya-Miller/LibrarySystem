import { useEffect, useState } from "react";
import Book from "../components/Book";
import './checkout.css';
import {  collection,  getDocs, deleteDoc, doc } from 'firebase/firestore';
import {db} from '../FirebaseConfig';

function Checkout() {
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        getCheckout();  
    },[]);

    function getCheckoutBooks() {
        const uid = sessionStorage.getItem('userUID')
        const collectionPath = "CheckoutLogs/" + uid + "/BookList";
        const CheckoutCollectionRef = collection(db, collectionPath);
        
        return getDocs(CheckoutCollectionRef);
    }

    async function getCheckout() {
        const checkoutData = await getCheckoutBooks();
        setCheckout(checkoutData.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    function returnBook(bookTitle) {
        const uid = sessionStorage.getItem('userUID')
        const collectionPath = "CheckoutLogs/" + uid + "/BookList";
        deleteDoc(doc(db, collectionPath, bookTitle));
        window.location.reload(); //messes up the return. can only return after adding any book and cannot return otherwise. there is a error but i cant read it quick enough
    }

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
                            <button onClick={() => { returnBook(book.Title) }} className="return-Btn">Return</button>
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
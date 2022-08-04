import { useEffect, useState } from "react";
import Book from "../components/Book";
import CheckoutServices from "../services/Checkout.services";
import './checkout.css';

function Checkout() {
    const [checkout, setCheckout] = useState([]);

    useEffect(() => {
        getCheckout();  
    },[]);

    async function getCheckout() {
        const checkoutData = await CheckoutServices.getCartBooks();
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
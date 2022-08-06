import {useRef} from 'react';
import DefaultImage from '../../src/images/DefaultBook.jpg';
import React from 'react';
import Popup from 'reactjs-popup';
import './Book.css';
import {db} from '../FirebaseConfig';
import { setDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

function Book (props) {
    const IsAuth = sessionStorage.getItem('AuthToken');    
    
    const imgRef = useRef();
    
    function onImageError() {
        imgRef.current.src = DefaultImage;
    }
    
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

    function AddtoCart() {
        const uid = getUID();
        const collectionPath = "CheckoutLogs/" + uid + "/BookList";

        setDoc(doc(db, collectionPath, props.Title), {  
            Author: props.Author,
            Description: props.Description,
            Genre: props.Genre,
            Image: props.Image,
            Title: props.Title
        });

        
    }

    return (
        <div className="thumbnail">
            <Popup trigger={
                <button className='bookBtn'>
                    <img
                        ref={imgRef}
                        onError={onImageError}
                        src={`data:image/png;base64,${props.Image}`} 
                        alt={`book of ${props.Title}`}
                        style={{width: 140, height: "auto"}}
                    />
                    <p className='booktitle'>{props.Title}</p>
                </button> 
            } position="center center">
                <div id="bookPopup">
                        <div className='popupheader'>
                        <div className='bookinfo'>
                        <h1>{props.Title}</h1>
                        <h2>Author: {props.Author}</h2>
                        <h3>Genre: {props.Genre}</h3>
                        </div>
                        { (IsAuth === null) ? <></> : <button onClick={() => { AddtoCart() }} className='addtocart'>Checkout</button> }
                        </div>
                        <p>
                        {props.Description}<br></br>
                        {props.id}<br></br>
                        </p>
                </div>
            </Popup>
        </div>
    );
}

export default Book;
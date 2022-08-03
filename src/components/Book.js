import {useRef} from 'react';
import DefaultImage from '../../src/images/DefaultBook.jpg';
import React from 'react';
import Popup from 'reactjs-popup';
import './Book.css';
import {db} from '../FirebaseConfig';
import { 
    collection, 
    getDocs, 
    getDoc, 
    setDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore';

function Book (props) {
    const IsAuth = sessionStorage.getItem('AuthToken');

    const imgRef = useRef();
    
    function onImageError() {
        imgRef.current.src = DefaultImage;
    }
    
    function AddtoCart() {
        setDoc(doc(db, "Cart", props.Title), {
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
                        <h2>{props.Author}</h2>
                        <h3>{props.Genre}</h3>
                        </div>
                        { (IsAuth === null) ? <></> : <button onClick={() => { AddtoCart() }} className='addtocart'>Add to Cart</button> }
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
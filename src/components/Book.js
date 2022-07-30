import {useRef} from 'react';
import DefaultImage from '../../src/images/book-icon-sign-design-260nw-553945819.webp';
import React from 'react';
import Popup from 'reactjs-popup';
import './Book.css';

function Book (props) {
    const imgRef = useRef();
    
    function onImageError() {
        imgRef.current.src = DefaultImage;
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
                        <button className='addtocart'>Add to Cart</button>
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

// function Popup(props){
//     return( props.trigger) ? (
//         <div className='popup'> 
//         <div className='popup-inner'>
//             <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
//             {props.children}
//         </div>
//         </div>
//     ) : "";
// }

export default Book;

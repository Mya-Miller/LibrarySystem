import {useRef} from 'react';
import DefaultImage from '../../src/images/book-icon-sign-design-260nw-553945819.webp';
import React from 'react';
import {useState} from 'react'

function Book (props) {
    const imgRef = useRef();
    const [buttonPopup, setButtonPopup] = useState(false);
    
    function onImageError() {
        imgRef.current.src = DefaultImage;
    }

    return (
        <div className="thumbnail">
            <button onClick={() => setButtonPopup(true)}>
            <img
                ref={imgRef}
                onError={onImageError}
                src={`data:image/png;base64,${props.Image}`} 
                alt={`book of ${props.Title}`}
                style={{width: 140, height: "auto"}}
            />
            <p>{props.Title}</p>
            </button>
            <Popup tigger={buttonPopup} setTrigger ={setButtonPopup}>
            <p>
                {props.Title}
                {props.Description}
                {props.id}
                {props.Author}
                {props.Genre}
            </p>
            </Popup>
        </div>

    );
}

function Popup(props){
    return( props.trigger) ? (
        <div className='popup'> 
        <div className='popup-inner'>
            <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
        </div>
        </div>
    ) : "";
}

export default Book;

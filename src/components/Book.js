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
            <img
                ref={imgRef}
                onError={onImageError}
                src={`data:image/png;base64,${props.Image}`} 
                alt={`book of ${props.Title}`}
                style={{width: 140, height: "auto"}}
            />
            <Popup trigger={
                <button>
                    {props.Title}
                </button> 
            } position="right center">
                <p>
                    {props.Title}<br></br>
                    {props.Description}<br></br>
                    {props.id}<br></br>
                    {props.Author}<br></br>
                    {props.Genre}<br></br>
                </p>
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

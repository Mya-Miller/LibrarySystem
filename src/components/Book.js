import {useRef} from 'react';
import DefaultImage from '../../src/images/book-icon-sign-design-260nw-553945819.webp';

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
                src={props.Image} 
                alt={`book of ${props.Title}`}
                style={{width: 140, height: "auto"}}
            />
            <p>{props.Title}</p>
        </div>

    );
}

export default Book;
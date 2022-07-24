

function Book (props) {

    return (
        <div className="thumbnail">
            <img 
                src={props.Image} 
                alt={`book of ${props.Title}`}
                style={{width: 140, height: "auto"}}
            />
            <p>{props.Title}</p>
        </div>

    );
}

export default Book;
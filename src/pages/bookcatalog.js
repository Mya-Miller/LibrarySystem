import Book from "../components/Book";
import { db } from "../firebase";
import { collection } from "firebase/firestore"; 

function bookcatalog() {
  //const books = collection(db, "BookCatalog").get();
  let books = [];
  return (
    <div className="rowcontainer">
      {
        books.map((book) => {
          return(
            <Book 
              Author={book.Author}
              Description={book.Description}
              Title={book.Title}
              Image={book.Image}
              Genre={book.Genre}
              /> 
          );
        })
      } 
    </div> 
  );
}

export default bookcatalog;
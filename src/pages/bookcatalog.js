import { useEffect, useState } from "react";
import Book from "../components/Book";
import BookCrudServices from "../services/Book.crud.services";

function Bookcatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();  
  },[]);

  async function getBooks() {
    const booksData = await BookCrudServices.getAllBooks();
    setBooks(booksData.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  
  return (
    <>
      {
        books.map((book, index) => {
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
    </>
  )
}

export default Bookcatalog;
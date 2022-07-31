import { useEffect, useState } from "react";
import Book from "../components/Book";
import BookCrudServices from "../services/Book.crud.services";
import "./bookcatalog.css";

function Bookcatalog() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();  
  },[]);

  async function getBooks() {
    const booksData = await BookCrudServices.getAllBooks();
    setBooks(booksData.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }

  function sortAscending() {
    const ascending = [...books].sort((a,b) => {
      return a.Title > b.Title ? 1 : -1
    })
    setBooks(ascending)
  }

  function sortDescending() {
    const descending = [...books].sort((a,b) => {
      return a.Title < b.Title ? 1 : -1
    })
    setBooks(descending)
  }

  function sortAuthor() {
    const author = [...books].sort((a,b) => {
      return a.Author > b.Author ? 1 : -1
    })
    setBooks(author)
  }

  function sortGenre() {
    const author = [...books].sort((a,b) => {
      return a.Genre > b.Genre ? 1 : -1
    })
    setBooks(author)
  }
  
  return (
    <div className="catalog">
      <div className="sortbtncontainer">
      <div className="sortBtn"><button onClick={() => { sortAscending() }} className="Ascending">Ascending</button></div>
      <div className="sortBtn"><button onClick={() => { sortDescending() }} className="Descending">Descending</button></div>
      <div className="sortBtn"><button onClick={() => { sortAuthor() }} className="Author">Author</button></div>
      <div className="sortBtn"><button onClick={() => { sortGenre() }} className="Genre">Genre</button></div>
      </div>
      <div id="bookCatalogRow">
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
      </div>
    </div>
  )
}

export default Bookcatalog;
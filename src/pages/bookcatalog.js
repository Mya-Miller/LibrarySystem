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

  function sortISBN() {
    const isbn = [...books].sort((a,b) => {
      return a.id > b.id ? 1 : -1
    })
    setBooks(isbn)
  }
  
  return (
    <div className="catalog">
      <div className="sortbtncontainer">
      {/*<div className="dropdown">
      <button className="dropdownBtn">Sort</button>
      <div className="sortoptions">*/}
      <button onClick={() => { sortAscending() }} className="sortBtn Ascending">Ascending</button>
      <button onClick={() => { sortDescending() }} className="sortBtn Descending">Descending</button>
      <button onClick={() => { sortAuthor() }} className="sortBtn Author">Author</button>
      <button onClick={() => { sortGenre() }} className="sortBtn Genre">Genre</button>
      <button onClick={() => { sortISBN() }} className="sortBtn ISBN">ISBN</button>
      </div>
      {/*</div>
      </div>*/}
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
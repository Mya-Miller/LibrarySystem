import {db} from '../FirebaseConfig';
import { 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc 
} from 'firebase/firestore';

const BookCollectionRef = collection(db, "BookCatalog");
class BookDataService {
    addBook = (newBook) => {
        return addDoc(BookCollectionRef, newBook);
    }

    updateBook = (id, updatedBook) => {
        const bookDoc = doc(db, "BookCatalog", id);
        return updateDoc(bookDoc, updatedBook);
    }

    deleteBook = (id) => {
        const bookDoc = doc(db, "BookCatalog", id);
        return deleteDoc(bookDoc);
    }

    getAllBooks = () => {
        return getDocs(BookCollectionRef);
    }

    getBook = (id) => {
        const bookDoc = doc(db, "BookCatalog", id);
        return getDoc(bookDoc);
    }

}

export default new BookDataService();
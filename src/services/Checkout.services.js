import {db} from '../FirebaseConfig';
import { 
    collection, 
    getDocs, 
    setDoc  
} from 'firebase/firestore';

const uid = sessionStorage.getItem('userUID');
const bookCollectionPath = "CheckoutLogs/" + uid + "/BookList";
const bookListCollectionRef = collection(db, bookCollectionPath);
const CheckoutCollectionRef = collection(db, "CheckoutLogs");

class CheckoutDataService {
    addUserLog = (newUserLog) => { 
        return setDoc(CheckoutCollectionRef, newUserLog);
    }
    getCheckoutBooks = () => {
        return getDocs(bookListCollectionRef);
    }
}

export default new CheckoutDataService();

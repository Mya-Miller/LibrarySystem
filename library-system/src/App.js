import './App.css';
import {useState} from 'react';
import UNTLogo from '../src/images/UNTLogo.png';
import PrivateRoutes from '../src/components/PrivateRoutes';
import LoginPage from '../src/pages/login';
import BookcatalogPage from '../src/pages/bookcatalog';
import CheckoutPage from '../src/pages/checkout';
import NotFound404ErrorPage from '../src/pages/NotFound404ErrorPage';

import {
	BrowserRouter as Router,
	Route,
	Routes,
  NavLink
} from "react-router-dom";

function App() {
  const [IsAuth, SetIsAuth] = useState(false);


  return (
    <div className="App">
      <Router className="header">
        <div className="logo_btn">
          <div className="untlogo">
            <img
              src={UNTLogo}
              alt="UNT Logo"
              style={{"width": 100, "height": 100}}
            />
          </div>
          <h1>University of North Texas eLibrary</h1>
        </div>
        <nav className="navbar">
          <div className="logintoggle">
            {
              IsAuth ? 
              <div className="login">
                <a href="login.html" className="login">Login</a>
              </div>
              :
              <div className="logout">
                <input id="btnLogout" type="button" value="Logout" />
              </div>
            }
          </div>
            <NavLink to="/bookcatalog">View eBook Catalog</NavLink>
            <NavLink to="/checkout">Checkout</NavLink>
            <div>
              <button className="btn">Dark Mode</button>
            </div>
        </nav>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/bookcatalog" element={<BookcatalogPage />} />
            <Route element={<PrivateRoutes />} >
              <Route path="/checkout" element={<CheckoutPage />} />
            </Route>
            <Route path='*' element={<NotFound404ErrorPage />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;

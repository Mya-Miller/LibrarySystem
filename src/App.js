import './App.css';
import UNTLogo from '../src/images/UNTLogo.png';
import PrivateRoutes from '../src/components/PrivateRoutes';
import LoginPage from '../src/pages/login';
import BookcatalogPage from '../src/pages/bookcatalog';
import CheckoutPage from '../src/pages/checkout';
import NotFound404ErrorPage from '../src/pages/NotFound404ErrorPage';
import { app } from './firebase';

import {
	BrowserRouter as Router,
	Route,
	Routes,
  NavLink,
} from "react-router-dom";

function App() {

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
              app.IsAuth ? 
              <div className="login">
                <NavLink to="/login" className="login">Login</NavLink>
              </div>
              :
              <div className="logout">
                <input id="btnLogout" type="button" value="Logout" />
              </div>
            }
          </div>
            <NavLink to="/bookcatalog">View eBook Catalog</NavLink>
            { app.IsAuth ? <NavLink to="/checkout">Checkout</NavLink> : <></> }
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

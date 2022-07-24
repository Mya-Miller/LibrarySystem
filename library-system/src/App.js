import './App.css';
import {useState} from 'react';
import UNTLogo from '../src/images/UNTLogo.png';

function App() {
  const [IsAuth, SetIsAuth] = useState(false);


  return (
    <div className="App">
      <div class="header">
        <div class="logo_btn">
          <div class="untlogo">
            <img
              src={UNTLogo}
              alt="UNT Logo"
              style={{"width": 100, "height": 100}}
            />
          </div>
          <h1>University of North Texas eLibrary</h1>
        </div>
      </div>
      <div class="navbar">
        <div class="logintoggle">
          {
            IsAuth ? 
            <div class="login">
              <a href="login.html" class="login">Login</a>
            </div>
            :
            <div class="logout">
              <input id="btnLogout" type="button" value="Logout" />
            </div>
          }
        </div>
        <a href="index.html">View eBook Catalog</a>
        <a href="reservestudyroom.html">Reserve Study Room</a>
        <a href="checkout.html">Checkout</a>
        <div>
          <button class="btn">Dark Mode</button>
        </div>
      </div>
    </div>
  );
}

export default App;

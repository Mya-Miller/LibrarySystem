import './login.css';

function login (){
    return (
        <div className="loginbody">
      <div className="logincontainer">
        <div className="forms">
          <div className="form login">
            <span className="title">Login</span>

            <form action="#">
              <div className="input-field">
                <input
                  id="txtLoginEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope"></i>
              </div>

              <div className="input-field">
                <input
                  id="txtLoginPassword"
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  required
                />
                <i className="uil uil-lock"></i>
              </div>

              <div className="input-field button">
                <input id="btnLogin" type="button" value="Login" />
              </div>
            </form>

            <div className="login-register">
              <span className="text"
                >Don't have an account?
                <a href="#" className="text register-link">Register now</a>
              </span>
            </div>
          </div>

          <div className="form registration">
            <span className="title">Registration</span>

            <form action="#">
              <div className="input-field">
                <input id="txtName" type="text" placeholder="Enter your name" required />
                <i className="uil uil-user"></i>
              </div>

              <div className="input-field">
                <input
                  id="txtRegisterEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <i className="uil uil-envelope"></i>
              </div>

              <div className="input-field">
                <input
                  id="txtRegisterPassword"
                  type="password"
                  className="password"
                  placeholder="Create your password"
                  required
                />
                <i className="uil uil-lock"></i>
              </div>
              <div className="input-field button">
                <input id="btnRegister" type="button" value="Register" />
              </div>
            </form>

            <div className="login-register">
              <span className="text"
                >Already have an account?
                <a href="#" className="text login-link">Login now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

}

export default login;
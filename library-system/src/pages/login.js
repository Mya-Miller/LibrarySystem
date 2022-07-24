import 'login.css';

function login (){
    return (
        <div class="loginbody">
      <div class="logincontainer">
        <div class="forms">
          <div class="form login">
            <span class="title">Login</span>

            <form action="#">
              <div class="input-field">
                <input
                  id="txtLoginEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <i class="uil uil-envelope"></i>
              </div>

              <div class="input-field">
                <input
                  id="txtLoginPassword"
                  type="password"
                  class="password"
                  placeholder="Enter your password"
                  required
                />
                <i class="uil uil-lock"></i>
              </div>

              <div class="input-field button">
                <input id="btnLogin" type="button" value="Login" />
              </div>
            </form>

            <div class="login-register">
              <span class="text"
                >Don't have an account?
                <a href="#" class="text register-link">Register now</a>
              </span>
            </div>
          </div>

          <div class="form registration">
            <span class="title">Registration</span>

            <form action="#">
              <div class="input-field">
                <input id="txtName" type="text" placeholder="Enter your name" required />
                <i class="uil uil-user"></i>
              </div>

              <div class="input-field">
                <input
                  id="txtRegisterEmail"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <i class="uil uil-envelope"></i>
              </div>

              <div class="input-field">
                <input
                  id="txtRegisterPassword"
                  type="password"
                  class="password"
                  placeholder="Create your password"
                  required
                />
                <i class="uil uil-lock"></i>
              </div>
              <div class="input-field button">
                <input id="btnRegister" type="button" value="Register" />
              </div>
            </form>

            <div class="login-register">
              <span class="text"
                >Already have an account?
                <a href="#" class="text login-link">Login now</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    );

}

export default login;
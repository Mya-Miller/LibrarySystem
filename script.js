'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme"){
        //switcher.classList.toggle ("uil uil-sun", "uil uil-moon");
        this.textContent = "Dark Mode";
    }
    else {
        //switcher.classList.toggle ("uil uil-moon", "uil uil-sun");
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});


const loginContainer = document.querySelector(".logincontainer");
const register = document.querySelector(".register-link");
const login = document.querySelector(".login-link");

register.addEventListener("click", ( )=>{
  loginContainer.classList.add("active");
});
login.addEventListener("click", ( )=>{
  loginContainer.classList.remove("active");
});

use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const className = document.body.className;
    if (className == "light-theme"){
        //switcher.classList.toggle ("uil uil-sun", "uil uil-moon");
        this.textContent = "Dark Mode";
    }
    else {
        //switcher.classList.toggle ("uil uil-moon", "uil uil-sun");
        this.textContent = "Light Mode";
    }

    console.log('current class name: ' + className);
});


let NodeList = document.querySelectorAll('.thumbnail')
tinysort(NodeList, {attr: 'title'});

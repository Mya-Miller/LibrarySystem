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

//remove button
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
  for (var i = 0; i < removeCartItemButtons.length; i++) {
      var button = removeCartItemButtons[i];
      button.addEventListener('click', removeCartItem);
  }

function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
}

//add button
var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }

function addToCartClicked(event) {
  var button = event.target
  var shopItem = button.parentElement.parentElement
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
  var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
  addItemToCart(title, imageSrc)
}

//adding item to cart
function addItemToCart(title, imageSrc){
  var cartRow = document.createElement('div');
  cartRow.classList.add('cart-row');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
        alert('This item is already added to the cart');
        return;
    }
  }  
  var cartRowContents = `
      <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
      </div>
      <div class="cart-quantity cart-column">
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>`;
  cartRow.innerHTML = cartRowContents;
  cartItems.append('cartRow');
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
}

//checkout button
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);

function purchaseClicked() {
  alert('Check your email to view the books you rented');
  var cartItems = document.getElementsByClassName('cart-items')[0];
  while (cartItems.hasChildNodes()) {
      cartItems.removeChild(cartItems.firstChild);
  }
}

/*
function toggleSort() {
	var btn = document.querySelector('#toggle');
	if(btn.classList.toggle('desc')) {
  	tinysort('div#rowcontainer>img',{order:'desc',attr:'title'});
    btn.innerHTML = 'Ascending';
  } else {
  	tinysort('div#rowcontainer>img',{order:'asc',attr:'title'});
    btn.innerHTML = 'Descending';
  }
}
*/

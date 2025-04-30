import { updateCart } from "../data/cart.js"

function renderPage(){
    document.querySelector('.cart-p1').textContent = updateCart()
}

renderPage()
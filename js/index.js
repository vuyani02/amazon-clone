import { items } from "../data/products.js"
import { cart, addIterm }  from "../data/cart.js"
import { moneyConveter } from "./utils/money.js"

let itemsStr = ''

items.forEach((item) => {
    itemsStr += `<div class="item-container">
                
                <div class="img-container">
                <img src="${item.image}" alt="${item.name}" class="item-img">
                </div>

                <p class="item-name">${item.name}</p>

                <div class="rating-info">
                <img src="images/ratings/rating-${item.rating.stars*10}.png" alt="rating" class="rating">
                <span class="count">${item.rating.count}</span>
                </div>

                <p class="price">$${moneyConveter(item.priceCents)}</p>

                <select class="quantity quantity-${item.id}">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select>

                <div class="added-to-cart added-to-cart-${item.id}"><img src="images/icons/checkmark.png" alt="checkmark">Added</div>
                
                <button class="add-to-cart-btn"  data-item-id='${item.id}'>Add to Cart</button>
            </div>`
})

document.querySelector('.items-container').innerHTML = itemsStr

document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
    addIterm(button)
    updateCart()
})
})

function updateCart(){
    let cartTotal = 0
    cart.forEach((item) => {
        cartTotal += item.quantity
    })
    document.querySelector('.cart-p1').textContent = cartTotal
}
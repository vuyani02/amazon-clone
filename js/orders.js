import { updateCart, cart } from "../data/cart.js"
import { orders, updateOrders } from "../data/ordersdata.js"
import { getItem } from "../data/products.js"
import { moneyConveter } from "./utils/money.js"

updateOrders()
console.log(localStorage.getItem('readCart'))

document.querySelector('.cart-p1').textContent = updateCart()

let html =``
let html2 =``
let item
orders.forEach((order) => {
        order.items.forEach((itemOrder) => {
            item = getItem(itemOrder.id)
            html2 += `
            <div class="item">
            
            <div class="item-details">    
            <img src="${item.image}" alt="socks">
            <div class="details">
                <p class="name">${item.name}</p>
                <p>Arriving on: ${itemOrder.arrivalDate}</p>
                <p class="quantity-order">Quantity: ${itemOrder.quantity}</p>
                <button class="buy-again">
                <img src="images/icons/buy-again.png" alt="buy again">Buy it again
                </button>
            </div>
            </div>
            
            <a href="track.html">
            <button class="track">Track package</button>
            </a>
            </div>
        `
        })

        html += `<div class="order-header">
            <div class="date-price">
            <div class="date-order">
                <p>Order Placed:</p>
                <time datetime="08-12">${order.datePlaced}</time>
            </div>
            <div class="total">
                <p>Total:</p>
                <p>$${moneyConveter(order.totalCost)}</p>
            </div>
            </div>

            <div class="order-id">
                <p>Order ID:</p>
                <p>${order.id}</p>
            </div>
        </div>
        <div class="order-grid">
            ${html2}
        </div>`
        html2 = ``
})

document.querySelector('.order').innerHTML += html
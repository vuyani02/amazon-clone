import {cart, removeCartItem, updateCart, updateQuantity} from "../data/cart.js"
import {items} from "../data/products.js"
import { moneyConveter } from "./utils/money.js";

let cartItemsHTML = ""
document.querySelector('.items-count').textContent = updateCart()

cart.forEach(cartItem => {
        
        let currentItem
        items.forEach((item) => {
            if(item.id === cartItem.id){
                currentItem = item
            }
        })


        cartItemsHTML += `
        <div class="item item-${currentItem.id}">
            <p class="delivary-date">
                <datetime="2025-06-21" >Delivery date: Tuesday, June 21</datetime>
            </p>
            <div class="item-grid">
            
                <img src="${currentItem.image}" alt="${currentItem.name}">

                <div class="item-details">
                    <p class="name">${currentItem.name}</p>
                    <p class="price">$${moneyConveter(currentItem.priceCents)}</p>
                    <Span>Quantity: <span class="value-${currentItem.id}">${cartItem.quantity}</Span></Span>
                    <span class="update-dele update update-${currentItem.id}" data-item-id=${currentItem.id}>Update</span>
                    <input type="text" class="update-input update-input-${currentItem.id}" value=${cartItem.quantity}>
                    <span class="update-dele save-update save-update-${currentItem.id}" data-item-id=${currentItem.id}>Save</span>
                    <span class="update-dele delete" data-item-id=${currentItem.id}>Delete</span>
                </div>

                <div class="delivary-option">
                    <p class="delivary-option-header">Choose a delivery option:</p>
                    
                    <div class="radio">
                    <input type="radio" name="delivary-option-${currentItem.id}" id="" checked>
                    <div>
                    <p class="radio-p1">Tuesday, June 21</p> <p class="radio-p2">FREE Shipping</p>
                    </div>
                    </div>
                    <br>
                    <div class="radio">
                    <input type="radio" name="delivary-option-${currentItem.id}" id="">
                    <div>
                    <p class="radio-p1">Wednesday, June 15</p>
                    <p class="radio-p2">$4.99 - Shipping</p>
                </div>
                </div>
                    <br>
                    <div class="radio">
                    <input type="radio" name="delivary-option-${currentItem.id}" id="">
                    <div>
                    <p class="radio-p1">Monday, June 13</p>
                    <p class="radio-p2">$9.99 - Shipping</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>`
    });
    
document.querySelector('.items').innerHTML = cartItemsHTML

document.querySelectorAll('.delete').forEach((deleteBtn) => {
    deleteBtn.addEventListener('click', () => {
        const itemId = deleteBtn.dataset.itemId
        removeCartItem(itemId)
        document.querySelector(`.item-${itemId}`).remove()
        document.querySelector('.items-count').textContent = updateCart()
    })
})

document.querySelectorAll('.update').forEach((updateBtn) => {
    updateBtn.addEventListener('click', () => {
        const itemId = updateBtn.dataset.itemId
        document.querySelector(`.update-input-${itemId}`).classList.add('show-input-save')
        document.querySelector(`.save-update-${itemId}`).classList.add('show-input-save')
        document.querySelector(`.update-${itemId}`).classList.add('hide-update')
        document.querySelector(`.value-${itemId}`).classList.add('hide-update')
    })
})

document.querySelectorAll('.save-update').forEach((saveBtn) => {
    saveBtn.addEventListener('click', () => {
        const itemId = saveBtn.dataset.itemId
        const inputEl = document.querySelector(`.update-input-${itemId}`)

        if(inputEl.value){
            document.querySelector(`.value-${itemId}`).textContent = inputEl.value
            updateQuantity(itemId, Number(inputEl.value))
            document.querySelector('.items-count').textContent = updateCart()
        }

        inputEl.classList.remove('show-input-save')
        document.querySelector(`.save-update-${itemId}`).classList.remove('show-input-save')
        document.querySelector(`.update-${itemId}`).classList.remove('hide-update')
        document.querySelector(`.value-${itemId}`).classList.remove('hide-update')
    })
})
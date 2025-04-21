let itemsStr = ''

const cart = []

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

                <p class="price">$${(item.priceCents/100).toFixed(2)}</p>

                <select class="quantity">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                </select>
                <button class="add-to-cart-btn"  data-item-id='${item.id}'>Add to Cart</button>
            </div>`
})

document.querySelector('.items-container').innerHTML = itemsStr

let cartFlag
document.querySelectorAll('.add-to-cart-btn').forEach((button) => {
    button.addEventListener('click', () => {
    
    cart.forEach((item) => {
        if(item.id === button.dataset.itemId){
            item.quantity++
            cartFlag = 1
        }
    })
    
    if(!cartFlag){
    cart.push({
        id: button.dataset.itemId,
        quantity: 1
    })
    }

    cartFlag = 0
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
export const cart = []

let cartFlag
let classIdEl
let setTimeoutId = 1

export function addIterm(button){
    clearTimeout(setTimeoutId)
    classIdEl = document.querySelector(`.quantity-${button.dataset.itemId}`)    
    cart.forEach((item) => {
        if(item.id === button.dataset.itemId){
            item.quantity += Number(classIdEl.value)
            cartFlag = 1
            document.querySelector(`.added-to-cart-${button.dataset.itemId}`).classList.add('added-to-cart-visible')
            setTimeoutId = setTimeout(() => {
                document.querySelector(`.added-to-cart-${button.dataset.itemId}`).classList.remove('added-to-cart-visible')
            }, 2000)
        }
    })
    
    if(!cartFlag){
    cart.push({
        id: button.dataset.itemId,
        quantity: Number(classIdEl.value)
    })

    document.querySelector(`.added-to-cart-${button.dataset.itemId}`).classList.add('added-to-cart-visible')
    setTimeoutId = setTimeout(() => {
            document.querySelector(`.added-to-cart-${button.dataset.itemId}`).classList.remove('added-to-cart-visible')
        }, 2000)
    }

    cartFlag = 0
}
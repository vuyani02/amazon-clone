export const cart = [
    {
    id: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 1 
},
    {
    id: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 2
},
    {
    id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 5
}
]

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
import { cart } from "./cart.js"
import { getItem } from "./products.js"
import { calculateDelivaryDate, getDelivaryOption } from "./delivary-options.js"

export const orders = JSON.parse(localStorage.getItem('orders')) || []
const idChecker = localStorage.getItem('Idcount') || 0

if(!idChecker){
    localStorage.setItem('Idcount', '0')

}
const templateId = '27cba69d-4c3d-4098-b42d-ac7fa62b766'
export function updateOrders(){
    const id = idGenerator()
    const datePlaced = dayjs().format('MMMM, D')
    let totalCost = 0
    let items = []
    let delivaryOption
    let arrivalDate
    cart.forEach(element => {
            totalCost += element.quantity * getItem(element.id).priceCents
            delivaryOption = getDelivaryOption(element.delivaryOptionId)
            arrivalDate = calculateDelivaryDate(delivaryOption).format('MMMM, D')
            items.push({
                id: element.id,
                arrivalDate,
                quantity: element.quantity
            })
        });
    orders.push({
        id,
        totalCost,
        datePlaced,
        items
    })  
    saveOrdersToStorage()

}

function saveOrdersToStorage(){
    localStorage.setItem('orders', JSON.stringify(orders))
}

function idGenerator(){
    let idCount = Number(localStorage.getItem('Idcount'))
    const id = templateId + idCount
    localStorage.setItem('Idcount', ++idCount)

    return id
}



// [{
//     id: '27cba69d-4c3d-4098-b42d-ac7fa62b7663',
//     totalCost: 35.06,
//     datePlaced: 'August 13',
//     items: [
//         {
//             id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//             arrivalDate: 'August 15', 
//             quantity: 1
//         },
//         {
//             id: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
//             arrivalDate: 'August 16', 
//             quantity: 2
//         }
//     ]
// },

// {
//     id: '27cba69d-4c3d-4098-b42d-ac7fa62b7665',
//     totalCost: 25.06,
//     datePlaced: 'August 14',
//     items: [
//         {
//             id: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
//             arrivalDate: 'August 15', 
//             quantity: 1
//         }
//     ]
// }
// ]
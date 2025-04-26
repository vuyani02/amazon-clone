import { cart } from "../../data/cart.js";
import { getItem } from "../../data/products.js";

export function renderpayment(){
    let totalCost = 0
    cart.forEach(element => {
        totalCost += element.quantity * getItem(element.id).priceCents
    });
    console.log(totalCost)
}
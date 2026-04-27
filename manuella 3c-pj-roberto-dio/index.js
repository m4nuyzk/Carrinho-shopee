import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to the your Shopee Cart!");


const item1 = await createItem("Pelúcia Stitch 70cm ", 380.00, 1);
const item2 = await createItem("Bowl Lamen Coreano Hot Chicken Samyang Buldak Carbonara", 33.90, 3);


await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);
await cartService.removeItem(myCart, item2);

await cartService.displaycart(myCart);

await cartService.calculateTotal(myCart);

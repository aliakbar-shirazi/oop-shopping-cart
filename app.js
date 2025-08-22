import { fetchData } from "./utils/httpreq.js";
import Products from "./models/products.js";
import Cart from "./models/cart.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document.querySelector("#total-price span");

async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );
  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);

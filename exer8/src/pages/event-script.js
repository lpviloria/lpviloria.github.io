// const checkoutButton = document.getElementsByClassName("add-to-cart")

// const checkout = () => {
//     const item = document.getElementsByClassName("apps-flex-item").namedItem
//     console.log("added to cart!")
// }

// checkoutButton.addEventListener("click", checkout)

let cart = [];

export function addToCart(item) {
    cart.push(item);
    console.log( '${item} added to cart!' );
}  
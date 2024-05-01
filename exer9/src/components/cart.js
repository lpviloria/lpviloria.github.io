import React from "react";
import './styles.css'
import xButton from '../images/x-button.png'; // Import the image path from local directory

export function CartAdder({cart, setCart}) {

    const removeFromCart = (itemToRemove) => { // Function to remove items from the cart
        const newCart = {...cart}; // Create new copy of cart
        if(newCart[itemToRemove] == 1){ // If the quantity of the item being removed is one, delete the item from the object so that it disappears from the website
            delete newCart[itemToRemove];
        }
        else{ // Otherwise, decrease the quantity by one instead
            newCart[itemToRemove]--;
        }
        setCart(newCart); // Update the cart with the new copy
    }

    return (
        <div>
            <h1>Shopping Cart (Total: {Object.keys(cart).length}) </h1>
            <div>
                {Object.keys(cart).length > 0 && Object.entries(cart).map(([item, quantity]) => ( // Check if the cart is empty, if not, display the items in the cart
                    <div className = "flex-container" key={item}>
                        <p>{item}: QTY: {quantity}</p>
                        <button className = "remove-from-cart" onClick = {() => removeFromCart(item)}>
                            <img src = {xButton}></img>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
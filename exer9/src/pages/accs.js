import React from "react";
import "./styles.css"

function Accs({cart, setCart}){

    function handleAddToCart(item) { // Function to add items to the cart
        setCart(prevCart => {
            return {...prevCart, [item]: (prevCart[item] || 0) + 1}; // Access the previous cart and add the item to the cart object with the item name being the key and the quantity being the value. Also increment the quantity by one.
        });
    }

    return (
        <div className = "apps-flex">
            <div className = "apps-flex">
                <div className = "apps-flex-item">
                    <img src = "https://img.lazcdn.com/g/p/33b27cdda840635fd9273f97b34fbdc3.png_720x720q80.png"></img>
                    <h2>Flower Pearl Brooch</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Flower Pearl Brooch")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://img.lazcdn.com/g/p/26c29398644ebbefb1a5ad4dfd01134d.jpg_720x720q80.jpg"></img>
                    <h2>10K Gold Bracelet</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("10K Gold Bracelet")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://img.lazcdn.com/g/ff/kf/S384a987858484625ab06d8340f9ad9701.jpg_720x720q80.jpg"></img>
                    <h2>24K Saudi Gold Necklace</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("24K Saudi Gold Necklace")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://img.lazcdn.com/g/ff/kf/S6d37e621d56a4f6cb153de6eaeea1fccf.jpg_720x720q80.jpg"></img>
                    <h2>Korean Pearl Crystal Earrings</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Korean Pearl Crystal Earrings")}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Accs;
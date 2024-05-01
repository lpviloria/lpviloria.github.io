import React from "react";
import "./styles.css"

function Apps({cart, setCart}){

    function handleAddToCart(item) { // Function to add items to the cart
        setCart(prevCart => {
            return {...prevCart, [item]: (prevCart[item] || 0) + 1}; // Access the previous cart and add the item to the cart object with the item name being the key and the quantity being the value. Also increment the quantity by one.
        });
    }


    return (
        <div className="apps-flex">
            <div className="apps-flex-item">
                <img src="https://images.samsung.com/is/image/samsung/ph-ref-rs5000-familyhub-rs64t5f01b4-tc-frontblack-244067168?$650_519_PNG$"></img>
                <h2>Samsung Refrigerator</h2>
                <button className="add-to-cart" onClick={ () => handleAddToCart("Samsung Refrigerator")}>Add to cart</button>
            </div>
            <div className="apps-flex-item">
                <img src="https://images.samsung.com/is/image/samsung/ph-twin-wt85h3210mg-wt85h3210mg-tc-001-front-white?$650_519_PNG$"></img>
                <h2>Samsung Washing Machine</h2>
                <button className="add-to-cart" onClick={ () => handleAddToCart("Samsung Washing Machine")}>Add to cart</button>
            </div>
            <div className="apps-flex-item">
                <img src="https://img.lazcdn.com/g/p/1952bea63892b2a8fb77282c714824ef.jpg_720x720q80.jpg"></img>
                <h2>Electric Fan</h2>
                <button className="add-to-cart" onClick={ () => handleAddToCart("Electric Fan")}>Add to cart</button>
            </div>
            <div className="apps-flex-item">
                <img src="https://www.lg.com/global/lg-signature/resource/images/products/oven/lg-signature-product-oven-kv-m.jpg"></img>
                <h2>LG SIGNATURE Oven Range</h2>
                <button className="add-to-cart" onClick={ () => handleAddToCart("LG SIGNATURE Oven Range")}>Add to cart</button>
            </div>
        </div>
    )
}

export default Apps;
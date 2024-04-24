import React from "react";
import "./styles.css"
import { addToCart } from "./event-script";

function apps(){
    return (
        <div className = "apps-flex">
            <div className = "apps-flex">
                <div className = "apps-flex-item" name = "Samsung Refrigerator">
                    <img src = "https://images.samsung.com/is/image/samsung/ph-ref-rs5000-familyhub-rs64t5f01b4-tc-frontblack-244067168?$650_519_PNG$"></img>
                    <h2>Refrigerator</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
                <div className = "apps-flex-item" name = "Samsung Washing Machine">
                    <img src = "https://images.samsung.com/is/image/samsung/ph-twin-wt85h3210mg-wt85h3210mg-tc-001-front-white?$650_519_PNG$"></img>
                    <h2>Washing Machine</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
                <div className = "apps-flex-item" name = "Electric Fan">
                    <img src = "https://img.lazcdn.com/g/p/1952bea63892b2a8fb77282c714824ef.jpg_720x720q80.jpg"></img>
                    <h2>Electric Fan</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

const cartButton = document.getElementsByClassName("add-to-cart");
const itemList = document.getElementsByClassName("apps-flex-item"); 

for (var i = 0 ; i < cartButton.length; i++) {
    cartButton[i].addEventListener('click' , addToCart(itemList[i].name)) ; 
 }
 

export default apps;
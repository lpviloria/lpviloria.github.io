import React from "react";
import "./styles.css"
import { addToCart } from "./event-script";

function accs(){

    const handleAddToCart = (itemName) => {
        addToCart(itemName);
    };

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
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Samsung 10K Gold Bracelet")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://img.lazcdn.com/g/ff/kf/S384a987858484625ab06d8340f9ad9701.jpg_720x720q80.jpg"></img>
                    <h2>24K Saudi Gold Necklace</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("24K Saudi Gold Necklace")}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default accs;
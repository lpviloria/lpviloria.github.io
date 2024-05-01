import React from "react";
import "./styles.css"

function Gadgets({cart, setCart}){
    
    function handleAddToCart(item) { // Function to add items to the cart
        setCart(prevCart => {
            return {...prevCart, [item]: (prevCart[item] || 0) + 1}; // Access the previous cart and add the item to the cart object with the item name being the key and the quantity being the value. Also increment the quantity by one.
        });
    }

    return (
        <div className = "apps-flex">
            <div className = "apps-flex">
                <div className = "apps-flex-item">
                    <img src = "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310.jpg?v=1695861436"></img>
                    <h2>Apple iPhone 15 Pro Max</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Apple iPhone 15 Pro Max")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-sm-s928bztqphl-thumb-539303751"></img>
                    <h2>Samsung Galaxy S24 Ultra</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Samsung Galaxy S24 Ultra")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000"></img>
                    <h2>Apple AirTags</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("Apple AirTags")}>Add to cart</button>
                </div>
                <div className = "apps-flex-item">
                    <img src = "https://img01.huaweifile.com/eu/uk/huawei/pms/uomcdn/GBHW/pms/202305/gbom/6941487291038/428_428_740E88D96C8ADB4124ECE09D717CCE09mp.png"></img>
                    <h2>HUAWEI P60 Pro with XMAGE Camera</h2>
                    <button className = "add-to-cart" onClick={() => handleAddToCart("HUAWEI P60 Pro with XMAGE Camera")}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Gadgets;
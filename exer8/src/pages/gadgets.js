import React from "react";
import "./styles.css"

function gadgets(){

    return (
        <div className = "apps-flex">
            <div className = "apps-flex">
                <div className = "apps-flex-item" name = "Apple iPhone 15 Pro Max">
                    <img src = "https://powermaccenter.com/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-US_3295c924-7c21-417d-870c-32bee7f1e310.jpg?v=1695861436"></img>
                    <h2>Apple iPhone 15 Pro Max</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
                <div className = "apps-flex-item" name = "Samsung Galaxy S24 Ultra">
                    <img src = "https://images.samsung.com/is/image/samsung/p6pim/ph/2401/gallery/ph-galaxy-s24-s928-sm-s928bztqphl-thumb-539303751"></img>
                    <h2>Samsung Galaxy S24 Ultra</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
                <div className = "apps-flex-item" name = "Apple AirTags">
                    <img src = "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000"></img>
                    <h2>Apple AirTags</h2>
                    <button className = "add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default gadgets;
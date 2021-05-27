import React from "react";

function ItemTotal(props) {
    return (
        <div className="item-total">
            <p>Item Total</p>
            <p><b>${props.total}.00</b></p>
        </div>
    );
}

export default ItemTotal;
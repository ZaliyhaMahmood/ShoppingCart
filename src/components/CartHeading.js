import React from "react";

function CartHeading(props) {
    return (
        <div className="cartbar">
            <h2>Cart</h2>
            <div className="circle">{props.count}</div>
        </div>
    );
}

export default CartHeading;
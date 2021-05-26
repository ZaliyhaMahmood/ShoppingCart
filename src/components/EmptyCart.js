import React from "react";

function EmptyCart() {
  return (
    <div className="empty-cart">
      <img
        className="emptyIcon"
        src="https://img.icons8.com/cute-clipart/64/4a90e2/meal.png"
      />
      <p>
        <b>Your cart is empty</b>
      </p>
      <p>Please add some items from the menu</p>
    </div>
  );
}

export default EmptyCart;

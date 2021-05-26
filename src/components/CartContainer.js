import React, { useState } from "react";
import CartButtons from "./CartButtons";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import EmptyCart from "./EmptyCart";
import ItemTotal from "./ItemTotal";
import FoodItem from "./FoodItem";

function CartContainer(props) {

  return (
    <div className="cartContent" >
      {items.map((cartItem) => (
        <div className="cart-items">
          <CartItem
            key={cartItem.key}
            img={cartItem.img}
            name={cartItem.name}
            price={cartItem.price}
          />
        </div>
      ))}

      <ItemTotal />
      <CheckoutButton  />
      <CartButtons />
    </div>
  );
}

export default CartContainer;

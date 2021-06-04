import React, { useState } from "react";

function CartItem(props) {
  
  function handleClick() {
    props.onDelete(props);
    //alert(props.id)
  }

  return (
    <div class="wrapper">
      <div class="box1">
        <img className="cart-img" src={props.img} alt="food" />
      </div>
      <div class="box2">
        <div className="title">
          <div className="icon">
            <i class="far fa-dot-circle "></i>
          </div>
          <p>{props.name}</p>
        </div>
        <div className="change-box">
          <div className="sign-box">-</div>
          <div className="quantity-box">1</div>
          <div className="sign-box">+</div>
        </div>
      </div>
      <div class="box3">
        <p className="cart-price">${props.price}.00</p>
        <button onClick={handleClick} type="button" class="checkout-button">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default CartItem;

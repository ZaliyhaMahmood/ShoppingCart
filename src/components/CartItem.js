import React from "react";

function CartItem(props) {

  return (
    <div class="wrapper">
      <div class="box1">
        <img
          className="cart-img"
          src={props.img}
          alt="food"
        />
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
      <div class="box3">{props.price}</div>
    </div>
  );
}

export default CartItem;

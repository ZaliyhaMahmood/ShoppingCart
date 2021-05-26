import React from "react";

function CartButtons() {
  return (
    <div className="button-box ">
      <div className="cart-button1">
      <button type="button" class="btn-lg hold-button">Hold</button>
      </div>
      <div className="cart-button2">
      <button type="button" class="btn-lg cancel-button"> Cancel</button>
      </div>
      
    </div>
  );
}

export default CartButtons;

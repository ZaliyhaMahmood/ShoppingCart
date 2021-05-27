import React, { useState } from "react";

function FoodItem(props) {
  const [isClicked, setClicked] = useState(false);
  const [item, setItem] = useState({
    img: props.img,
    name: props.name,
    price: props.price,
  });

  function submitItem() {
    props.onAdd(item);

    setClicked(true);
    setItem({
      img: props.img,
      name: props.name,
      price: props.price,
    });

    // event.preventDefault();
  }

  return (
    <div onClick={submitItem}>
      <div className="img-container">
        <img
          className="img"
          src={props.img}
          alt="food"
          style={{ filter: isClicked ? "brightness(50%)" : "brightness(100%)" }}
        />
        <i
          class="fas fa-check-circle fa-2x img-icon"
          style={{ visibility: isClicked ? "visible" : "hidden" }}
        ></i>
      </div>

      <div className="title">
        <div className="icon">
          <i class="far fa-dot-circle "></i>
        </div>
        <p>{props.name}</p>
      </div>

      <p>
        <b>${props.price}.00</b>
      </p>
    </div>
  );
}

export default FoodItem;

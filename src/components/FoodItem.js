import React, { useState } from "react";

function FoodItem(props) {
  const [item, setItem] = useState({
    img: props.img,
    name: props.name,
    price: props.price,
    id: props.id,
  });

  function submitItem() {
    props.onAdd(item);
    setItem({
      img: props.img,
      name: props.name,
      price: props.price,
      id: props.id,
      clicked: props.clicked,
    });
  }

  return (
    <div onClick={submitItem}>
      <div className="img-container">
        <img className="img" src={props.img} alt="food" />
        <i class="fas fa-check-circle fa-2x img-icon"></i>
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

import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import CartHeading from "./CartHeading";
import food from "../food";
import FoodItem from "./FoodItem";
import CartButtons from "./CartButtons";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import EmptyCart from "./EmptyCart";
import ItemTotal from "./ItemTotal";

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-8">
          <Navbar />
          <Sidebar />
          <div className="container">
            <div className="main row">
              {food.map((foodItem) => (
                <div className="col-lg-4 col-md-6">
                  <FoodItem
                    key={foodItem.id}
                    img={foodItem.img}
                    name={foodItem.name}
                    price={foodItem.price}
                    onAdd={addItem}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <CartHeading />
          <div className="cartContent">
            <div className="cart-items">
              {items.map((cartItem, index) => (
                <CartItem
                  key={cartItem.id}
                  id={index}
                  img={cartItem.img}
                  name={cartItem.name}
                  price={cartItem.price}
                />
              ))}
            </div>

            <ItemTotal />
            <CheckoutButton />
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

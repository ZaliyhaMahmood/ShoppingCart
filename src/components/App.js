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
  const [total, setTotal] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const updateInput = (searchTerm) => {
    const filtered = items.filter(item => {
     return item.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setSearchTerm(searchTerm);
    setSearchResults(filtered);
 }

  function handleChange(event) {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    setSearchResults((prevItems) => {
      return prevItems.filter((item) => item.includes(searchTerm));
    });
  }

  function addItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setTotal((current) => current + newItem.price);
  }

  function deleteItem(newItem) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== newItem;
      });
    });
    setTotal((current) => current - newItem.price);
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-8">
          <Navbar     input={searchTerm} 
       onChange={updateInput}  />
          <Sidebar />
          <div className="container">
            <div className="main row">
              {food.map((foodItem) => (
                <div className="col-lg-4 col-md-6">
                  <ul>
                    {searchResults.map((item) => (
                      <li>{item}</li>
                    ))}
                  </ul>
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
          <CartHeading count={items.length} />
          <div className="cartContent">
            <div className="cart-items">
              {items.map((cartItem, index) => (
                <CartItem
                  key={cartItem.id}
                  id={index}
                  img={cartItem.img}
                  name={cartItem.name}
                  price={cartItem.price}
                  onDelete={deleteItem}
                />
              ))}
            </div>

            <ItemTotal total={total} />
            <CheckoutButton />
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

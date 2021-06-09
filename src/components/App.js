import React, { useState, useEffect } from "react";
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

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = food.filter((person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  function addItem(newItem) {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    setTotal((current) => current + newItem.price);
  }

  

  function deleteItem(newItem) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== newItem.id;
      });
    });
    setTotal((current) => current - newItem.price);
  }

  function renderCartItem() {
    if (total === 0) {
      return <EmptyCart />;
    } else {
      return (
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
                onIncrease={addItem}
              />
            ))}
          </div>

          <ItemTotal total={total} />
          <CheckoutButton />
          <CartButtons />
        </div>
      );
    }
  }

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        <div className="col-lg-8">
          <Navbar searchTerm={searchTerm} handleChange={handleChange} />
          <Sidebar />
          <div className="container">
            <div className="main row">
              {searchResults.map((foodItem, index) => (
                <div className="col-lg-4 col-md-6">
                  <FoodItem
                    key={foodItem.id}
                    img={foodItem.img}
                    name={foodItem.name}
                    price={foodItem.price}
                    onAdd={addItem}
                    id={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <CartHeading count={items.length} />
          {renderCartItem()}
        </div>
      </div>
    </div>
  );
}

export default App;

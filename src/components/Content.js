import React, {useState} from "react";
import food from "../food";
import FoodItem from "./FoodItem";

function Content(props) {

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="main row">
        {food.map((foodItem) => (
          <div className="col-lg-4 col-md-6">
            <FoodItem
              key={foodItem.key}
              img={foodItem.img}
              name={foodItem.name}
              price={foodItem.price}
              onAdd={addNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Content;

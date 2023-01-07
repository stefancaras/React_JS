import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddButtonClick = () => {
    const newItem = {
      itemName: inputValue,
      isSelected: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setInputValue("");
  };

  const toggleComplete = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  return (
    <div className="app-background">
      <div className="main-container">
        <div className="add-item-box">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add an item..."
          />
          <FontAwesomeIcon
            icon={faPlus}
            onClick={() => handleAddButtonClick()}
          />
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <div className="item-container" key={index}>
              <div className="item-name" onClick={() => toggleComplete(index)}>
                {item.isSelected ? (
                  <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className="completed">{item.itemName}</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.itemName}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

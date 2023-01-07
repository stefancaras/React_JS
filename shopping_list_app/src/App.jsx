import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faCheckCircle,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const btnHandler = () => {
    if (inputValue !== "") {
      let array = inputValue.split(",");
      array = array.map(
        (el) =>
          el !== "" && { itemName: el.trim().toLowerCase(), isSelected: false }
      );
      const newItems = [...items, ...array];
      setItems(newItems);
      setInputValue("");
    }
  };

  const toggleSelected = (index) => {
    const newItems = [...items];
    newItems[index].isSelected = !newItems[index].isSelected;
    setItems(newItems);
  };

  const sortFunction = () => {
    const unselected = items.filter((item) => item.isSelected === false);
    const selected = items.filter((item) => item.isSelected === true);
    setItems([...unselected, ...selected]);
  };

  return (
    <div className="container">
      <h1 className="align-c">Shopping List</h1>
      <div className="add-item-box">
        <input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          onKeyDown={(event) => event.key === "Enter" && btnHandler()}
          className="add-item-input"
          placeholder="Add an item..."
        />
        <FontAwesomeIcon
          className="hover-pointer"
          icon={faPlus}
          onClick={() => btnHandler()}
        />
      </div>
      <div className="btn-div">
        <button onClick={sortFunction}>
          Sort
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
        <button onClick={() => setItems([])}>
          New List
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
      <div className="item-list">
        {items.map((item, index) => (
          <div
            className={`item-container ${item.isSelected && "align-r"}`}
            key={index}
          >
            <span className="item-name" onClick={() => toggleSelected(index)}>
              {item.isSelected ? (
                <>
                  <span className="completed">{item.itemName}</span>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faCircle} />
                  <span>{item.itemName}</span>
                </>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

import Header from "./Header";
import Content from "./Content";
import AddItem from "./AddItem";
import Counter from "./Counter";
import "./App.css";
import { useState } from "react";
import ColorGame from "./ColorGame";

function App() {
  const [items, setItems] = useState([]);
  const handleClick = (id) => {
    const listitems = items.map((item) =>
      item.id === id ? { ...item, defaultChecked: !item.defaultChecked } : item
    );
    setItems(listitems);
  };
  const handleDelete = (id) => {
    const listitems = items.filter((item) => item.id !== id);
    setItems(listitems);
  };
  const [newItem, setNewItem] = useState("");
  const addItem = (item) => {
    const id = items.length + 1;
    const newItem = { id, defaultChecked: false, name: item };
    setItems([...items, newItem]);
  };
  const handleSubmit = (e) => {
    setNewItem("");
    addItem(newItem);
  };
  return (
    <div className="App">
      {/* <Counter /> */}
      <Header />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <div>
        <Content
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      </div>
      <ColorGame />
    </div>
  );
}
export default App;

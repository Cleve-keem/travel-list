import { useState } from "react";
import "./App.css";
import Head from "./Components/Head";
import Form from "./Components/Form";
import PackList from "./Components/PackList";
import Footer from "./Components/Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleClearAll() {
    const confirmed = confirm("Are you sure you want to clear the list?");
    if(confirmed) setItems([]);
    // console.log(confirmed);
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  
  // console.log("items", items)

  return (
    <div>
      <Head />
      <Form onAddItems={handleAddItems} />
      <PackList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearAll}
      />
      <Footer items={items}/>
    </div>
  );
}

export default App;

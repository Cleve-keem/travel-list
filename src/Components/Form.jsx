import { useState } from "react";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quatity, setQuatity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const id = Date.now();

    const newItem = {
      id,
      description,
      quatity,
      packed: false,
    };

    onAddItems(newItem);

    setDescription("");
    setQuatity(1);
  }

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <span>What do you need for your 😍 trip?</span>
      <div className="select-container">
        <select
          name="tripOptions"
          value={quatity}
          onChange={(e) => setQuatity(+e.target.value)}
        >
          {Array.from({ length: 20 }, (_, i) => (i + 1)).map((num)=> (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Submit</button>
    </form>
  );
}
export default Form;

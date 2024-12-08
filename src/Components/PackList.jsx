import { useState } from "react";

export default function PackList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(b.packed) - Number(a.packed));
  }

  return (
    <div className="packlist">
      <ul className="items">
        {sortedItems?.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="sort-action">
        <select
          className="sort"
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input">SORT BY INPUT ORDER</option>
          <option value="packed">SORT BY PACK STATUS</option>
          <option value="description">SORT BY DESCRIPTION</option>
        </select>
        <button className="clearList" onClick={onClearItems}>CLEAR LIST</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span>{item.quatity}</span>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button className="btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

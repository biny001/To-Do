import { useState } from "react";

// const initializedItems = [
//   { description: "study", achieved: false, id: 1 },
//   { description: "watchTv", achieved: true, id: 2 },
//   { description: "hiking", achieved: false, id: 3 },
// ];

export default function App() {
  const [newItem, setNewItem] = useState([]);
  const [input, setInput] = useState("");
  let toDo = { description: input, achieved: false, id: Date.now() };
  function handleSubmit(e) {
    e.preventDefault();

    if (!input) return;
    setNewItem((items) => [toDo, ...items]);
    // console.log(newItem);

    // console.log(input);
    setInput("");
  }

  function handleDelete(id) {
    setNewItem((item) => item.filter((curitem) => curitem.id != id));
  }

  function handleAchieved(id) {
    const newData = newItem.map((item) =>
      item.id === id ? { ...item, achieved: !item.achieved } : item
    );

    // console.log(newData);
    setNewItem(newData);
  }

  let sortedArray = [...newItem].sort(
    (a, b) => Number(a.achieved) - Number(b.achieved)
  );

  return (
    <div className="main">
      <Form input={input} onHandleSubmit={handleSubmit} setInput={setInput} />
      <List
        newItem={newItem}
        onHandleDelete={handleDelete}
        onHandleAchieved={handleAchieved}
        sortedArray={sortedArray}
      />
    </div>
  );
}

function Form({ input, onHandleSubmit, setInput }) {
  return (
    <form className="todo-form" onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a new task"
      />
      <button className="add" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z" />
        </svg>
      </button>
    </form>
  );
}

function List({ newItem, onHandleDelete, onHandleAchieved, sortedArray }) {
  return (
    <ul>
      {sortedArray.map((item) => (
        <Items
          item={item}
          key={item.id}
          onHandleDelete={onHandleDelete}
          onHandleAchieved={onHandleAchieved}
        />
      ))}
    </ul>
  );
}

function Items({ item, onHandleDelete, onHandleAchieved }) {
  return (
    <li
      style={
        item.achieved
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      <div className="list-item">
        <input
          type="checkbox"
          onChange={() => onHandleAchieved(item.id)}
        ></input>

        <label>{item.description}</label>
        <button onClick={() => onHandleDelete(item.id)}>
          <img className="delete" src="./public/delete.png" />
        </button>
      </div>
    </li>
  );
}

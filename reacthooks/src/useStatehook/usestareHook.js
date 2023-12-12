import React from "react";

import { useState } from "react";

const UseStateHook = () => {
  const [val, setval] = useState(0);
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });
  const [items, setItems] = useState([]);

  const handleClick = () => {
    for (let i = 1; i <= 5; i++) {
      setval((v) => v + 1);
    }
  };
  const addItem = () => {
    setItems([...items, { id: items.length, value: Math.random() }]);
  };

  return (
    <div>
      <p>{val}</p>
      <button onClick={handleClick} type="">
        click
      </button>

      <div>
        `{name.firstName} and {name.lastName}`
        <input
          type=""
          name="name"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type=""
          name="email"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <button type="">submit</button>
      </div>
      {JSON.stringify(name)}
      <div>
        <button type="" onClick={addItem}>
          Add a Number
        </button>
        <ul>
          {items.map((item) => (
            <li key={item.id}>{item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UseStateHook;

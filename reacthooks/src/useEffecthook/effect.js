import React from "react";
import { useEffect, useState } from "react";

const Useeffecthook = () => {
  const [count, setcount] = useState(0);

  const [x, setx] = useState(0);
  const [y, sety] = useState(0);

  const logMousePosition = (e) => {
    e.stopPropagation();
    console.log("mouse event");
    setx(e.clientX);
    sety(e.clientY);
  };
  const tick = () => {
    console.log(count);
    setcount((prev) => prev + 1);
  };
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    document.title = `You clicked ${count} times`;
    console.log("use effect called");
    window.addEventListener("mousemove", logMousePosition);
    return () => {
      clearInterval(interval);
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div style={{ border: "1px solid red" }}>
      <p>{count}</p>
      <button type="" onClick={() => setcount(count + 1)}>
        Inc
      </button>
      <button type="" onClick={() => setcount(count - 1)}>
        dec
      </button>
      <p>
        hooks :X-{x} Y-{y}
      </p>
    </div>
  );
};

export default Useeffecthook;

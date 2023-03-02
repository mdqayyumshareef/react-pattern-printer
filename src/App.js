import "./App.css";
import { useRef, useState, useCallback } from "react";

function App() {
  const inputRef = useRef();
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <h4>Pattern Printer</h4>
      <input ref={inputRef} type="number" />
      <button onClick={() => setValue(inputRef.current.value)}>Print</button>
      {value > 0 && (
        <div className="wrapper">
          {Array.from({ length: value }).map((_, i) => (
            <Row key={i} value={value} i={i} />
          ))}
        </div>
      )}
    </div>
  );
}

const Row = ({ value, i }) => {
  const Items = useCallback(
    () =>
      Array.from({ length: value }).map((_, j) => (
        <Item key={j} number={i * value + j + 1} />
      )),
    [value, i]
  );

  return (
    <div
      key={i}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${value}, 1fr)`,
        direction: `${i % 2 === 0 ? "ltr" : "rtl"}`,
      }}
    >
      <Items />
    </div>
  );
};

const Item = ({ number }) => {
  return <div className="item">{number}</div>;
};

export default App;

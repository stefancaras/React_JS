import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  return (
    <div className="text-center h1">
      <p className="my-5">Counter app</p>
      <span onClick={() => setCount(--count)}>
        <i className="bi bi-dash-square text-danger"></i>
      </span>
      <span className="mx-3">{count}</span>
      <span onClick={() => setCount(++count)}>
        <i className="bi bi-plus-square text-success"></i>
      </span>
    </div>
  );
}

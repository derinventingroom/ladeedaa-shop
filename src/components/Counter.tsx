"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>

      <button
        className="btn btn-dark"
        onClick={() => setCount(count + 1)}
      >
        Add One
      </button>
    </div>
  );
}
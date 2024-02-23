import React, { useState } from "react";

export default function Calculator() {
  const [ans, setAns] = useState(0);
  const [inp, setInp] = useState("");

  const work = (x) => {
    console.log(x, typeof x);
    if (x === "0/0") setAns("NaN");
    else if (x === "") setAns("Error");
    else setAns(eval(x));
  };

  const operate = (x) => {
    if (inp !== 0) {
      setInp((prev) => prev + x);
    } else setInp(x);
  };

  return (
    <>
      <h1>React Calculator</h1>
      <input
        type="text"
        value={inp}
        onChange={(e) => {
          e.target.value();
        }}
      />
      <div>{ans ? ans : false}</div>
      <br />
      <button onClick={() => operate(7)}>7</button>
      <button onClick={() => operate(8)}>8</button>
      <button onClick={() => operate(9)}>9</button>
      <button onClick={() => operate("+")}>+</button>
      <br />
      <button onClick={() => operate(4)}>4</button>
      <button onClick={() => operate(5)}>5</button>
      <button onClick={() => operate(6)}>6</button>
      <button onClick={() => operate("-")}>-</button>
      <br />
      <button onClick={() => operate(1)}>1</button>
      <button onClick={() => operate(2)}>2</button>
      <button onClick={() => operate(3)}>3</button>
      <button onClick={() => operate("*")}>*</button>
      <br />
      <button
        onClick={() => {
          setInp("");
          setAns(0);
        }}
      >
        C
      </button>
      <button onClick={() => operate(0)}>0</button>
      <button onClick={() => work(inp)}>=</button>
      <button onClick={() => operate("/")}>/</button>
    </>
  );
}

import "./styles.css";
import React, { useState, useEffect } from "react";
import Notes from "./Notes";
export default function App() {
  let textInput1 = React.createRef(); // React use ref to get input value
  let textInput2 = React.createRef();
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [output, setOutput] = useState([]);
  var count = 0;
  let onOnclickHandler = () => {
    //console.log(textInput.current.value);
    setInput1(textInput1.current.value);
    setInput2(textInput2.current.value);
  };
  useEffect(() => {
    setOutput(countCurrency(input2 - input1));
  }, [input1, input2]);
  //var myArr = String(output)
  //.split(",")
  output.map((num) => {
    return Number(num);
  });
  //console.log(myArr);
  let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
  return (
    <div className="App">
      <h1>Bill APP</h1>
      <br />
      <h3>Balance Amount: {input2 - input1}</h3>
      <input
        autoFocus
        className="input"
        ref={textInput1}
        type="text"
        placeholder="Enter Bill amount"
      />
      <input
        className="input"
        ref={textInput2}
        type="text"
        placeholder="Enter amount given"
      />
      <div className="button-container">
        <button className="btn" onClick={onOnclickHandler}>
          Calculate
        </button>
      </div>
      <div className="container">
        {output.map((data, index) => {
          count += data;
          return <Notes value={data} no={notes[index]} key={index} />;
        })}
        <p className="total">Total No of notes: {count}</p>
      </div>
    </div>
  );

  function countCurrency(amount) {
    if (isNaN(amount)) {
      alert("Enter Valid Amount");
    }
    let notes = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let noteCounter = Array(10).fill(0);
    // count notes using Greedy approach
    for (let i = 0; i < 10; i++) {
      if (amount >= notes[i]) {
        noteCounter[i] = Math.floor(amount / notes[i]);
        amount = amount - noteCounter[i] * notes[i];
      }
    }
    // Print notes
    for (let i = 0; i < 10; i++) {
      if (noteCounter[i] !== 0) {
        //console.log(notes[i] + " rupe notes: " + noteCounter[i]);
      }
    }
    return noteCounter;
  }
}

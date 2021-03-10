/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback, useMemo } from "react";
import Button from "./Button";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(1);
  const [isEven, setisEven] = useState("odd");
  const increamentAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const increament = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decreament = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const returnEvenOdd = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return age % 2 === 0 ? true : false;
  }, [age]);
  useEffect(() => {
    console.log("effect rendered");
    returnEvenOdd ? setisEven("even") : setisEven("odd");
  }, [returnEvenOdd]);
  return (
    <div className="App">
      <pre>count : {count}</pre>
      <pre>
        age : {age} type : {isEven}
      </pre>
      <Button handleClick={increament} text="increament" />
      <Button handleClick={decreament} text="decreament" />
      <Button handleClick={increamentAge} text="increament age" />
    </div>
  );
};

export default App;

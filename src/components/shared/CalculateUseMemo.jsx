import React, { useMemo, useState } from "react";

const CalculateUseMemo = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = useMemo(() => {
    console.log("CalculateSum created");
    console.log(
      "num1:",
      num1,
      "num2:",
      num2,
      "sum:",
      Number(num1) + Number(num2)
    );

    return Number(num1) + Number(num2);
  }, [num1, num2]);

  const handleClick = () => {
    console.log("handleClick created");
    setSum(calculateSum);
  };
  return (
    <>
      <br />
      <label>Num1:</label>
      <input
        type="text"
        value={num1}
        onChange={(event) => setNum1(Number(event.target.value))}
      />
      <br />
      <label>Num1:</label>
      <input
        type="text"
        value={num2}
        onChange={(event) => setNum2(Number(event.target.value))}
      />
      <br />
      <br />
      <button onClick={handleClick}>Calculate Sum</button>
      <br />
      <p>Sum:{sum}</p>
    </>
  );
};

export default CalculateUseMemo;

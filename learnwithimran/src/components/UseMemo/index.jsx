import { useState, useMemo } from "react";

const UseMemo = () => {
  const [count, setcount] = useState(0);

  const expensiveCalculation = () => {
    console.log("Calculating...");
    let sum = 0;
    for (let i = 0; i < 100000; i++) {
      sum += 1;
    }
    return sum;
  };

  // without useMemo
  // const result = expensiveCalculation();
  // with useMemo
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const result = useMemo(() => expensiveCalculation(), [count]);
  console.log(result);

  // another example:
  // const activeUsers = useMemo(() => {
  //   return users.filter((user)=>user.active)
  // }, [users]);

  return (
    <div>
      <h1>{result}</h1>
      <button onClick={() => setcount(count + 1)}>Count:{count}</button>
    </div>
  );
};

export default UseMemo;

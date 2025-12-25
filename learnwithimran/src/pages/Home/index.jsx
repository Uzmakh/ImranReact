import { useCallback, useState } from "react";

const HomePage = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);

  //* putting condition on increment
  const increment = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      alert("Count is greater than 10: Limit is reached.")
    }
  };
  //* putting condition on decrement
  const decrement = () => {
    if (count >0) {
      setCount(count -1)
    } else {
      alert("Count is equal to '0': Limit is reached.Number can't be negative")
    }
  };
  return (
    <div>
      <h1>I am a Home page</h1>
      <h2>Name: {props.name}</h2>
      <h2>Counter:{count}</h2>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}
    
      {/* <button onClick={() => setCount((prevValue) => prevValue + 1)}>Increment</button> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
};

export default HomePage;

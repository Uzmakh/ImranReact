import { useEffect, useState } from "react";

const UseEffectScenario = () => {
  const [count, setCount] = useState(0);
  const [disableIncrement, setDisableIncrement] = useState(false);
  const [disableDecrement, setDisableDercrement] = useState(false);

  useEffect(() => {
    if (count >= 10) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisableIncrement(true);
    } else {
      setDisableIncrement(false);
    }

    if (count <= 0) {
      setDisableDercrement(true);
    } else {
      setDisableDercrement(false);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h2>Counter:{count}</h2>
      <button onClick={handleIncrement} disabled={disableIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement} disabled={disableDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default UseEffectScenario;

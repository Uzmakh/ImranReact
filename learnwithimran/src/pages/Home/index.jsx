import { useCallback, useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { ThemeContext } from "../../context";
import Navbar from "../../components/Navbar";

const HomePage = (props) => {
  console.log(props);
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const countRef = useRef(0);
  const theme = useContext(ThemeContext);

  //* putting condition on increment
  // const increment = useCallback(() => {
  //   if (count < 10) {
  //     setCount(count + 1)
  //   } else {
  //     alert("Count is greater than 10: Limit is reached.")
  //   }
  // }, [count]);

  //! useRef
  const increment = () => {
    countRef.current += 1;
    console.log(countRef.current);
  };

  //* putting condition on decrement
  const decrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Count is equal to '0': Limit is reached.Number can't be negative");
    }
  }, [count]);

  //! useRef
  const handleOnFocus = () => {
    console.log("Focus");
    inputRef.current.focus();
  };
  // Class-11 API Calling
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      // const data = await response.data;
      // console.log(data);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);

      setUsers([]);
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <h2>{error}</h2>;
  return (
    <div>
      <Navbar theme={theme} />
      {loading && <div>Loading...</div>}
      {/* <div>Theme:{theme.theme}</div> */}
      <h1>I am a Home page</h1>
      <h2>Name: {props.name}</h2>
      <h2>Counter:{count}</h2>
      {/* <button onClick={()=>setCount(count+1)}>Increment</button> */}

      {/* <button onClick={() => setCount((prevValue) => prevValue + 1)}>Increment</button> */}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>

      {/* input tied with ref */}
      <input type="text" ref={inputRef} />
      <button onClick={() => handleOnFocus()}>Focus </button>

      {/* using map method to display users data */}
      {/* {users.map((user) =>
        <div key={user.id}>
          {user.name}
      </div>
      )} */}

      {/* Only render when users is defined */}
      {users.length > 0 ? (
        users.map((user) => (
          <div key={user.id}>
            {user.name}- {user.phone}-{user.username}-{user.website}
          </div>
        ))
      ) : (
        <div>Loading users...</div> // Show loading state
      )}
    </div>
  );
};

export default HomePage;

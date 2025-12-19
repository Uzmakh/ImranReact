import { useState } from "react";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";

const App = () => {
  const [page, setPage] = useState();
  return (
    <div>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("signup")}>Signup</button>

      {page === "home" && <HomePage name={"Code Village"} />}
      {page === "signup" && <Signup />}
    </div>
  );
};

export default App;

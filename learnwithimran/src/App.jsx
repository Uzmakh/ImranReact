import { useState } from "react";

import UseEffectScenario from "./components/UseEffect";
import UseMemo from "./components/useMemo";
import { BrowserRouter } from "react-router-dom";

import { ThemeContext } from "./context";
import RoutesConfig from "./routing/Routes";

const App = () => {
  // const [page, setPage] = useState();

  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <RoutesConfig />
        </BrowserRouter>

        {/* <button onClick={() => setTheme("dark")}>dark</button>
          <button onClick={() => setTheme("light")}>light</button> */}
        {/* 
          <button onClick={() => setPage("home")}>Home</button>
          <button onClick={() => setPage("signup")}>Signup</button>

          {page === "home" && <HomePage name={"Code Village"} />}
          {page === "signup" && <Signup />} */}

        {/* <UseEffectScenario />
      <UseMemo /> */}
      </ThemeContext.Provider>
    </>
  );
};

export default App;

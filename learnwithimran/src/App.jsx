import { useState } from "react";
import HomePage from "./pages/Home";
import Signup from "./pages/Signup";
import UseEffectScenario from "./components/UseEffect";
import UseMemo from "./components/useMemo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext } from "./context";
import Product from "./pages/Product";
import Products from "./pages/Products/indx";

const App = () => {
  // const [page, setPage] = useState();

  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products" element={<Products/> } />
            <Route path="/products/:id/:variant" element={<Product/> } />
          </Routes>
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

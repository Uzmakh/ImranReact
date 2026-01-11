import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context";
import Navbar from "../../components/Navbar";

const Products = () => {
  const theme = useContext(ThemeContext);
  return (
    <>
      <Navbar theme={theme} />
      <div style={{ display: "flex",flexDirection:"column",paddingLeft:"50px"}}>
        <Link to="/products/123/small-size">Product 1</Link>
        <Link to="/products/123/medium-size">Product 2</Link>
        <Link to="/products/123/large-size">Product 3</Link>
      </div>
      <div>Products</div>
    </>
  );
};

export default Products;

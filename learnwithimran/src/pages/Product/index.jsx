import { useContext } from 'react';
import { useParams } from 'react-router-dom'
import { ThemeContext } from "../../context";
import Navbar from "../../components/Navbar";


const Product = () => {
  const theme = useContext(ThemeContext);
  const { id, variant } = useParams();
  return (
    <>
      <Navbar theme={theme} />
      <h2>Product</h2>
      <div>ID:{id}</div>
      <div>Variant: {variant}</div>
    </>
  );
}

export default Product

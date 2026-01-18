import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/Home'
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import Product from "../pages/Product";
import Products from "../pages/Products/indx";
import ProtectedRoutes from './ProtectedRoutes';


export default function RoutesConfig () {
  
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <HomePage />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/products"
        element={
          <ProtectedRoutes>
            <Products />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/products/:id/:variant"
        element={
          <ProtectedRoutes>
            <Product />
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
}


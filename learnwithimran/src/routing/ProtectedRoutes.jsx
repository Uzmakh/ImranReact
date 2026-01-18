import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({children}) {
 const isAuthenticated = true;

  if (isAuthenticated) {
     return <>{children}</>
  } else {
    return <Navigate to='/signin'/>
  }
 
}
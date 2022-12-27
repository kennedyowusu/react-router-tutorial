import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, user}) => {
 return (
  <div>
   <h2>Protected Route</h2>
   {user ? children : <Navigate to="/login" />}
  </div>
 )
}

export default ProtectedRoute

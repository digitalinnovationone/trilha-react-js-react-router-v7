import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;


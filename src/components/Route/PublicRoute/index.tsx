import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;


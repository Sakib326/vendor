import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

export const PublicOutlet = () => {
  const auth = useAuth();

  return !auth ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicOutlet;

import { Navigate, Outlet } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
import Header from "../../modules/@common/header";
import Nav from "../../modules/@common/nav";

export const PrivateOutlet = () => {
  const auth = useAuth();

  return auth ? (
    <>
      <Header />
      <div className="grid grid-cols-[120px_1fr]">
        <Nav />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateOutlet;

import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import useAuth from "./../../hooks/useAuth";
import Header from "../../modules/@common/header";
import Nav from "../../modules/@common/nav";

export const PrivateOutlet = () => {
  const auth = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return auth ? (
    <>
      <Header handleOpen={handleOpen} />
      <div className="lg:grid lg:grid-cols-[100px_1fr]">
        <Nav open={open} handleClose={handleClose} className="hidden lg:flex" />
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

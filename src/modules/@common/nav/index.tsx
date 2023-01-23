import { Link, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useLocation } from "react-router-dom";
import { useSignOutMutation } from "../../../redux/auth/auth_api";

export const Nav = () => {
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const logOut = async () => {
    await signOut({}).then((res) => {
      navigate("/login");
    });
  };
  return (
    <nav
      className="sticky top-[72px] left-0 self-start overflow-auto flex flex-col text-xs"
      style={{ height: "calc(100vh - 72px)", borderRight: "1px solid #eee" }}
    >
      <div>
        <Link
          to="/dashboard"
          className={`flex flex-col gap-2 items-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all ${
            location?.pathname?.includes("dashboard")
              ? "bg-tertiary text-primary"
              : null
          }`}
        >
          <ReactSVG src="/icons/dashboard.svg" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/campaign"
          className={`flex flex-col gap-2 items-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all ${
            location?.pathname?.includes("campaign")
              ? "bg-tertiary text-primary"
              : null
          }`}
        >
          <ReactSVG src="/icons/feed.svg" />
          <span>Campaign</span>
        </Link>
        <Link
          to="/products"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all ${
            location?.pathname?.includes("products")
              ? "bg-tertiary text-primary"
              : null
          }`}
        >
          <ReactSVG src="/icons/campaign.svg" />
          <span>Product</span>
        </Link>
      </div>

      <div className="mt-auto">
        <Link
          to="/profile"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all ${
            location?.pathname?.includes("profile")
              ? "bg-tertiary text-primary"
              : null
          }`}
        >
          <span>My Profile</span>
          <ReactSVG src="/icons/profile.svg" />
        </Link>
        <div
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all cursor-pointer`}
          onClick={() => {
            logOut();
          }}
        >
          <ReactSVG src="/icons/logout.svg" />
          <span>Log out</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

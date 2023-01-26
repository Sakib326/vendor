import { NavLink, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useLocation } from "react-router-dom";
import { Drawer } from "antd";
import { FiX } from "react-icons/fi";
import { useSignOutMutation } from "../../../redux/auth/auth_api";

type navProps = {
  className?: string;
  open: boolean;
  handleClose: any;
};

export const Nav = ({ className, open, handleClose }: navProps) => {
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();
  const location = useLocation();
  const logOut = async () => {
    await signOut({}).then((res) => {
      navigate("/login");
    });
  };

  return (
    <>
      <nav
        className={`${className} side_nav sticky top-[72px] left-0 self-start overflow-auto flex flex-col text-xs`}
        style={{ height: "calc(100vh - 72px)", borderRight: "1px solid #eee" }}
      >
        <div>
          <NavLink
            to="/dashboard"
            className={(navData) =>
              (navData.isActive ? "active " : "") + `nav_link`
            }
          >
            <ReactSVG src="/icons/dashboard.svg" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink
            to="/campaigns/list"
            className={`nav_link ${
              location?.pathname?.includes("campaign") ? "active" : ""
            }`}
          >
            <ReactSVG src="/icons/feed.svg" />
            <span>Campaigns</span>
          </NavLink>
          <NavLink
            to="/products/list"
            className={`nav_link ${
              location?.pathname?.includes("products") ? "active" : ""
            }`}
          >
            <ReactSVG src="/icons/campaign.svg" />
            <span>Products</span>
          </NavLink>
        </div>
        <div className="mt-auto">
          <NavLink
            to="/profile/feed"
            className={`nav_link stroke ${
              location?.pathname?.includes("profile") ? "active" : ""
            }`}
          >
            <span>My Profile</span>
            <ReactSVG src="/icons/profile.svg" />
          </NavLink>
          <div onClick={logOut} className={`nav_link`}>
            <ReactSVG src="/icons/logout.svg" />
            <span>Log out</span>
          </div>
        </div>
      </nav>

      <Drawer
        title={
          <div className="flex justify-between gap-3">
            <div>Title</div>
            <button
              onClick={handleClose}
              className="text-2xl hover:text-danger"
            >
              <FiX />
            </button>
          </div>
        }
        placement={"left"}
        closable={false}
        onClose={handleClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Nav;

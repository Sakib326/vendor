import { Drawer } from "antd";
import { Fragment } from "react";
import { BiUserCircle } from "react-icons/bi";
import { BsCart4, BsTrophy } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineCampaign, MdOutlineDashboard } from "react-icons/md";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useSignOutMutation } from "../../../redux/auth/auth_api";

type navProps = {
  className?: string;
  open: boolean;
  handleClose: any;
};

const mobileNavData = [
  {
    id: 1,
    icon: <MdOutlineDashboard className="text-[18px]" />,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 2,
    icon: <MdOutlineCampaign className="text-[22px]" />,
    title: "Campaigns",
    url: "/campaigns/list",
  },
  {
    id: 3,
    icon: <BsTrophy className="text-[18px]" />,
    title: "Winners",
    url: "/winners/list",
  },
  {
    id: 4,
    icon: <BsCart4 className="text-[18px]" />,
    title: "Products",
    url: "/products/list",
  },
  {
    id: 5,
    icon: <BiUserCircle className="text-[18px]" />,
    title: "My Profile",
    url: "/profile/feed",
    bottom: true,
  },
  {
    id: 6,
    icon: <IoIosLogOut className="text-[18px]" />,
    title: "Log Out",
  },
];

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
            to="/winners/list"
            className={`nav_link ${
              location?.pathname?.includes("winners") ? "active" : ""
            }`}
          >
            <BsTrophy className="text-[18px]" />
            <span>Winners</span>
          </NavLink>
          <NavLink
            to="/products/list"
            className={`nav_link ${
              location?.pathname?.includes("products") ? "active" : ""
            }`}
          >
            <BsCart4 className="text-[18px]" />
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
        headerStyle={{ padding: 0 }}
        bodyStyle={{ padding: 0 }}
        title={
          <div className="flex justify-between gap-3 bg-[#AC224D] px-5">
            <div className="py-[18px] ">
              <img
                src="/images/misc/logo-white.webp"
                alt="logo"
                width={150}
                height={48}
                className="shrink-0"
              />
            </div>
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
        <ul className="flex flex-col h-full overflow-auto">
          {mobileNavData?.map((item, i) => {
            const pathName = item?.url;
            return (
              <Fragment key={`navigation_${i}`}>
                {pathName ? (
                  <li
                    onClick={handleClose}
                    className={`${item?.bottom ? "mt-auto" : ""}`}
                  >
                    <NavLink
                      to={item?.url || "#"}
                      className={`${
                        location.pathname == pathName
                          ? "text-primary bg-[#FAF2F5]"
                          : ""
                      } px-[23px] py-[15px] flex justify-start items-center gap-[15px] hover:text-primary hover:bg-[#FAF2F5] transition-all `}
                    >
                      {item?.icon}
                      <span className="leading-[20px]">{item?.title}</span>
                    </NavLink>
                  </li>
                ) : (
                  <li>
                    <button
                      className={`px-[23px] py-[15px] flex justify-start items-center gap-[15px] hover:text-primary hover:bg-[#FAF2F5] transition-all w-full`}
                    >
                      {item?.icon}
                      <span className="leading-[20px]">{item?.title}</span>
                    </button>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </Drawer>
    </>
  );
};

export default Nav;

import { Link, NavLink, Outlet } from "react-router-dom";
import { ImPinterest2 } from "react-icons/im";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";

export const ProfileOutlet = ({ type = "view" }) => {
  const { user } = useSelector((state: any) => state.auth);

  const userProfile =
    user !== ""
      ? user
      : JSON.parse(localStorage.getItem("profileInfo")!)?.profileInfo;
  return (
    <div className="pb-[80px]">
      <div className="h-[280px] lg:h-[320px] max-w-[1270px] mx-auto w-full">
        <img
          crossOrigin="anonymous"
          src={
            userProfile?.banner !== "" && userProfile?.banner
              ? `${import.meta.env.VITE_API_URL}/${userProfile?.banner}`
              : "https://cdn.pixabay.com/photo/2015/01/29/16/34/mothers-day-616363_960_720.jpg"
          }
          alt="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1234px] w-full mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] mt-[-55px] gap-1 lg:gap-4 mb-4">
          <div className="flex justify-center">
            <div className="bg-white border-[3px] border-[#fff] rounded-full">
              <div className="w-[154px] h-[154px] bg-white border-[3px] border-[#eee] rounded-full	p-3 flex items-center justify-center overflow-hidden">
                <img
                  crossOrigin="anonymous"
                  src={
                    userProfile?.logo !== "" && userProfile?.logo
                      ? `${import.meta.env.VITE_API_URL}/${userProfile?.logo}`
                      : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                  }
                  alt="Campaign bdwinners"
                  title="Campaign bdwinners"
                />
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-3 md:flex-row justify-between items-center">
            <div className="left">
              <div className="text-black font-semibold text-3xl">Unisearch</div>
              <a
                href={`${
                  userProfile?.website !== "" && userProfile?.website
                    ? userProfile?.website
                    : "#"
                }`}
              >
                {userProfile?.website !== "" && userProfile?.website
                  ? userProfile?.website
                  : "N/A"}
              </a>
            </div>
            <div className="right">
              <div className="flex item-center ">
                {type === "edit" ? (
                  <>
                    <Link to="/profile/feed" className="btn btn-secondary">
                      <span>Cancel</span>
                    </Link>
                  </>
                ) : (
                  <Link to="/profile/edit" className="btn btn-secondary mb-5">
                    <BiEdit />
                    <span>Edit Profile</span>
                  </Link>
                )}
              </div>

              {/* {type === "view" && (
                <ul className="flex items-center gap-5">
                  <li className="ml-auto">
                    <a href="#">
                      <FiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <ImPinterest2 />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiInstagram />
                    </a>
                  </li>
                </ul>
              )} */}
            </div>
          </div>
        </div>

        <nav className="mb-7">
          <ul className="flex border-t border-b gap-[2px] overflow-auto whitespace-nowrap">
            {type === "edit" ? (
              <>
                <li>
                  <NavLink
                    to="/profile/edit"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/settings"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Settings
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/profile/feed"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Feed
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/about"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/products"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/products/1"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Product Details
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/services"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/profile/campaigns"
                    className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                    style={(navData: { isActive: boolean }) =>
                      navData.isActive
                        ? {
                            color: "#AC224D",
                            borderBottom: "2px solid #AC224D",
                          }
                        : undefined
                    }
                  >
                    Campaigns
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default ProfileOutlet;

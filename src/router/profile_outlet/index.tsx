import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ImPinterest2 } from "react-icons/im";
import {
  FiFacebook,
  FiInstagram,
  FiLink,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "../../redux/auth/auth_api";

export const ProfileOutlet = ({ type = "view" }) => {
  const location = useLocation();
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
              : "/images/misc/banner.webp"
          }
          alt={userProfile?.businessName}
          title={userProfile?.businessName}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1234px] w-full mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] mt-[-55px] gap-1 lg:gap-4 mb-4">
          <div className="flex justify-center">
            <div className="bg-white border-[3px] border-[#fff] rounded-full">
              <div className="w-[154px] h-[154px] bg-white border-[3px] border-[#eee] rounded-full	p-3 flex items-center justify-center overflow-hidden">
                {userProfile?.logo !== "" && userProfile?.logo ? (
                  <img
                    crossOrigin="anonymous"
                    src={`${import.meta.env.VITE_API_URL}/${userProfile?.logo}`}
                    alt="Campaign bdwinners"
                    title="Campaign bdwinners"
                  />
                ) : (
                  <div className="text-black font-medium text-center">
                    {userProfile?.businessName}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="self-end flex flex-col gap-3 md:flex-row justify-between items-center">
            <div className="left">
              <div className="text-black font-semibold text-3xl">
                {userProfile?.businessName !== "" && userProfile?.businessName
                  ? userProfile?.businessName
                  : "N/A"}
              </div>
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

              {type === "view" && (
                <div>
                  <ul className="flex items-center gap-5">
                    {userProfile?.socialLinks &&
                      userProfile?.socialLinks.length > 0 &&
                      userProfile?.socialLinks[0]?.label !== "" &&
                      userProfile?.socialLinks.map((e: any, i: any) => {
                        return (
                          <li className="ml-auto" key={i}>
                            <a
                              href={`${
                                e?.label === "Facebook"
                                  ? "https://fb.com"
                                  : e?.label === "Linkedin"
                                  ? "https://linkedin.com/in"
                                  : e?.label === "Twitter"
                                  ? "https://twitter.com"
                                  : e?.label === "Youtube"
                                  ? "https://www.youtube.com"
                                  : "/"
                              }/${e?.value}`}
                              target="_blank"
                            >
                              {e?.label === "Facebook" ? (
                                <FiFacebook />
                              ) : e?.label === "Linkedin" ? (
                                <FiLinkedin />
                              ) : e?.label === "Twitter" ? (
                                <FiTwitter />
                              ) : e?.label === "Youtube" ? (
                                <FiYoutube />
                              ) : (
                                <FiLink />
                              )}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="sticky top-[72px] md:top-[72px] bg-white z-[100] asdf">
          <nav className="mb-7 ">
            <ul className="flex border-t border-b gap-[2px] overflow-auto whitespace-nowrap asdf">
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
                  {location?.pathname?.includes("profile/products/view") && (
                    <li>
                      <span
                        className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                        style={
                          location?.pathname?.includes("profile/products/view")
                            ? {
                                color: "#AC224D",
                                borderBottom: "2px solid #AC224D",
                              }
                            : undefined
                        }
                      >
                        Product Details
                      </span>
                    </li>
                  )}

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
                  {location?.pathname?.includes("profile/services/view") && (
                    <li>
                      <span
                        className={`px-5 py-3 inline-flex border-b-2 border-transparent hover:border-primary hover:text-primary`}
                        style={
                          location?.pathname?.includes("profile/services/view")
                            ? {
                                color: "#AC224D",
                                borderBottom: "2px solid #AC224D",
                              }
                            : undefined
                        }
                      >
                        Service Details
                      </span>
                    </li>
                  )}
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
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default ProfileOutlet;

import {
  FiFacebook,
  FiInstagram,
  FiLink,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";
import { useSelector } from "react-redux";
import parse from "html-react-parser";

const ProfileAbourOverview = () => {
  const { user } = useSelector((state: any) => state.auth);

  const userProfile =
    user !== ""
      ? user
      : JSON.parse(localStorage.getItem("profileInfo")!)?.profileInfo;
  return (
    <div>
      <div>
        <h4 className="mb-4 pb-2 border-b text-lg font-medium">
          Company Overview
        </h4>

        <div>
          {parse(userProfile?.overview ? userProfile?.overview : "<p>N/A</p>")}
        </div>
      </div>
      <div className="mt-[30px]">
        <div className="border-t">
          <h4 className="py-[15px] border-b text-lg  font-medium">
            Contact and Info
          </h4>
        </div>
        <div className="grid  grid-cols-1 gap-8 text-sm mt-[15px]">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[130px_1fr] items-center">
            <span>Mobile Number</span>
            <span className="text-black font-medium contact_info">
              {userProfile?.mobile ?? "N/A"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-2 lg:grid-cols-[130px_1fr] items-center">
            <span>Email</span>
            <span className="text-black font-medium contact_info">
              {userProfile?.email ?? "N/A"}
            </span>
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-2 lg:gap-0 lg:grid-cols-[130px_1fr] items-center">
              <span>Website</span>
              <span className="text-black font-medium contact_info">
                {userProfile?.website !== "" && userProfile?.website
                  ? userProfile?.website
                  : "N/A"}
              </span>
            </div>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-[130px_1fr] items-center">
              <span>Address</span>
              <span className="text-black font-medium contact_info">
                {userProfile?.landmark !== null &&
                  userProfile?.landmark &&
                  `${userProfile?.landmark},`}
                {userProfile?.area !== null &&
                  userProfile?.area &&
                  `${userProfile?.area},`}
                {userProfile?.city !== null &&
                  userProfile?.city &&
                  `${userProfile?.city},`}
                {userProfile?.province !== null && userProfile?.province
                  ? `${userProfile?.province}`
                  : "N/A"}
              </span>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-[130px_1fr] items-center">
              <span>Postal Code</span>
              <span className="text-black font-medium">
                {userProfile?.postalCode !== "" && userProfile?.postalCode
                  ? userProfile?.postalCode
                  : "N/A"}
              </span>
            </div>
          </div>
          <div className="items-center justify-center">
            {parse(
              userProfile?.gMapLink ? userProfile?.gMapLink : "<p>N/A</p>"
            )}
          </div>
        </div>
      </div>

      {userProfile?.socialLinks.length > 0 &&
        userProfile?.socialLinks[0]?.label !== "" && (
          <div className="mt-[30px]">
            <div className="border-b border-t">
              <h4 className="py-[15px]  text-lg font-medium">
                Social Media Links
              </h4>
            </div>
            <div className="grid gap-3 mt-[15px]">
              {userProfile?.socialLinks &&
                userProfile?.socialLinks.length > 0 &&
                userProfile?.socialLinks.map((e: any, i: any) => {
                  return (
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
                      key={i}
                      className="flex gap-2 items-center"
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
                      <span className="text-black">{`${
                        e?.label === "Facebook"
                          ? "https://fb.com"
                          : e?.label === "Linkedin"
                          ? "https://linkedin.com/in"
                          : e?.label === "Twitter"
                          ? "https://twitter.com"
                          : e?.label === "Youtube"
                          ? "https://www.youtube.com"
                          : "/"
                      }/${e?.value}`}</span>
                    </a>
                  );
                })}
            </div>
          </div>
        )}
    </div>
  );
};

export default ProfileAbourOverview;

import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
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
          {/* <div className="">
            <div className="grid grid-cols-[130px_1fr] items-center">
              <span>Postal Code</span>
              <span className="text-black font-medium">1200</span>
            </div>
          </div> */}
          <div className="map">
            {parse(
              userProfile?.gMapLink ? userProfile?.gMapLink : "<p>N/A</p>"
            )}
          </div>
        </div>
      </div>
      {/* <div className="mt-[30px]">
        <div className="border-b border-t">
          <h4 className="py-[15px]  text-lg font-medium">Social Media Links</h4>
        </div>
        <div className="grid gap-3 mt-[15px]">
          <a href="#" className="flex gap-2 items-center">
            <ImPinterest2 />
            <span className="text-black">www.pinterest.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiFacebook />
            <span className="text-black">www.facebook.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiInstagram />
            <span className="text-black">www.instagram.com</span>
          </a>
          <a href="#" className="flex gap-2 items-center">
            <FiYoutube />
            <span className="text-black">www.youtube.com</span>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default ProfileAbourOverview;

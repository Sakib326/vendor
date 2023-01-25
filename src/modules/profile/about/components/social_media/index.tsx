import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";

const ProfileAboutSocialMedia = () => {
  return (
    <div>
      <h4 className="mb-4 pb-2 border-b text-lg font-medium">
        Social Media Links
      </h4>
      <div className="grid gap-3">
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
    </div>
  );
};

export default ProfileAboutSocialMedia;

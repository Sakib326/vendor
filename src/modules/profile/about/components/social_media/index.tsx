import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { ImPinterest2 } from "react-icons/im";

const ProfileAboutSocialMedia = () => {
  return (
    <div className="mt-[30px]">
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
    </div>
  );
};

export default ProfileAboutSocialMedia;

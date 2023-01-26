import { AiOutlineMenu } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";

type headerProps = {
  handleOpen?: any;
};

const Header = ({ handleOpen }: headerProps) => {
  return (
    <header className="bg-primary px-5 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-[100] h-[72px]">
      <div className="flex items-center gap-4">
        <button
          onClick={handleOpen}
          className="block lg:hidden mt-1 text-2xl text-white"
        >
          <AiOutlineMenu />
        </button>

        <Link to="/dashboard" className="left">
          <img src="/images/misc/logo-white.webp" alt="logo" />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <MdNotifications className="text-white text-2xl	" />
        <div className="w-[40px] h-[40px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU"
            alt="user"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

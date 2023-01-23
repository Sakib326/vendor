import { MdNotifications } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-primary px-8 py-4 flex items-center justify-between sticky top-0 z-[100] border-b">
      <div className="left">
        <img src="/images/misc/logo-white.webp" alt="logo" />
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

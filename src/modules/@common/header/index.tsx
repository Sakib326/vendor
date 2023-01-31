import { AiFillSetting, AiOutlineMenu } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  MdNotifications,
  MdOutlineDashboard,
  MdSettings,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useSignOutMutation } from "../../../redux/auth/auth_api";
import { IoIosLogOut } from "react-icons/io";

type headerProps = {
  handleOpen?: any;
};

const Header = ({ handleOpen }: headerProps) => {
  const [signOut] = useSignOutMutation();
  const navigate = useNavigate();
  const logOut = async () => {
    await signOut({}).then((res) => {
      navigate("/login");
    });
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link to="/dashboard" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </div>
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link to="/profile/edit" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <CgProfile />
            <span>Profile</span>
          </div>
        </Link>
      ),
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: (
        <Link to="/profile/settings" className="profile_dropdown_item">
          <div className="flex justify-start items-center gap-1.5">
            <MdSettings />
            <span>Settings</span>
          </div>
        </Link>
      ),
      key: "3",
    },
    {
      label: (
        <div
          className="flex justify-start items-center gap-1.5"
          onClick={logOut}
        >
          <IoIosLogOut />
          <span>Logout</span>
        </div>
      ),
      key: "4",
    },
  ];
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

      <div className="flex items-center gap-3 ">
        <MdNotifications className="text-white text-2xl	" />

        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          overlayClassName="profile_dropdown"
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <div className="w-[40px] h-[40px]">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src="https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
                  alt="user"
                />
              </div>
            </Space>
          </a>
        </Dropdown>
        {/* <div className="w-[40px] h-[40px]">
          <img
            className="w-full h-full object-cover rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU"
            alt="user"
          />
        </div> */}
      </div>
    </header>
  );
};

export default Header;

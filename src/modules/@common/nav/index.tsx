import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const Nav = () => {
  return (
    <nav
      className="sticky top-[72px] left-0 self-start overflow-auto flex flex-col text-xs"
      style={{ height: "calc(100vh - 72px)", borderRight: "1px solid #eee" }}
    >
      <div>
        <Link
          to="/dashboard"
          className={`flex flex-col gap-2 items-center px-4 py-6 hover:bg-tertiary hover:text-primary bg-tertiary text-primary transition-all`}
        >
          <ReactSVG src="/icons/dashboard.svg" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/feed"
          className={`flex flex-col gap-2 items-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/feed.svg" />
          <span>Feed</span>
        </Link>
        <Link
          to="/campaign"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/campaign.svg" />
          <span>Campaign List</span>
        </Link>
        <Link
          to="/winners"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/winner.svg" />
          <span>Recent Winners</span>
        </Link>
        <Link
          to="/take"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/take.svg" />
          <span>Take</span>
        </Link>
        <Link
          to="#"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/birthday.svg" />
          <span>Birthday Banner</span>
        </Link>
      </div>

      <div className="mt-auto">
        <Link
          to="/profile"
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/profile.svg" />
          <span>My Profile</span>
        </Link>
        <div
          className={`flex flex-col gap-2 items-center text-center px-4 py-6 hover:bg-tertiary hover:text-primary transition-all`}
        >
          <ReactSVG src="/icons/logout.svg" />
          <span>Log out</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

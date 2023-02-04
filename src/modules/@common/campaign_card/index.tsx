import { Link } from "react-router-dom";
import CountdownTimer from "../countdown_timer";
import { LazyLoadImage } from "react-lazy-load-image-component";

const apiUrl = import.meta.env.VITE_API_URL;

interface ComponentProps {
  className?: any;
  isShowTime?: boolean;
  isShowLogo?: boolean;
  isShowWinner?: boolean;
  btnTitle?: string;
  data?: any;
}

export const CampaignCard = ({
  className,
  isShowTime = true,
  isShowWinner = false,
  btnTitle,
  data,
}: ComponentProps) => {
  return (
    <div
      className={`card flex flex-col items-center ${
        className?.wrapper ? className?.wrapper : ""
      }`}
    >
      <div className="relative w-full">
        <div className="flex items-center w-full lg:h-[270px]">
          {/* <LazyLoadImage
            crossOrigin="anonymous"
            src={
              data?.thumbnail
                ? `${apiUrl}${data?.thumbnail}`
                : "/images/misc/image-placeholder-big.webp"
            }
            alt={data?.name}
            title={data?.name}
            className="rounded-md w-full h-full object-cover mb-5"
          /> */}
          <img
            crossOrigin="anonymous"
            src={
              data?.thumbnail
                ? `${apiUrl}${data?.thumbnail}`
                : "/images/misc/image-placeholder-big.webp"
            }
            alt={data?.name}
            title={data?.name}
            className="rounded-md w-full h-full object-cover mb-5"
          />
        </div>
      </div>

      {isShowTime && (
        <CountdownTimer
          customClasses={{
            root: "px-4 mt-[-17px] mb-5 py-1 shadow-lg z-10",
          }}
          targetDate={data?.endDate}
        />
      )}

      {isShowWinner && (
        <div className="my-4 grid grid-cols-[40px_1fr] gap-4 items-center self-start">
          <div className="w-10 h-10">
            <img
              src="/images/misc/avatar-big.png"
              alt="avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-medium text-sm">Mizan Khan</span>
            <span className="text-xs">Winner</span>
          </div>
        </div>
      )}

      <Link
        to={
          data?.status === "Pending"
            ? `/campaigns/edit/${data?.uuid}`
            : `/campaigns/${data?.uuid}`
        }
        className="btn btn-primary w-full"
      >
        {btnTitle ? btnTitle : "Edit"}
      </Link>
    </div>
  );
};

export default CampaignCard;

import { Link } from "react-router-dom";
import { useGetAllCampaignQuery } from "../../../redux/campaign/campaign_api";
import CountdownTimer from "../../@common/countdown_timer";

export const ProfileCampaigns = () => {
  const { data: campaignList, isLoading: dataLoading } =
    useGetAllCampaignQuery<any>({});
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* card */}
        {new Array(2).fill(1).map((_, i) => {
          return (
            <div className="card flex flex-col items-center" key={i}>
              <div className="relative w-full mb-4">
                <div className="absolute px-3 py-1 right-[10px] top-[10px] text-white bg-[#FF9F43] text-xs rounded">
                  Pending
                </div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="rounded-md w-full"
                />
              </div>
              <Link to="/campaigns/edit/1" className="btn btn-primary  w-full">
                Edit
              </Link>
            </div>
          );
        })}

        {/* card */}
        {new Array(2).fill(1).map((_, i) => {
          return (
            <div className="card flex flex-col items-center" key={i}>
              <div className="relative w-full mb-4">
                <CountdownTimer
                  customClasses={{
                    root: "absolute px-3 py-0 shadow-lg right-[10px] top-[10px]",
                  }}
                  targetDate={"08/26/2023"}
                />
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="rounded-md w-full"
                />
              </div>
              <Link to="/campaigns/1" className="btn btn-primary  w-full">
                View Details
              </Link>
            </div>
          );
        })}

        {/* card */}
        {new Array(4).fill(1).map((_, i) => {
          return (
            <div className="card flex flex-col items-center" key={i}>
              <div className="relative w-full mb-4">
                <div className="absolute px-3 py-1 right-[10px] top-[10px] text-white bg-[#28C76F] text-xs rounded">
                  Completed
                </div>
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="rounded-md w-full"
                />
              </div>
              <div className="grid grid-cols-[40px_1fr] mb-3 gap-2 items-center self-start">
                <div className="w-full h-[40px]">
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn0C4lPDZ-CdkIO0mmgk9bMi5Ss49u0E7e9w&usqp=CAU"
                    alt="winner"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-sm font-medium">
                    Albert Flores
                  </span>
                  <span className="text-xs">Winner</span>
                </div>
              </div>
              <Link to="/campaigns/1" className="btn btn-primary  w-full">
                View Details
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCampaigns;

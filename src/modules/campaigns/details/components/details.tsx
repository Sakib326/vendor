import parse from "html-react-parser";
import { useState } from "react";
import { ReactSVG } from "react-svg";

function Details({ campaignDetails }: any) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      <div className="">
        <div className="mb-4">
          <img
            crossOrigin="anonymous"
            src={
              campaignDetails?.thumbnail
                ? `${import.meta.env.VITE_API_URL}/${
                    campaignDetails?.thumbnail
                  }`
                : "/temp/campaign-unisearch.webp"
            }
            alt="campaign"
          />
        </div>
        <div className="text-xl text-black font-medium mb-5 text-center">
          {campaignDetails?.name && campaignDetails?.name !== null
            ? campaignDetails?.name
            : "N/A"}
        </div>
        {/* <div className="mb-7 flex justify-center">
                <img src="/temp/logo-unisearch.webp" alt="logo" />
              </div> */}

        <div className="mb-5 flex flex-wrap	justify-center gap-x-8 gap-y-6 text-left">
          <div className="grid grid-cols-[44px_1fr] gap-4">
            <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
              <ReactSVG src="/icons/take-red.svg" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl text-black font-semibold">
                {campaignDetails?.participants &&
                campaignDetails?.participants !== null
                  ? campaignDetails?.participants.length
                  : 0}
              </span>
              <span>Total Take</span>
            </div>
          </div>
          <div className="grid grid-cols-[44px_1fr] gap-4">
            <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
              <ReactSVG src="/icons/podium-red.svg" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl text-black font-semibold">
                {campaignDetails?.winnerCount &&
                campaignDetails?.winnerCount !== null
                  ? campaignDetails?.winnerCount
                  : 0}
              </span>
              <span>Total Winners</span>
            </div>
          </div>
          <div className="grid grid-cols-[44px_1fr] gap-4">
            <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
              <ReactSVG src="/icons/eye-red.svg" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl text-black font-semibold">
                {campaignDetails?.clicks && campaignDetails?.clicks !== null
                  ? campaignDetails?.clicks
                  : 0}
              </span>
              <span>Total Impression</span>
            </div>
          </div>
        </div>

        {/* details */}
        <div className="mb-5">
          <div className="text-xl border-b mb-5 pb-4 font-medium">Details</div>
          <ul className="flex flex-col gap-1">
            <li className="flex gap-1">
              <span className="font-medium">Type:</span>
              <span>
                {campaignDetails?.type &&
                campaignDetails?.type !== null &&
                campaignDetails?.type === "WEBSITE_PROMOTION"
                  ? "Website Promotion"
                  : "Brand Awarness"}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-medium">Start Date:</span>
              <span>
                {campaignDetails?.startDate &&
                campaignDetails?.startDate !== null
                  ? campaignDetails?.startDate
                  : "N/A"}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-medium">End Date:</span>
              <span>
                {campaignDetails?.endDate && campaignDetails?.endDate !== null
                  ? campaignDetails?.endDate
                  : "N/A"}
              </span>
            </li>
            <li className="flex gap-1">
              <span className="font-medium">Status:</span>
              {(campaignDetails?.status === "Pending" ||
                campaignDetails?.status === "Review") && (
                <div className="text-[#FFA800] bg-[#f9ebd1] text-sm px-3 py-1 text-center rounded w-max">
                  {campaignDetails?.status}
                </div>
              )}
              {(campaignDetails?.status === "Published" ||
                campaignDetails?.status === "Selection") && (
                <div className="text-[#7367F0] bg-[#e9e7fd] text-sm px-3 py-1 text-center rounded  w-max">
                  {campaignDetails?.status}
                </div>
              )}
              {campaignDetails?.status === "Completed" && (
                <div className="text-[#28C76F] bg-[#e7f0e3] text-sm px-3 py-1 text-center rounded  w-max">
                  {campaignDetails?.status}
                </div>
              )}
              {(campaignDetails?.status === "Rejected" ||
                campaignDetails?.status === "Blocked") && (
                <div className="text-red-700 bg-red-100 text-sm px-3 py-1 text-center rounded  w-max">
                  {campaignDetails?.status}
                </div>
              )}
            </li>
          </ul>
        </div>
        {/* details */}
        <div className="mb-5">
          <div className="text-xl border-b mb-5 pb-4 font-medium">
            Description
          </div>
          <div>
            {showMore
              ? parse(
                  campaignDetails?.description &&
                    campaignDetails?.description !== null
                    ? campaignDetails?.description
                    : "<p>N/A</p>"
                )
              : parse(
                  campaignDetails?.description &&
                    campaignDetails?.description !== null
                    ? campaignDetails?.description.substring(0, 250)
                    : "<p>N/A</p>"
                )}
            <span
              className="cursor-pointer text-primary"
              onClick={() => setShowMore(!showMore)}
            >
              {campaignDetails?.description.length > 250 && (
                <div>{showMore ? "Show less" : "Show more"}</div>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;

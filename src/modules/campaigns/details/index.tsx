import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";

export const CampaignDetails = () => {
  return (
    <div className="p-8">
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="grid grid-cols-[1fr_2fr] gap-8">
          {/* left */}
          <div>
            <div className="">
              <div className="mb-4">
                <img src="/temp/campaign-unisearch.webp" alt="campaign" />
              </div>
              <div className="text-xl text-black font-medium mb-5 text-center">
                This is campaign title sit amet consectetur. Mollis integer
                condim entum blandit.
              </div>
              <div className="mb-7 flex justify-center">
                <img src="/temp/logo-unisearch.webp" alt="logo" />
              </div>

              <div className="mb-5 flex flex-wrap	justify-center gap-x-8 gap-y-6 text-left">
                <div className="grid grid-cols-[44px_1fr] gap-4">
                  <div className="flex items-center justify-center bg-tertiary w-[44px] h-[44px] rounded">
                    <ReactSVG src="/icons/take-red.svg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-3xl text-black font-semibold">
                      1.23k
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
                      12
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
                      1.23k
                    </span>
                    <span>Total Impression</span>
                  </div>
                </div>
              </div>

              {/* details */}
              <div className="mb-5">
                <div className="text-xl border-b mb-5 pb-4 font-medium">
                  Details
                </div>
                <ul className="flex flex-col gap-1">
                  <li className="flex gap-1">
                    <span className="font-medium">Type:</span>
                    <span>Brand Awareness</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                  <li className="flex gap-1">
                    <span className="font-medium">Gifts Levels:</span>
                    <span>05</span>
                  </li>
                </ul>
              </div>
              {/* details */}
              <div className="mb-5">
                <div className="text-xl border-b mb-5 pb-4 font-medium">
                  Description
                </div>
                <div>
                  We are looking for a senior software engineer having
                  professional experience and deep knowledge of JavaScript,
                  Node.js, and web application development services (backend
                  frameworks like nest.js, adonis.js, and server side
                  application frameworks like nextjs). See More
                </div>
              </div>

              <Link to="#" className="btn btn-primary mt-2 w-full">
                Edit
              </Link>
            </div>
          </div>
          <div>right</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;

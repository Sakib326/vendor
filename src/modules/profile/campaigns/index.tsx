import CountdownTimer from "../../@common/countdown_timer";

export const ProfileCampaigns = () => {
  return (
    <div>
      <h4 className="mb-5">Campaign List</h4>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4   gap-8">
        {new Array(8).fill(1).map((_, i) => {
          return (
            <div className="card flex flex-col items-center">
              <div className="relative w-full">
                <img
                  src="/temp/campaign-unisearch.webp"
                  alt="Campaign unisearch"
                  title="Campaign unisearch"
                  className="rounded-md w-full mb-[40px]"
                />

                <CountdownTimer
                  customClasses={{
                    root: "absolute px-4 py-1 shadow-lg left-[50%] bottom-0 translate-x-[-50%] translate-y-[-50%]",
                  }}
                  targetDate={"08/26/2023"}
                />
              </div>
              <img
                src="/temp/logo-unisearch.webp"
                alt="Campaign unisearch"
                title="Campaign unisearch"
                className="mb-4"
              />
              <div className="btn btn-primary  w-full">Take</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileCampaigns;

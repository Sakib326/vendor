import React from "react";

export default function AddStatus({ userProfile, showModal }: any) {
  return (
    <div className="border rounded p-5 pb-0 mb-5">
      <div className="flex items-center justify-between mb-4">
        <div className="grid grid-cols-[46px_1fr] gap-6 w-full">
          <div className="border rounded-full flex items-center justify-center p-1 h-[46px]">
            <img
              crossOrigin="anonymous"
              src={
                userProfile?.logo !== "" && userProfile?.logo
                  ? `${import.meta.env.VITE_API_URL}/${userProfile?.logo}`
                  : "https://i.ibb.co/grqf3k6/istockphoto-1300845620-612x612.jpg"
              }
              alt="user"
            />
          </div>
          <div
            className="p-[13px] bg-[#8082911a] w-full rounded-[6px] cursor-pointer"
            onClick={showModal}
          >
            <div>What's on your mind ?</div>
          </div>
        </div>
      </div>
    </div>
  );
}

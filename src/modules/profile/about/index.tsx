import { useState } from "react";
import ProfileAboutContact from "./components/contact";
import ProfileAboutOperationHours from "./components/operation_hours";
import ProfileAbourOverview from "./components/overview";
import ProfileAboutSocialMedia from "./components/social_media";
import ProfileAboutSpecialty from "./components/specialty";

const data = [
  {
    id: 1,
    title: "Overview",
  },
  {
    id: 2,
    title: "Contact and Info",
  },
  {
    id: 3,
    title: "Specialty",
  },
  {
    id: 4,
    title: "Hours of Operation",
  },
  {
    id: 5,
    title: "Social Media Links",
  },
];

export const ProfileAbout = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="grid grid-cols-[270px_1fr] border rounded-lg">
      <div className="border-r p-5">
        <ul className="flex flex-col gap-2">
          {data?.map((item, i) => {
            return (
              <li
                onClick={() => setStep(i)}
                className={`px-4 py-2 rounded cursor-pointer hover:text-primary hover:bg-tertiary ${
                  step == i ? "bg-tertiary text-primary" : "bg-[#f3f3f4] "
                }`}
              >
                {item?.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="p-5">
        {step == 0 && <ProfileAbourOverview />}
        {step == 1 && <ProfileAboutContact />}
        {step == 2 && <ProfileAboutSpecialty />}
        {step == 3 && <ProfileAboutOperationHours />}
        {step == 4 && <ProfileAboutSocialMedia />}
      </div>
    </div>
  );
};

export default ProfileAbout;

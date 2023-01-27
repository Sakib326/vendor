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
    <div className="max-w-[770px] w-full mx-auto border rounded-lg">
      <div className="p-5">
        <ProfileAbourOverview />
      </div>
    </div>
  );
};

export default ProfileAbout;

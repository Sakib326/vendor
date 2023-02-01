import { useState } from "react";
import ProfileEditContact from "./components/contact";
import ProfileEditOperationHours from "./components/operation_hours";
import ProfileEditOverview from "./components/overview";
import ProfileEditSocialMedia from "./components/social_media";
import ProfileEditSpecialty from "./components/specialty";

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

export const ProfileEditAbout = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="border p-[20px] md:p-[30px]">
      <div className="max-w-[860px]">
        <ProfileEditOverview />
      </div>
    </div>
  );
};

export default ProfileEditAbout;

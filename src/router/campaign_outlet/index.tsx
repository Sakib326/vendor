import { Navigate, Outlet } from "react-router-dom";

export const CampaignOutlet = () => {
  return (
    <div>
      <div>campaign head</div>
      <Outlet />
    </div>
  );
};

export default CampaignOutlet;

import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import CampaignOutlet from "../../../router/campaign_outlet";

const CampaignList = lazy(() => import("../list"));
const CampaignFeed = lazy(() => import("../feed"));
const CampaignAbout = lazy(() => import("../about"));
const CampaignProducts = lazy(() => import("../products"));

const CampaignRoute = () => {
  return (
    <Route path="/" element={<CampaignOutlet />}>
      <Route path="campaign" element={<CampaignList />} />
      <Route path="campaign/feed" element={<CampaignFeed />} />
      <Route path="campaign/about" element={<CampaignAbout />} />
      <Route path="campaign/about" element={<CampaignAbout />} />
      <Route path="campaign/products" element={<CampaignProducts />} />
    </Route>
  );
};

export default CampaignRoute;

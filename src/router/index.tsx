import { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
// outlet
const PrivateOutlet = lazy(() => import("./private_outlet"));
const PublicOutlet = lazy(() => import("./public_outlet"));
const CampaignOutlet = lazy(() => import("./campaign_outlet"));
const ProfileOutlet = lazy(() => import("./profile_outlet"));
// auth
const Login = lazy(() => import("../modules/auth/login"));
const Register = lazy(() => import("../modules/auth/register"));
const ForgotPassword = lazy(() => import("../modules/auth/forgot_password"));
const ResetPassword = lazy(() => import("../modules/auth/reset_password"));
const Verification = lazy(() => import("../modules/auth/verification"));
// general
const Dashboard = lazy(() => import("../modules/dashboard"));
const CampaignTable = lazy(() => import("../modules/campaigns/campaignTable"));
const Feed = lazy(() => import("../modules/feed"));
const Winners = lazy(() => import("../modules/winners"));
const Take = lazy(() => import("../modules/take"));
// campaign
const CampaignList = lazy(() => import("../modules/campaign/list"));
const CampaignFeed = lazy(() => import("../modules/campaign/feed"));
const CampaignAbout = lazy(() => import("../modules/campaign/about"));
const CampaignProducts = lazy(() => import("../modules/campaign/products"));
// profile
const ProfileOverview = lazy(() => import("../modules/profile/overview"));
const ProfileSettings = lazy(() => import("../modules/profile/settings"));

const NotFound = () => {
  return <div>page not found</div>;
};

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
        </Route>

        <Route path="/" element={<Navigate replace to="/dashboard" />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="campaign" element={<CampaignTable />} />
          <Route path="feed" element={<Feed />} />
          <Route path="winners" element={<Winners />} />
          <Route path="take" element={<Take />} />
          <Route path="products" element={<CampaignProducts />} />

          {/* <Route path="/" element={<CampaignOutlet />}>
            <Route path="campaign" element={<CampaignList />} />
            <Route path="campaign/feed" element={<CampaignFeed />} />
            <Route path="campaign/about" element={<CampaignAbout />} />
            <Route path="campaign/about" element={<CampaignAbout />} />
            <Route path="campaign/products" element={<CampaignProducts />} />
          </Route> */}

          <Route path="/" element={<ProfileOutlet />}>
            <Route path="profile" element={<ProfileOverview />} />
            <Route path="profile/settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

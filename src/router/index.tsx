import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// outlet
const PrivateOutlet = lazy(() => import("./private_outlet"));
const PublicOutlet = lazy(() => import("./public_outlet"));
const ProfileOutlet = lazy(() => import("./profile_outlet"));
// auth
const Login = lazy(() => import("../modules/auth/login"));
const Register = lazy(() => import("../modules/auth/register"));
const ForgotPassword = lazy(() => import("../modules/auth/forgot_password"));
const ResetPassword = lazy(() => import("../modules/auth/reset_password"));
const Verification = lazy(() => import("../modules/auth/verification"));
// general
const Dashboard = lazy(() => import("../modules/dashboard"));
const CampaignList = lazy(() => import("../modules/campaigns/list"));
const CampaignAdd = lazy(() => import("../modules/campaigns/add"));
import WinnersList from "../modules/winners/list";
const CampaignEdit = lazy(() => import("../modules/campaigns/edit"));
const CampaignDetails = lazy(() => import("../modules/campaigns/details"));

const ProductList = lazy(() => import("../modules/products/list"));
const ProductAdd = lazy(() => import("../modules/products/add"));
// profile
const ProfileFeed = lazy(() => import("../modules/profile/feed"));
const ProfileAbout = lazy(() => import("../modules/profile/about"));
const ProfileProducts = lazy(() => import("../modules/profile/products"));
const ProfileServices = lazy(() => import("../modules/profile/service"));
const ProfileCampaigns = lazy(() => import("../modules/profile/campaigns"));
// profile edit
const ProfileEditAbout = lazy(() => import("../modules/profile_edit/about"));
const ProfileSettings = lazy(() => import("../modules/profile_edit/settings"));

const NotFound = () => {
  return <div>page not found</div>;
};

const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <div className="grid place-content-center h-screen w-screen">
          <Spin tip="Loading" size="large" />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<PublicOutlet />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Route>

        <Route path="/" element={<Navigate replace to="/dashboard" />} />

        <Route path="/" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="campaigns/list" element={<CampaignList />} />
          <Route path="campaigns/add" element={<CampaignAdd />} />
          <Route path="campaigns/edit/:id" element={<CampaignEdit />} />
          <Route path="campaigns/:id" element={<CampaignDetails />} />

          <Route path="winners/list" element={<WinnersList />} />
          <Route path="products/list" element={<ProductList />} />
          <Route path="products/edit/:id" element={<ProductAdd />} />
          <Route path="products/add" element={<ProductAdd />} />

          <Route path="/" element={<ProfileOutlet />}>
            <Route path="profile/feed" element={<ProfileFeed />} />
            <Route path="profile/about" element={<ProfileAbout />} />
            <Route path="profile/products" element={<ProfileProducts />} />
            <Route path="profile/services" element={<ProfileServices />} />
            <Route path="profile/campaigns" element={<ProfileCampaigns />} />
          </Route>

          <Route path="/" element={<ProfileOutlet type="edit" />}>
            <Route path="profile/edit" element={<ProfileEditAbout />} />
            <Route path="profile/settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;

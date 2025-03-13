import {
  MdDashboard,
  MdNotifications,
  MdOutlineCreate,
  MdOutlinePerson,
} from "react-icons/md";
import { Route, Routes, useLocation } from "react-router";
import JobOffersPage from "./JobOffersPage";
import { Tab, Tabs } from "@heroui/react";
import GoBack from "../components/GoBack";
import EmployerCreateJobPage from "./EmployerCreateJobPage";
import EmployerJobApplicantsPage from "./EmployerJobApplicantsPage";
import EmployerProfile from "./EmployerProfilePage";
import EmployerDashboard from "./EmployerDashboardExtraPage";
import UpdatedArtisanProfile from "./EmployerArtisanEmployPage";

const EmployerDashboardPage = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex w-full flex-col p-4 px-8 mt-8">
      <GoBack />
      <Routes>
        <Route path="/dashboard" element={<EmployerDashboard />} />

        <Route path="/profile" element={<EmployerProfile />} />

        <Route path="/create-job" element={<EmployerCreateJobPage />} />

        {/* <Route path="/job/:id/applicants" element={<EmployerJobApplicantsPage />} /> */}
        <Route
          path="/job/:jobId/:artisanId"
          element={<UpdatedArtisanProfile />}
        />

        {/* <Route */}
        {/*   path="/job/:id/applicants" */}
        {/*   element={<EmployerJobApplicantsPage />} */}
        {/* /> */}
      </Routes>
    </div>
  );
};
export default EmployerDashboardPage;

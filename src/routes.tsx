import {
    createBrowserRouter,
  } from "react-router";

 import CandidateProfile from './pages/Candidate'
import JobsDashboard from "./pages/JobsDash";

  export const router = createBrowserRouter([
    {
      path: "/profile",
      element: <CandidateProfile />,
    },
    {
      path: "/",
      element: <JobsDashboard />,
    },
  ]);
  
import {
    createBrowserRouter,
  } from "react-router";

 import CandidateProfile from './pages/Candidate'
import JobsDashboard from "./pages/JobsDash";
import Home from "./pages/Home";

  export const router = createBrowserRouter([
    {
      path: "/candidateprofile",
      element: <CandidateProfile />,
    },
    {
      path: "/",
      element: <JobsDashboard />,
    },
    {
      path:"/home",
      element: <Home/>,
    }
  ]);
  
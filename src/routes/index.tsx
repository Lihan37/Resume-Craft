import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import NotFound from "../pages/notfound";
import { Home } from "../pages/home";
import { DashBoardWrapper } from "../layouts/DashBoardWrapper";
import Resumes from "../pages/dashboard/resumes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "app",
    element: <DashBoardWrapper />,
    children: [
      {
        path: "resumes",
        element: <Resumes />,
      },
    ],
  },
]);

export default router;

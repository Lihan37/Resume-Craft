import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import NotFound from "../pages/notfound";
import { Home } from "../pages/home";
import { DashBoardWrapper } from "../layouts/DashBoardWrapper";
import Blog from "../pages/blog";
import Faq from "../pages/faq";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ResumesTemplates from "../pages/resumes/ResumesTemplates";
import CoverLetterTemplates from "../pages/coverletter/CoverLetterTemplates";

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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/resumes-template",
        element: <ResumesTemplates />,
      },
      {
        path: "/cover-latter-template",
        element: <CoverLetterTemplates />,
      },
    ],
  },
  {
    path: "app",
    element: <DashBoardWrapper />,
    children: [
      {
        path: "cover-latter",
        element: <CoverLetterTemplates />,
      },
    ],
  },
]);

export default router;

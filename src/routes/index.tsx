import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layouts/AppWrapper";
import NotFound from "../pages/notfound";
import { Home } from "../pages/home";
import { DashBoardWrapper } from "../layouts/DashBoardWrapper";
import Blog from "../pages/blog";
import Faq from "../pages/faq";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import ResumesTemplates from "../pages/templates/resumes/ResumesTemplates";
import CoverLetterTemplates from "../pages/templates/coverletter/CoverLetterTemplates";
import EditorWrapper from "../layouts/EditorWrapper";
import ResumeEditor from "../pages/editor/resume";
import Pricing from "../pages/pricing";

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
        path: "/pricing",
        element: <Pricing />,
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
    path: "edit",
    element: <EditorWrapper />,
    children: [
      {
        path: "resume",
        element: <ResumeEditor />,
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

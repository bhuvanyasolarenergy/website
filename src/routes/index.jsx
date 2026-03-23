import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Home from "@/pages/Home";
import HomeTwo from "@/pages/HomeTwo";
import ProjectDetails from "@/pages/ProjectDetails";
import Projects from "@/pages/Projects";
import ServiceDetails from "@/pages/ServiceDetails";
import Services from "@/pages/Services";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/index-2",
    element: <HomeTwo />,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/blogs",
        element: <Blog />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
    ],
  },
]);

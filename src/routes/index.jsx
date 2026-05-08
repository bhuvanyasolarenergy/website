import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import HomeTwo from "@/pages/HomeTwo";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import LandingLayout from "@/layouts/LandingLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    children: [
      { path: "/", element: <HomeTwo /> },
      { path: "/index-2", element: <Navigate to="/" replace /> },
      { path: "/home-one", element: <Navigate to="/" replace /> },
      { path: "/about", element: <About /> },
      { path: "/about-us", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/service-details", element: <Navigate to="/services" replace /> },
      { path: "/projects", element: <Projects /> },
      { path: "/project-details", element: <Navigate to="/projects" replace /> },
      { path: "/blogs", element: <Blog /> },
      { path: "/blogs/:id", element: <BlogDetails /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <Faq /> },
    ],
  },
]);

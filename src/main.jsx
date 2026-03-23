import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./assets/font-awesome/css/all.min.css";
import "./assets/font-awesome/css/fontawesome.min.css";
import "./assets/scss/style.scss";
import Bootstrap from "./components/shared/Bootstrap";
import { router } from "./routes";
import InitAOS from "./utils/InitAOS";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Bootstrap>
      <InitAOS />
      <RouterProvider router={router} />
    </Bootstrap>
  </StrictMode>,
);

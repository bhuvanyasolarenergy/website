// hooks/useAOS.js or hooks/useAOS.ts
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const InitAOS = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 700,
      once: true,
    });
    AOS.refresh();
  }, []);

  return null;
};

export default InitAOS;

import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingHeader from "@/components/landing/LandingHeader";
import { useCursorGlow, useReveal, useScrollProgress } from "@/hooks/useReveal";

const LandingLayout = () => {
  const { pathname, hash } = useLocation();
  useReveal(pathname);
  useScrollProgress();
  useCursorGlow();

  useEffect(() => {
    if (hash) {
      const id = hash.replace(/^#/, "");
      const go = () =>
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      requestAnimationFrame(() => {
        go();
        if (!document.getElementById(id)) {
          window.setTimeout(go, 120);
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [pathname, hash]);
  return (
    <div className="landing">
      <div className="ld-progress" aria-hidden="true">
        <div className="ld-progress__fill" />
      </div>
      <LandingHeader />
      <main key={pathname} className="ld-page">
        <Outlet />
      </main>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;

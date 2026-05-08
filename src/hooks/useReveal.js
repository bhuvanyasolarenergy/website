import { useEffect } from "react";

/**
 * Adds `is-visible` class to elements with `.ld-reveal` when they intersect.
 * Re-scans whenever the route changes via `key` arg.
 */
export const useReveal = (key) => {
  useEffect(() => {
    const els = document.querySelectorAll(".ld-reveal");
    if (!els.length) return undefined;

    els.forEach((el) => el.classList.remove("is-visible"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [key]);
};

/**
 * Tracks scroll progress (0-1) and writes it as `--ld-progress` on root.
 */
export const useScrollProgress = () => {
  useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const total = h.scrollHeight - h.clientHeight;
        const pct = total > 0 ? (h.scrollTop / total) * 100 : 0;
        h.style.setProperty("--ld-progress", `${pct.toFixed(2)}%`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
};

/**
 * Cursor-following glow on dark sections.
 * Updates --mx/--my CSS vars on the section the pointer is over.
 */
export const useCursorGlow = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(
      ".ld-hero, .ld-bess, .ld-flow, .ld-cta, .ld-section--ink",
    );
    if (!sections.length) return undefined;

    const onMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      e.currentTarget.style.setProperty("--mx", `${x}%`);
      e.currentTarget.style.setProperty("--my", `${y}%`);
    };
    sections.forEach((s) => s.addEventListener("pointermove", onMove));
    return () =>
      sections.forEach((s) => s.removeEventListener("pointermove", onMove));
  }, []);
};

/**
 * Animated number counter — increments toward `target` when element enters view.
 */
export const animateCount = (el, target, duration = 1500) => {
  if (!el || el.dataset.counted === "1") return;
  el.dataset.counted = "1";
  const startTime = performance.now();
  const isFloat = target % 1 !== 0;

  const tick = (now) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = isFloat ? value.toFixed(2) : Math.round(value).toLocaleString();
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = isFloat ? target.toFixed(2) : target.toLocaleString();
  };
  requestAnimationFrame(tick);
};

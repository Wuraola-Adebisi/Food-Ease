import { useEffect, useState } from "react";

export function useScrollHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setOpacity(Math.min(y / 80, 1));
      setScrolled(y > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrolled, opacity };
}

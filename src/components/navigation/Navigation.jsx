import { useEffect, useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { useScrollHeader } from "../../hooks/useScrollHeader";
import BrandLogo from "../shared/BrandLogo";
import DesktopNav from "./DesktopNav";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import SubscribeModal from "./SubscribeModal";

export default function Navigation() {
  const { scrolled, opacity } = useScrollHeader();
  const [subscribeOpen, setSubscribeOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") {
        setSubscribeOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);

    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  const openSubscribeModal = () => {
    setSubscribeOpen(true);
  };

  return (
    <>
      <nav
        className="fixed top-0 z-50 w-full py-5"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${opacity})`,
          backdropFilter: opacity > 0.5 ? "blur(12px)" : "none",
          boxShadow: opacity > 0.9 ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <BrandLogo scrolled={scrolled} />

          <DesktopNav scrolled={scrolled} />

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={openSubscribeModal}
              className="hidden sm:inline-flex rounded-lg px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 active:scale-95 hover:opacity-90"
              style={{
                backgroundColor: "var(--color-forest)",
                fontFamily: "var(--font-sans)",
              }}
            >
              Subscribe
            </button>

            <MenuButton
              menuOpen={menuOpen}
              scrolled={scrolled}
              onClick={() => setMenuOpen((value) => !value)}
            />
          </div>
        </div>
      </nav>

      <MobileMenu
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onOpenSubscribe={openSubscribeModal}
      />

      <SubscribeModal
        isOpen={subscribeOpen}
        onClose={() => setSubscribeOpen(false)}
      />
    </>
  );
}

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const closeMenu = () => setOpen(false);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    closeMenu();

    const targetId = item.targetId || item.path?.replace("/", "");
    const element = targetId ? document.getElementById(targetId) : null;

    if (element) {
      // If element is present on the current page, smooth scroll directly
      element.scrollIntoView({ behavior: "smooth" });
      if (item.path) {
        window.history.pushState(null, "", item.path);
      }
    } else {
      // If we are on another page (e.g. /pricing/slug), navigate to the path
      navigate(item.path || "/");
    }
  };

  const handleLogoClick = (e) => {
    closeMenu();
    if (pathname === "/" || pathname === "/about" || pathname === "/services" || pathname === "/pricing" || pathname === "/projects" || pathname === "/contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  const handleCTAClick = () => {
    closeMenu();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/contact");
    } else {
      navigate("/contact");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container className="pt-4">
        <div className="flex h-16 items-center justify-between border border-gray-200 bg-white px-5 sm:px-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="group flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center bg-gray-950 text-[10px] font-semibold tracking-wide text-white">
              {site.name?.slice(0, 2).toUpperCase()}
            </span>

            <span className="text-[15px] font-semibold tracking-[-0.025em] text-gray-950">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {site.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.path || "/"}
                onClick={(e) => handleNavClick(e, item)}
                className="group relative py-2 text-[13px] font-medium text-gray-500 transition-colors duration-300 hover:text-gray-950">
                {item.label}

                <span className="absolute bottom-0 left-0 h-px w-0 bg-gray-950 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              variant="primary"
              size="sm"
              onClick={handleCTAClick}
              className="group rounded-none bg-gray-950 px-5 text-white hover:bg-gray-800">
              {site.navCTA}

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Button>
          </div>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center text-gray-950 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}>
            {open ? (
              <X size={20} strokeWidth={1.6} />
            ) : (
              <Menu size={20} strokeWidth={1.6} />
            )}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="px-4 md:hidden">
            <nav className="border-x border-b border-gray-200 bg-white px-5 py-5 shadow-lg">
              <div className="divide-y divide-gray-200">
                {site.navLinks.map((item, i) => (
                  <a
                    key={item.label}
                    href={item.path || "/"}
                    onClick={(e) => handleNavClick(e, item)}
                    className="group flex items-center justify-between py-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-gray-950">
                    <span>{item.label}</span>

                    <span className="text-[10px] font-medium tracking-[0.15em] text-gray-400 transition-colors group-hover:text-gray-950">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </a>
                ))}
              </div>

              <Button
                variant="primary"
                size="md"
                className="mt-5 w-full rounded-none bg-gray-950 text-white hover:bg-gray-800"
                onClick={handleCTAClick}>
                {site.navCTA}

                <ArrowUpRight size={16} strokeWidth={1.8} />
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

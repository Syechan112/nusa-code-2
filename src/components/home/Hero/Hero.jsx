import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/utils";

export default function Hero() {
  const handleConsultation = () => {
    openWhatsApp("Halo! Saya ingin konsultasi pembuatan website. Bisa dibantu?");
  };

  const handleViewPortfolio = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}>
            <div className="max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-400" />

                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-gray-500">
                  WEB DEVELOPMENT SERVICE
                </span>
              </div>

              <h1 className="text-[52px] font-medium leading-[0.95] tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-[78px]">
                Website yang Dibuat untuk Kebutuhan Bisnis Anda.
              </h1>

              <p className="mt-8 max-w-md text-[15px] leading-7 text-gray-500 sm:text-base">
                Bukan sekadar website tampil bagus. Saya membantu membangun
                website yang sesuai dengan kebutuhan bisnis, mulai dari landing
                page sederhana hingga sistem web dengan fitur custom.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleConsultation}
                  className="group bg-gray-950 text-white hover:bg-gray-800">
                  Konsultasi Sekarang
                  <ArrowUpRight
                    size={17}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Button>

                <button
                  onClick={handleViewPortfolio}
                  className="group text-sm font-medium text-gray-600 transition-colors hover:text-gray-950">
                  Lihat Portfolio
                  <span className="ml-2 inline-block h-px w-6 bg-gray-300 align-middle transition-all duration-300 group-hover:w-9 group-hover:bg-gray-900" />
                </button>
              </div>

              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                Landing Page · Company Profile · Business Website · Dashboard ·
                Custom System
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative">
            <img
              src="/nusa-code.png"
              alt="Nusa Code website"
              className="w-full object-cover"
              loading="eager"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

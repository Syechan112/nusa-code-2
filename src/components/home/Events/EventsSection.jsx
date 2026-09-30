import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  portfolio,
  eventsLabel,
  eventsHeadline,
  eventsAllLink,
} from "@/data/portfolio";

export default function EventsSection() {
  const handleClick = (url) => {
    if (url && url !== "#") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="projects" className="bg-gray-100 py-28 md:py-36">
      <Container>
        <div className="space-y-20 md:space-y-28">
          {/* Header */}
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <SectionLabel>{eventsLabel}</SectionLabel>

              <h2 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-gray-950 sm:text-6xl lg:text-[72px]">
                {eventsHeadline}
              </h2>
            </div>

            <p className="text-sm leading-7 text-gray-500 lg:pb-2">
              Beberapa project yang saya bangun — mulai dari website, interface,
              hingga sistem custom.
            </p>
          </div>

          {/* Project List */}
          <div className="border-t border-gray-300">
            {portfolio.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.06,
                }}
                onClick={() => handleClick(project.url)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleClick(project.url);
                  }
                }}
                role="link"
                tabIndex={0}
                className="group cursor-pointer border-b border-gray-300 py-7 outline-none transition-all duration-300 hover:px-4 focus-visible:bg-white md:py-9">
                <div className="grid gap-5 md:grid-cols-[70px_1fr_auto] md:items-center">
                  {/* Number */}
                  <span className="text-xs font-medium tracking-[0.15em] text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title */}
                  <div>
                    <h3 className="text-3xl font-medium tracking-[-0.045em] text-gray-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                      {project.title}
                    </h3>

                    {project.description && (
                      <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                        {project.description}
                      </p>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex items-center gap-6 md:justify-end">
                    <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-gray-400">
                      {project.category || "Web Development"}
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-sm transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                      ↗
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-[0.18em] text-gray-400">
              {String(portfolio.length).padStart(2, "0")} Projects
            </span>

            <button
              type="button"
              className="group flex items-center gap-4 text-sm font-medium text-gray-950">
              <span className="transition-colors group-hover:text-gray-500">
                {eventsAllLink}
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                ↗
              </span>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import {
  servicesLabel,
  servicesHeadline,
  servicesDescription,
  services,
} from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-28 md:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel>{servicesLabel}</SectionLabel>

            <h2 className="mt-7 max-w-md text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-[68px]">
              {servicesHeadline}
            </h2>

            <p className="mt-8 max-w-sm text-[15px] leading-7 text-gray-500 sm:text-base">
              {servicesDescription}
            </p>

            <div className="mt-10">
              <Button
                variant="primary"
                size="md"
                className="group bg-gray-950 text-white hover:bg-gray-800">
                Explore Services
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <div className="border-t border-gray-300">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group grid gap-6 border-b border-gray-300 py-9 transition-all duration-300 sm:grid-cols-[70px_1fr_auto] sm:items-start sm:gap-8">
                  <span className="text-xs font-medium tracking-[0.12em] text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-2xl font-medium tracking-[-0.035em] text-gray-950 transition-transform duration-300 group-hover:translate-x-1 sm:text-3xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-gray-500 sm:text-[15px]">
                      {service.description}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-gray-300 text-gray-500 transition-all duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                    ↗
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-7">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Services
              </span>

              <span className="text-xs text-gray-400">
                {String(services.length).padStart(2, "0")} Services
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

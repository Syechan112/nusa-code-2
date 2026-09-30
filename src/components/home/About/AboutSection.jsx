import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { about } from "@/data/about";

export default function AboutSection() {
  const [featured, ...features] = about.features;

  return (
    <section id="about" className="bg-gray-100 py-28 md:py-40">
      <Container>
        <div className="grid gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">
          {/* Left */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionLabel>{about.label}</SectionLabel>

            <h2 className="mt-7 max-w-md text-5xl font-medium leading-[0.92] tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-[68px]">
              {about.headline}
            </h2>

            <p className="mt-8 max-w-sm text-[15px] leading-7 text-gray-500">
              {about.description}
            </p>

            {/* Small statement */}
            <div className="mt-14 border-t border-gray-300 pt-6">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                Approach
              </span>

              <p className="mt-4 max-w-sm text-lg font-medium leading-7 tracking-[-0.02em] text-gray-900">
                Membangun website yang sederhana digunakan, jelas
                komunikasinya, dan tetap mudah dikembangkan.
              </p>
            </div>
          </div>

          {/* Right */}
          <div>
            {/* Featured feature */}
            <div className="border-t border-gray-300">
              <div className="grid gap-8 py-10 sm:grid-cols-[80px_1fr]">
                <span className="text-xs font-medium tracking-[0.12em] text-gray-400">
                  01
                </span>

                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                    Core Focus
                  </p>

                  <h3 className="mt-5 max-w-2xl text-3xl font-medium leading-tight tracking-[-0.04em] text-gray-950 sm:text-4xl">
                    {featured.title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
                    {featured.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="border-t border-gray-300">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group grid gap-8 border-b border-gray-300 py-9 transition-all duration-300 sm:grid-cols-[80px_1fr]"
                >
                  <span className="text-xs font-medium tracking-[0.12em] text-gray-400">
                    {String(i + 2).padStart(2, "0")}
                  </span>

                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-medium tracking-[-0.025em] text-gray-950 transition-transform duration-300 group-hover:translate-x-1">
                      {feature.title}
                    </h3>

                    <p className="max-w-xl text-sm leading-7 text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="flex items-center justify-between pt-7">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">
                What I Focus On
              </span>

              <span className="text-xs text-gray-400">
                {String(about.features.length).padStart(2, "0")} Areas
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
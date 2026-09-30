import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { openWhatsApp } from "@/lib/utils";

export default function CTASection() {
  const handleConsultation = () => {
    const message =
      "Halo! Saya ingin konsultasi pembuatan website. Bisa dibantu?";
    openWhatsApp(message);
  };

  const handleViewPortfolio = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="bg-gray-100 py-24 md:py-32">
      <Container>
        <div className="border-t border-gray-300 pt-12 md:pt-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-gray-400" />

                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-gray-400">
                  Start A Project
                </span>
              </div>

              <h2 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-gray-950 sm:text-6xl lg:text-[82px]">
                Punya ide website?
                <br />
                <span className="text-gray-400">Mari kita bahas dulu.</span>
              </h2>

              <p className="mt-8 max-w-lg text-[15px] leading-7 text-gray-500 sm:text-base">
                Ceritakan kebutuhan website atau sistem yang ingin Anda buat. Kita bisa mulai dari diskusi dan menentukan solusi yang paling sesuai — apakah website sederhana, sistem custom, atau solusi lainnya.
              </p>
            </div>

            <div className="lg:pb-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handleConsultation}
                className="group bg-gray-950 text-white hover:bg-gray-800">
                Mulai Konsultasi
                <span className="ml-3 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </Button>

              <button
                onClick={handleViewPortfolio}
                className="mt-6 group flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-950">
                Lihat Portfolio
                <span className="ml-2 inline-block h-px w-6 bg-gray-300 align-middle transition-all duration-300 group-hover:w-9 group-hover:bg-gray-900" />
              </button>
            </div>
          </div>

          <div className="mt-16 flex flex-col gap-4 border-t border-gray-300 pt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <span>Web Development · Design · Custom</span>
            <span>Let&apos;s Talk About Your Project</span>
          </div>
        </div>
      </Container>
    </section>
  );
}

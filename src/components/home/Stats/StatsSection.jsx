import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";

const capabilities = [
  {
    number: "01",
    title: "Custom, bukan sekadar template",
    description:
      "Desain dan fitur disesuaikan dengan kebutuhan project.",
  },
  {
    number: "02",
    title: "Bisa mulai dari diskusi",
    description:
      "Belum tahu harus membuat apa? Kita bisa mulai dari kebutuhan dan masalah yang ingin diselesaikan.",
  },
  {
    number: "03",
    title: "Fokus pada usability",
    description:
      "Website tidak hanya dibuat untuk terlihat bagus, tetapi juga mudah digunakan.",
  },
  {
    number: "04",
    title: "Bisa berkembang",
    description:
      "Website dapat dirancang agar bisa dikembangkan ketika kebutuhan bisnis bertambah.",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-gray-100 py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <SectionLabel>WHY WORK WITH ME</SectionLabel>

            <h2 className="mt-6 max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-gray-950 sm:text-5xl lg:text-[58px]">
              Website dibuat dengan memahami kebutuhan.
            </h2>

            <p className="mt-7 max-w-sm text-[15px] leading-7 text-gray-500">
              Bukan sekadar membuat website yang tampil bagus. Setiap solusi dibangun dari pemahaman kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="border-t border-gray-300">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="group grid gap-5 border-b border-gray-300 py-8 sm:grid-cols-[60px_1fr_auto] sm:items-start">
                <span className="text-xs font-medium tracking-[0.15em] text-gray-400">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em] text-gray-950 transition-colors duration-300 group-hover:text-gray-500">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>

                <span className="hidden text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:block">
                  Web Development
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

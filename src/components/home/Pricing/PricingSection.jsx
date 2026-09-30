import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import {
  pricingLabel,
  pricingHeadline,
  pricingDescription,
  pricingPlans,
} from "@/data/pricing";

export default function PricingSection() {
  const handleSelectPlan = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/contact");
    }
  };

  const handleCustomConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "/contact");
    }
  };

  return (
    <section id="pricing" className="bg-gray-100 py-24 md:py-32">
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <SectionLabel>{pricingLabel}</SectionLabel>

          <h2 className="mt-6 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-gray-950 sm:text-5xl lg:text-[60px]">
            {pricingHeadline}
          </h2>

          <p className="mt-8 max-w-xl text-[15px] leading-7 text-gray-500 sm:text-base">
            {pricingDescription}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-stretch">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.slug || plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative flex flex-col justify-between p-8 sm:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "border border-gray-950 bg-gray-950 text-white shadow-2xl"
                  : "border border-gray-300 bg-white text-gray-950 hover:border-gray-950"
              }`}>
              <div>
                {/* Top Label & Badge */}
                <div className="flex items-center justify-between gap-4">
                  <span
                    className={`text-xs font-semibold tracking-wider uppercase ${
                      plan.highlighted ? "text-gray-400" : "text-gray-400"
                    }`}>
                    Tier {plan.tier}
                  </span>

                  {plan.badge && (
                    <span className="inline-flex items-center border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Plan Name with Link to Detail View */}
                <Link
                  to={`/pricing/${plan.slug}`}
                  className="mt-4 block group/title"
                  title={`Lihat detail paket ${plan.name}`}>
                  <h3
                    className={`text-2xl font-medium tracking-tight transition-colors duration-200 ${
                      plan.highlighted
                        ? "text-white group-hover/title:text-gray-300"
                        : "text-gray-950 group-hover/title:text-gray-600"
                    }`}>
                    {plan.name} ↗
                  </h3>
                </Link>

                {/* Plan Description */}
                <p
                  className={`mt-3 text-sm leading-6 min-h-[48px] ${
                    plan.highlighted ? "text-gray-400" : "text-gray-500"
                  }`}>
                  {plan.description}
                </p>

                {/* Price */}
                <div
                  className={`mt-8 pb-8 border-b ${
                    plan.highlighted ? "border-gray-800" : "border-gray-200"
                  }`}>
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl font-medium tracking-tight sm:text-4xl ${
                        plan.highlighted ? "text-white" : "text-gray-950"
                      }`}>
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-8 space-y-4">
                  <p
                    className={`text-xs font-semibold uppercase tracking-wider ${
                      plan.highlighted ? "text-gray-300" : "text-gray-900"
                    }`}>
                    Termasuk di dalam paket:
                  </p>
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.highlighted
                              ? "bg-white/15 text-white"
                              : "bg-gray-950 text-white"
                          }`}>
                          <Check size={11} strokeWidth={2.8} />
                        </span>
                        <span
                          className={`text-sm leading-5 ${
                            plan.highlighted ? "text-gray-300" : "text-gray-600"
                          }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-10 pt-6 space-y-3">
                <Link to={`/pricing/${plan.slug}`} className="block w-full">
                  <Button
                    variant={plan.highlighted ? "primary" : "outline"}
                    size="lg"
                    className={`w-full group cursor-pointer ${
                      plan.highlighted
                        ? "bg-white text-gray-950 hover:bg-gray-100 hover:text-black border-transparent shadow-none"
                        : "bg-gray-950 text-white hover:bg-gray-800 border-gray-950 hover:border-gray-800"
                    }`}>
                    <span>Lihat Detail Paket</span>
                    <ArrowUpRight
                      size={16}
                      className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Button>
                </Link>

                <div className="text-center pt-1">
                  <button
                    type="button"
                    onClick={plan.id === "custom" ? handleCustomConsultation : handleSelectPlan}
                    className={`text-xs font-medium tracking-wide transition-colors cursor-pointer ${
                      plan.highlighted
                        ? "text-gray-400 hover:text-white"
                        : "text-gray-500 hover:text-gray-950"
                    }`}>
                    {plan.ctaText} Langsung (Form Kontak) ↓
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not Locked In Note */}
        <div className="mt-16 max-w-3xl rounded-none border-t border-gray-300 pt-10 md:pt-12">
          <h3 className="text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-gray-950 sm:text-3xl">
            Tidak menemukan paket yang sesuai?
          </h3>

          <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-500 sm:text-base">
            Tidak masalah. Setiap project bisa disesuaikan dengan kebutuhan dan
            budget. Ceritakan dulu apa yang ingin dibuat, lalu kita tentukan
            fitur dan solusi yang paling masuk akal.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link to="/pricing/custom">
              <Button
                variant="primary"
                size="md"
                className="group bg-gray-950 text-white hover:bg-gray-800">
                Detail Paket Custom
                <ArrowUpRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>
            </Link>

            <Button
              variant="outline"
              size="md"
              onClick={handleSelectPlan}
              className="border-gray-300 text-gray-950 hover:bg-gray-200">
              Konsultasi Project (Form)
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

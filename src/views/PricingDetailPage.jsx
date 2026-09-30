import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Clock3,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { pricingPlans } from "@/data/pricing";
import { openWhatsApp } from "@/lib/utils";

export default function PricingDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  const plan = pricingPlans.find(
    (item) => item.slug === slug || item.id === slug,
  );

  const handleWhatsApp = () => {
    const message = `Halo! Saya tertarik dengan paket "${plan.name}" untuk pembuatan website. Bisa diskusikan lebih lanjut?`;
    openWhatsApp(message);
  };

  if (!plan) {
    return (
      <>
        <Navbar />

        <main className="min-h-screen bg-gray-100 px-4 pb-24 pt-32 sm:px-6 md:pt-40">
          <Container>
            <div className="mx-auto max-w-xl border border-gray-300 bg-white p-8 sm:p-12">
              <SectionLabel>404 · PLAN NOT FOUND</SectionLabel>

              <h1 className="mt-6 text-4xl font-medium tracking-[-0.04em] text-gray-950 sm:text-5xl">
                Paket Tidak Ditemukan
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
                Paket yang Anda cari mungkin sudah diperbarui atau tidak
                tersedia.
              </p>

              <div className="mt-8">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => navigate("/pricing", { state: { scrollTo: "pricing" } })}
                  className="rounded-none bg-gray-950 text-white hover:bg-gray-800">
                  <ArrowLeft size={15} />
                  Kembali ke Paket (Pricing)
                </Button>
              </div>
            </div>
          </Container>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pb-24 pt-32 md:pb-32 md:pt-40">
        <Container>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-14">
            <Link
              to="/pricing"
              state={{ scrollTo: "pricing" }}
              className="group inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400 transition-colors duration-300 hover:text-gray-950">
              <ArrowLeft
                size={13}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-x-1"
              />
              Kembali ke Paket (Pricing)
            </Link>
          </motion.div>

          <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}>
              <header className="max-w-3xl border-b border-gray-200 pb-12">
                <div className="flex flex-wrap items-center gap-3">
                  <SectionLabel>TIER {plan.tier} · PAKET WEBSITE</SectionLabel>

                  {plan.badge && (
                    <span className="border border-gray-950 bg-gray-950 px-2 py-1 text-[9px] font-medium uppercase tracking-[0.15em] text-white">
                      {plan.badge}
                    </span>
                  )}
                </div>

                <h1 className="mt-7 text-5xl font-medium tracking-[-0.055em] text-gray-950 sm:text-6xl lg:text-7xl">
                  {plan.name}
                </h1>

                <p className="mt-7 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
                  {plan.fullDescription}
                </p>
              </header>

              <section className="border-b border-gray-200 py-12">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <SectionLabel>01 · CAKUPAN</SectionLabel>

                    <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-gray-950 sm:text-3xl">
                      Apa yang termasuk?
                    </h2>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.18em] text-gray-400 sm:block">
                    Included
                  </span>
                </div>

                <div className="divide-y divide-gray-200 border-y border-gray-200">
                  {plan.details.whatIncluded.map((item, index) => (
                    <div key={index} className="group flex gap-5 py-5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-gray-300 text-gray-950 transition-colors duration-300 group-hover:border-gray-950 group-hover:bg-gray-950 group-hover:text-white">
                        <Check size={11} strokeWidth={2.5} />
                      </span>

                      <p className="max-w-2xl text-sm leading-6 text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="border-b border-gray-200 py-12">
                <div className="mb-8 flex items-end justify-between gap-6">
                  <div>
                    <SectionLabel>02 · HASIL AKHIR</SectionLabel>

                    <h2 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-gray-950 sm:text-3xl">
                      Yang akan Anda terima
                    </h2>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.18em] text-gray-400 sm:block">
                    Deliverables
                  </span>
                </div>

                <div className="divide-y divide-gray-200 border-y border-gray-200">
                  {plan.details.deliverables.map((item, index) => (
                    <div
                      key={index}
                      className="group grid grid-cols-[36px_1fr] gap-4 py-5">
                      <span className="font-mono text-[10px] tracking-wider text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <p className="max-w-2xl text-sm leading-6 text-gray-700">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="pt-12">
                <SectionLabel>03 · CATATAN</SectionLabel>

                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h3 className="text-sm font-medium text-gray-950">
                      Cocok untuk
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {plan.details.idealFor}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-950">
                      Bisa disesuaikan
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      Kebutuhan di luar cakupan paket dapat dibahas dan
                      disesuaikan berdasarkan kebutuhan proyek.
                    </p>
                  </div>
                </div>
              </section>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:sticky lg:top-28 lg:self-start">
              <div className="border border-gray-300 bg-gray-100 p-7 sm:p-8">
                <div className="flex items-center justify-between border-b border-gray-300 pb-5">
                  <SectionLabel>INVESTASI</SectionLabel>

                  <span className="text-[10px] uppercase tracking-[0.16em] text-gray-400">
                    Tier {plan.tier}
                  </span>
                </div>

                <div className="py-8">
                  <span className="block text-4xl font-medium tracking-[-0.04em] text-gray-950 sm:text-5xl">
                    {plan.price}
                  </span>

                  <span className="mt-2 block text-[10px] uppercase tracking-[0.18em] text-gray-400">
                    / {plan.period}
                  </span>
                </div>

                <div className="border-y border-gray-300">
                  <div className="flex items-start justify-between gap-6 py-5">
                    <span className="flex items-center gap-2 text-xs text-gray-500">
                      <Clock3 size={14} strokeWidth={1.6} />
                      Estimasi
                    </span>

                    <span className="max-w-[150px] text-right text-xs font-medium leading-5 text-gray-950">
                      {plan.details.timeline}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-6 border-t border-gray-300 py-5">
                    <span className="flex items-center gap-2 text-xs text-gray-500">
                      <ShieldCheck size={14} strokeWidth={1.6} />
                      Support
                    </span>

                    <span className="max-w-[150px] text-right text-xs font-medium leading-5 text-gray-950">
                      {plan.details.support}
                    </span>
                  </div>
                </div>

                <div className="pt-7">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={handleWhatsApp}
                    className="group w-full rounded-none bg-gray-950 text-white hover:bg-gray-800">
                    Mulai Diskusi
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Button>

                  <p className="mt-4 text-center text-[10px] leading-5 text-gray-400">
                    Konsultasi kebutuhan terlebih dahulu.
                    <br />
                    Tidak harus langsung memilih paket.
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-gray-200 pt-5">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-gray-400">
                  Butuh sesuatu yang berbeda?
                </p>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Paket bukan batasan. Jika kebutuhan website Anda lebih
                  spesifik, kita bisa membahas scope dan fitur dari awal.
                </p>

                <button
                  onClick={handleWhatsApp}
                  className="group mt-5 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-950">
                  Diskusikan Kebutuhan
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </motion.aside>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}

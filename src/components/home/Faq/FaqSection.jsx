import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionLabel from "@/components/ui/SectionLabel";
import { faqLabel, faqHeadline, faqs } from "@/data/faq";

function FaqItem({ question, answer, open, onToggle }) {
  return (
    <div className="group border-b border-gray-300 py-6">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 text-left">
        <span className="text-lg font-medium tracking-tight text-gray-950 transition-colors group-hover:text-gray-600">
          {question}
        </span>

        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center border border-gray-300 transition-all duration-300 ${
            open
              ? "rotate-180 border-gray-950 bg-gray-950 text-white"
              : "border-gray-300 text-gray-400 group-hover:border-gray-950 group-hover:text-gray-950"
          }`}>
          <ChevronDown size={16} />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-2 pt-3 text-[15px] leading-7 text-gray-500 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <SectionLabel>{faqLabel}</SectionLabel>

            <h2 className="mt-6 max-w-md text-4xl font-medium leading-[0.98] tracking-[-0.05em] text-gray-950 sm:text-5xl lg:text-[58px]">
              {faqHeadline}
            </h2>

            <p className="mt-7 max-w-sm text-[15px] leading-7 text-gray-500">
              Hal-hal yang biasanya ditanyakan sebelum memulai project website.
            </p>
          </div>

          <div className="border-t border-gray-300">
            {faqs.map((item, i) => (
              <FaqItem
                key={i}
                question={item.question}
                answer={item.answer}
                open={openIndex === i}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === i ? -1 : i))
                }
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

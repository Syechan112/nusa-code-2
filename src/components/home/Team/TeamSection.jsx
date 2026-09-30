import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import SectionLabel from '@/components/ui/SectionLabel'
import { processLabel, processHeadline, processSteps } from '@/data/team'

export default function TeamSection() {
  return (
    <section className="py-24 md:py-32 bg-stone-100">
      <Container>
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <SectionLabel className="justify-center">{processLabel}</SectionLabel>
            <h2 className="section-title text-navy-900">{processHeadline}</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                }}
                className="group space-y-4">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center border border-gray-950 text-xs font-medium tracking-tight text-gray-950">
                    {item.step}
                  </div>

                  <h3 className="mt-3 text-center text-lg font-medium text-navy-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-center text-sm leading-6 text-gray-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

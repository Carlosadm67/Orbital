import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CaseStudy() {
  const results = [
    { value: '24', label: 'Satellites Deployed', unit: '' },
    { value: '99.8', label: 'Mission Success Rate', unit: '%' },
    { value: '6', label: 'Month Timeline', unit: 'mo' },
    { value: '1.2M', label: 'Data Points/Second', unit: '' },
  ];

  return (
    <section className="relative border-t border-[#00FFFF]/20 bg-[#030712] py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="mb-4 inline-block border border-[#9D7CFF] bg-[#9D7CFF]/10 px-6 py-2 text-sm uppercase tracking-widest text-[#9D7CFF] backdrop-blur-sm">
            Case Study
          </div>
          <h2 className="mb-6 font-['Space_Grotesk'] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            Arctic Research Network
          </h2>
          <p className="max-w-3xl text-xl text-cyan-100/70">
            Multinational collaboration to deploy a constellation of environmental monitoring satellites
            across polar regions. Real-time climate data collection with unprecedented accuracy.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden border border-[#00FFFF]/20"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1737992983677-b4ccfcabfaf5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmJpdGFsJTIwdHJhamVjdG9yeSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzcyNDU4NzQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Arctic Research Satellite Network"
              className="h-[500px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div>
              <h3 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold uppercase text-white">
                Challenge
              </h3>
              <p className="text-cyan-100/70">
                Deploy a network of 24 interconnected satellites to provide continuous coverage
                of Arctic and Antarctic regions, with strict requirements for orbital precision
                and inter-satellite communication.
              </p>
            </div>
            <div>
              <h3 className="mb-4 font-['Space_Grotesk'] text-3xl font-bold uppercase text-white">
                Solution
              </h3>
              <p className="text-cyan-100/70">
                Our autonomous deployment system orchestrated sequential launches across three
                launch sites, with real-time trajectory optimization and automated formation control.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {results.map((result, index) => (
            <div
              key={result.label}
              className="border border-[#00FFFF]/30 bg-gradient-to-br from-[#00FFFF]/10 to-transparent p-8 backdrop-blur-sm"
            >
              <div className="mb-4 flex items-baseline gap-1">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-white">
                  {result.value}
                </span>
                {result.unit && (
                  <span className="text-xl text-cyan-100/60">{result.unit}</span>
                )}
              </div>
              <div className="text-sm uppercase tracking-widest text-[#00FFFF]/70">
                {result.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

export function MissionSection() {
  const capabilities = [
    {
      title: 'Autonomous Operations',
      description: 'Self-coordinating satellite networks with zero human intervention required',
      metric: '99.997%',
      metricLabel: 'Uptime',
    },
    {
      title: 'Global Coverage',
      description: 'Comprehensive orbital monitoring across all major orbital planes',
      metric: '142',
      metricLabel: 'Active Satellites',
    },
    {
      title: 'Precision Deployment',
      description: 'Sub-meter accuracy in satellite positioning and trajectory control',
      metric: '0.2s',
      metricLabel: 'Response Time',
    },
  ];

  return (
    <section className="relative border-t border-[#00FFFF]/20 bg-black py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 text-center"
        >
          <h2 className="mb-6 font-['Space_Grotesk'] text-6xl font-bold uppercase tracking-tight text-white sm:text-7xl">
            Precision in Motion.
          </h2>
          <div className="mx-auto h-[2px] w-32 bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border border-[#00FFFF]/30 bg-gradient-to-b from-[#00FFFF]/5 to-transparent p-8 backdrop-blur-sm"
            >
              <div className="mb-6 text-5xl font-bold text-[#00FFFF]">
                {capability.metric}
              </div>
              <div className="mb-2 text-sm uppercase tracking-widest text-[#00FFFF]/60">
                {capability.metricLabel}
              </div>
              <h3 className="mb-4 font-['Space_Grotesk'] text-2xl font-bold text-white">
                {capability.title}
              </h3>
              <p className="text-cyan-100/60">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

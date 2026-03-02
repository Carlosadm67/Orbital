import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SystemsOverview() {
  const systems = [
    {
      title: 'Autonomous Deployment',
      image: 'https://images.unsplash.com/photo-1770370419338-f9a813302baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBlYXJ0aCUyMG9yYml0JTIwc3BhY2V8ZW58MXx8fHwxNzcyMzc5MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      points: [
        'Fully automated launch sequence integration',
        'Real-time orbital insertion calculations',
        'Self-diagnostic pre-deployment checks',
        'Predictive collision avoidance systems',
      ],
      dataLabel: 'Launch Success Rate',
      dataValue: '100%',
    },
    {
      title: 'Real-Time Orbital Monitoring',
      image: 'https://images.unsplash.com/photo-1634176866089-b633f4aec882?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwZWFydGglMjBuaWdodHxlbnwxfHx8fDE3NzI0NTg3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      points: [
        'Continuous telemetry data streams',
        'Multi-spectrum observation capabilities',
        'Debris tracking and avoidance protocols',
        'Encrypted data transmission architecture',
      ],
      dataLabel: 'Data Latency',
      dataValue: '< 50ms',
    },
    {
      title: 'AI Trajectory Optimization',
      image: 'https://images.unsplash.com/photo-1640796433065-f423a9d9a5fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXRlbGxpdGUlMjBkZXBsb3ltZW50JTIwc3BhY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjQ1ODc0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      points: [
        'Machine learning orbit optimization',
        'Fuel-efficient maneuver planning',
        'Dynamic constellation management',
        'Predictive maintenance scheduling',
      ],
      dataLabel: 'Fuel Efficiency Gain',
      dataValue: '+34%',
    },
  ];

  return (
    <section className="relative border-t border-[#9D7CFF]/20 bg-gradient-to-b from-black to-[#0A0E27] py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-['Space_Grotesk'] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            System Capabilities
          </h2>
          <p className="text-lg text-cyan-100/60">
            Enterprise-grade infrastructure for critical missions
          </p>
        </motion.div>

        <div className="space-y-24">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-8 lg:grid-cols-2 lg:gap-16"
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden border border-[#00FFFF]/20">
                  <ImageWithFallback
                    src={system.image}
                    alt={system.title}
                    className="h-[400px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="text-sm uppercase tracking-widest text-[#00FFFF]/80">
                      {system.dataLabel}
                    </div>
                    <div className="text-4xl font-bold text-white">
                      {system.dataValue}
                    </div>
                  </div>
                </div>
              </div>
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="mb-8 font-['Space_Grotesk'] text-4xl font-bold uppercase tracking-tight text-white">
                  {system.title}
                </h3>
                <ul className="space-y-4">
                  {system.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="mt-1.5 h-[2px] w-6 shrink-0 bg-[#00FFFF]" />
                      <span className="text-lg text-cyan-100/70">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

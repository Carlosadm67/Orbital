import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function LiveDataSection() {
  const [activeCount, setActiveCount] = useState(142);
  const [orbitAccuracy, setOrbitAccuracy] = useState(99.997);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCount((prev) => prev + (Math.random() > 0.7 ? 1 : 0));
      setOrbitAccuracy((prev) => 99.990 + Math.random() * 0.009);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: 'Active Satellites', value: activeCount, unit: '' },
    { label: 'Orbit Accuracy', value: orbitAccuracy.toFixed(3), unit: '%' },
    { label: 'Deployment Latency', value: '0.2', unit: 's' },
    { label: 'Coverage Regions', value: '247', unit: '' },
  ];

  const regions = [
    { name: 'North America', coverage: 98, satellites: 42 },
    { name: 'Europe', coverage: 96, satellites: 38 },
    { name: 'Asia-Pacific', coverage: 99, satellites: 47 },
    { name: 'South America', coverage: 94, satellites: 15 },
  ];

  return (
    <section className="relative border-t border-[#9D7CFF]/20 bg-[#030712] py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="mb-4 inline-block border border-[#00FFFF] bg-[#00FFFF]/10 px-6 py-2 text-sm uppercase tracking-widest text-[#00FFFF] backdrop-blur-sm">
            Live Telemetry
          </div>
          <h2 className="font-['Space_Grotesk'] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            Real-Time Network Status
          </h2>
        </motion.div>

        {/* Main Metrics */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-[#00FFFF]/30 bg-gradient-to-br from-[#00FFFF]/10 to-transparent p-8 backdrop-blur-sm"
            >
              <div className="mb-2 text-sm uppercase tracking-widest text-[#00FFFF]/70">
                {metric.label}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="font-['Space_Grotesk'] text-5xl font-bold text-white">
                  {metric.value}
                </span>
                {metric.unit && (
                  <span className="text-2xl text-cyan-100/60">{metric.unit}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-[#9D7CFF]/30 bg-gradient-to-br from-[#9D7CFF]/5 to-transparent p-10 backdrop-blur-sm"
        >
          <h3 className="mb-8 font-['Space_Grotesk'] text-3xl font-bold uppercase text-white">
            Global Coverage Analysis
          </h3>
          <div className="space-y-6">
            {regions.map((region) => (
              <div key={region.name}>
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-lg text-white">{region.name}</span>
                  <div className="flex gap-6">
                    <span className="text-sm text-[#00FFFF]">
                      {region.satellites} satellites
                    </span>
                    <span className="text-sm text-white">{region.coverage}%</span>
                  </div>
                </div>
                <div className="h-2 bg-[#0A0E27]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.coverage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-[#00FFFF] to-[#9D7CFF]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

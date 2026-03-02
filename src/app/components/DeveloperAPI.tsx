import { motion } from 'motion/react';

export function DeveloperAPI() {
  const codeExample = `{
  "satellite": {
    "id": "ORB-142-A7",
    "status": "active",
    "orbit": {
      "altitude": 550.42,
      "inclination": 97.8,
      "period": 96.4
    },
    "telemetry": {
      "power": 98.6,
      "fuel": 76.2,
      "temperature": 18.3,
      "signal_strength": 0.94
    },
    "last_update": "2026-03-02T14:32:18Z"
  }
}`;

  return (
    <section className="relative border-t border-[#9D7CFF]/20 bg-gradient-to-b from-black to-[#0A0E27] py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="mb-6 font-['Space_Grotesk'] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
              Developer API
            </h2>
            <p className="mb-8 text-xl text-cyan-100/70">
              Programmatic access to satellite telemetry, trajectory planning, and deployment management.
              Built for mission-critical applications.
            </p>
            <ul className="mb-10 space-y-4">
              <li className="flex items-start gap-4">
                <div className="mt-1.5 h-[2px] w-6 shrink-0 bg-[#9D7CFF]" />
                <span className="text-cyan-100/70">RESTful and WebSocket interfaces</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 h-[2px] w-6 shrink-0 bg-[#9D7CFF]" />
                <span className="text-cyan-100/70">99.99% uptime SLA</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 h-[2px] w-6 shrink-0 bg-[#9D7CFF]" />
                <span className="text-cyan-100/70">Government-grade authentication</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1.5 h-[2px] w-6 shrink-0 bg-[#9D7CFF]" />
                <span className="text-cyan-100/70">Comprehensive documentation</span>
              </li>
            </ul>
            <button className="w-fit border-2 border-[#9D7CFF] bg-[#9D7CFF]/10 px-10 py-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-wider text-[#9D7CFF] backdrop-blur-sm transition-all hover:bg-[#9D7CFF]/20">
              Access Documentation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-[#00FFFF]/30 bg-[#000000] p-8 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center justify-between border-b border-[#00FFFF]/20 pb-4">
              <span className="font-mono text-sm text-[#00FFFF]">GET /api/v1/satellite</span>
              <span className="text-xs text-cyan-100/60">Response 200</span>
            </div>
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-cyan-100/80">
              <code>{codeExample}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

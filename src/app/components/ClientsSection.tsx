import { motion } from 'motion/react';

export function ClientsSection() {
  const clients = [
    'NASA',
    'ESA',
    'JAXA',
    'ROSCOSMOS',
    'ISRO',
    'CNSA',
    'DEFENSE ADVANCED RESEARCH',
    'NATIONAL RECONNAISSANCE',
  ];

  return (
    <section className="relative border-t border-[#00FFFF]/20 bg-black py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-['Space_Grotesk'] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Trusted by Leading Organizations
          </h2>
          <p className="text-lg text-cyan-100/60">
            Serving governments and research institutions worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center border border-[#00FFFF]/20 bg-[#00FFFF]/5 p-8 backdrop-blur-sm transition-all hover:border-[#00FFFF]/40 hover:bg-[#00FFFF]/10"
            >
              <span className="text-center font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest text-cyan-100/70">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

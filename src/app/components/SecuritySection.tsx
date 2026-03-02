import { motion } from 'motion/react';
import { Shield, Lock, FileCheck, Radio } from 'lucide-react';

export function SecuritySection() {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 27001',
      description: 'Information Security Management',
    },
    {
      icon: Lock,
      title: 'ITAR Compliance',
      description: 'International Traffic in Arms',
    },
    {
      icon: FileCheck,
      title: 'FedRAMP Authorized',
      description: 'Federal Risk Authorization',
    },
    {
      icon: Radio,
      title: 'NIST 800-53',
      description: 'Security Controls Framework',
    },
  ];

  return (
    <section className="relative border-t border-[#9D7CFF]/20 bg-gradient-to-b from-[#0A0E27] to-black py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-['Space_Grotesk'] text-5xl font-bold uppercase tracking-tight text-white sm:text-6xl">
            Security & Compliance
          </h2>
          <p className="text-lg text-cyan-100/60">
            Aerospace-grade certifications and security protocols
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-[#9D7CFF]/30 bg-gradient-to-b from-[#9D7CFF]/10 to-transparent p-8 backdrop-blur-sm"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center border border-[#9D7CFF] bg-[#9D7CFF]/10">
                  <Icon className="h-8 w-8 text-[#9D7CFF]" />
                </div>
                <h3 className="mb-3 font-['Space_Grotesk'] text-2xl font-bold text-white">
                  {cert.title}
                </h3>
                <p className="text-cyan-100/60">{cert.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 border border-[#00FFFF]/30 bg-gradient-to-br from-[#00FFFF]/5 to-transparent p-10 backdrop-blur-sm"
        >
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold uppercase text-white">
                Encrypted Architecture
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">End-to-end AES-256 encryption</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Zero-knowledge authentication</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Multi-factor authorization protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Continuous security auditing</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 font-['Space_Grotesk'] text-3xl font-bold uppercase text-white">
                Data Sovereignty
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Government-only data centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Isolated network architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Jurisdiction-specific compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 h-[2px] w-4 shrink-0 bg-[#00FFFF]" />
                  <span className="text-cyan-100/70">Secure data residency guarantees</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

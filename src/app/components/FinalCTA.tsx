import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function FinalCTA() {
  return (
    <section className="relative border-t border-[#00FFFF]/20 overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1760196339465-e403a30d662e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWVwJTIwc3BhY2UlMjBzdGFycyUyMG5lYnVsYSUyMGRhcmt8ZW58MXx8fHwxNzcyMzU1NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Deep space background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27]/95 via-[#030712]/90 to-black/95" />
      </div>

      <div className="relative z-10 py-40 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-8 font-['Space_Grotesk'] text-6xl font-bold uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
              Build Above
              <br />
              the Atmosphere.
            </h2>
            <p className="mb-12 text-xl text-cyan-100/70">
              Partner with ORBITAL to deploy mission-critical infrastructure
              <br />
              where precision and reliability are non-negotiable.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="border-2 border-[#00FFFF] bg-[#00FFFF]/10 px-12 py-5 font-['Space_Grotesk'] text-xl font-bold uppercase tracking-wider text-[#00FFFF] backdrop-blur-sm transition-all hover:bg-[#00FFFF]/20">
                Schedule Consultation
              </button>
              <button className="border-2 border-white/30 bg-white/5 px-12 py-5 font-['Space_Grotesk'] text-xl font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/10">
                Download Whitepaper
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

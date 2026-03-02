export function Footer() {
  const footerSections = [
    {
      title: 'Systems',
      links: ['Autonomous Deployment', 'Orbital Monitoring', 'Trajectory Optimization', 'Fleet Management'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Reference', 'Case Studies', 'Technical Papers'],
    },
    {
      title: 'Company',
      links: ['About', 'Careers', 'Partners', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'],
    },
  ];

  return (
    <footer className="relative border-t border-[#00FFFF]/20 bg-black py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <h3 className="mb-6 font-['Space_Grotesk'] text-4xl font-bold uppercase tracking-tight text-white">
              Orbital.
            </h3>
            <p className="mb-6 text-sm text-cyan-100/60">
              Redefining orbital infrastructure for governments and research institutions worldwide.
            </p>
            <div className="text-sm text-cyan-100/60">
              <div>Headquarters:</div>
              <div className="text-white">Cape Canaveral, FL</div>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 font-['Space_Grotesk'] text-sm font-bold uppercase tracking-widest text-[#00FFFF]">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cyan-100/60 transition-colors hover:text-[#00FFFF]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-[#00FFFF]/20 pt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="text-sm text-cyan-100/60">
              © 2026 ORBITAL. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-cyan-100/60">
              <a href="#" className="transition-colors hover:text-[#00FFFF]">
                Export Control Notice
              </a>
              <a href="#" className="transition-colors hover:text-[#00FFFF]">
                ITAR Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

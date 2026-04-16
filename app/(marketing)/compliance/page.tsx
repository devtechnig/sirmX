export default function CompliancePage() {
  return (
    <main className="pt-32">
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
               Regulatory Coverage
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Deep Jurisdiction Intelligence.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">
              sirmX provides unified visibility into the entire regulatory ecosystem of the Federal Republic of Nigeria. From banking directives to data privacy mandates, we track it all.
            </p>
          </div>
        </div>
      </section>

      {/* Agency Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-12">Monitored Agencies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "CBN", title: "Central Bank of Nigeria", desc: "Monitaries, Lending & FX" },
              { name: "FIRS", title: "Federal Inland Revenue", desc: "VAT, CIT & Stamp Duty" },
              { name: "SEC", title: "Securities & Exchange", desc: "Cap Markets & Crypto" },
              { name: "NCC", title: "Communications Comm.", desc: "Telco & Tech Policy" },
              { name: "NAFDAC", title: "Food & Drug Control", desc: "Supply Chain & Safety" },
              { name: "NIMC", title: "Identity Management", desc: "Privacy & Data Access" },
              { name: "EFCC", title: "Economic Crimes", desc: "AML & Financial Crimes" },
              { name: "PENCOM", title: "Pension Commission", desc: "Retirement Policy" }
            ].map((agency, i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                <div className="font-black text-primary text-2xl mb-2">{agency.name}</div>
                <h4 className="font-bold text-sm text-on-surface mb-2">{agency.title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{agency.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-on-surface mb-8 tracking-tight">Standardized Frameworks</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-10">
                sirmX doesn't just track agencies; we map their directives to global and domestic standards, allowing you to run cross-jurisdictional gap analyses instantly.
              </p>
              <div className="space-y-6">
                <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-primary">
                  <h4 className="font-bold mb-1">NDPR Lifecycle</h4>
                  <p className="text-sm text-on-surface-variant">Automated privacy impact assessments and breach reporting.</p>
                </div>
                <div className="p-6 bg-surface-container-high rounded-xl border-l-4 border-primary">
                  <h4 className="font-bold mb-1">BOFIA 2020 Compliance</h4>
                  <p className="text-sm text-on-surface-variant">Real-time monitoring of Banks and Other Financial Institutions Act updates.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary rounded-3xl p-12 text-on-primary shadow-2xl shadow-primary/20 transition-all duration-500">
               <h3 className="text-2xl font-bold mb-6">Automation Coverage</h3>
               <div className="space-y-4">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-80">
                    <span>Banking & Finance</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 bg-on-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-on-primary w-full"></div>
                  </div>
                  
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-80 mt-4">
                    <span>Telecommunications</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 bg-on-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-on-primary w-[95%]"></div>
                  </div>
 
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest opacity-80 mt-4">
                    <span>Energy & Healthcare</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 bg-on-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-on-primary w-[80%]"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

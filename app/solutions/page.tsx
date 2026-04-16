import Image from "next/image";

export default function SolutionsPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Sector Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-on-background tracking-tighter leading-tight mb-8">
              Tailored Compliance for Every Industry
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
              Navigate the complexities of global regulation with precision. sirmX delivers automated, intelligent risk management frameworks customized for your specific sector's unique demands.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="primary-gradient text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
                Explore Frameworks
              </button>
              <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-colors">
                View All Industries
              </button>
            </div>
          </div>
        </div>
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-10">
          <Image
            alt="Abstract architectural geometric lines"
            className="object-cover w-full h-full grayscale mix-blend-multiply"
            src="/images/regulation-visual.png"
            width={800}
            height={800}
          />
        </div>
      </section>

      {/* Industry Grid Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-on-surface mb-4">Vertical Specialization</h2>
            <p className="text-on-surface-variant max-w-xl">
              Deep integration and automated reporting for the world's most regulated sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Fintech */}
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full border border-outline-variant/10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">account_balance</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Fintech</h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Managing AML/KYC requirements across multiple jurisdictions while maintaining lightning-fast transaction speeds.
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                <p className="text-sm font-medium mt-1">Real-time ledger auditability and automated SAR filings.</p>
              </div>
            </div>
            {/* Healthcare */}
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full border border-outline-variant/10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">health_and_safety</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare</h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Protecting PII/PHI under HIPAA and GDPR while enabling interoperability across diverse provider networks.
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                <p className="text-sm font-medium mt-1">Zero-trust data silos with granular access governance.</p>
              </div>
            </div>
            {/* Manufacturing */}
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full border border-outline-variant/10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">factory</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Supply chain transparency and compliance with ESG regulations and worker safety standards globally.
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                <p className="text-sm font-medium mt-1">Tier-N supplier risk mapping and impact reporting.</p>
              </div>
            </div>
            {/* Tech Enterprises */}
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col h-full border border-outline-variant/10 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">cloud_done</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Tech Enterprises</h3>
              <p className="text-sm text-on-surface-variant mb-6 flex-grow">
                Scaling infrastructure across borders while navigating fragmented data localization and AI ethics laws.
              </p>
              <div className="pt-6 border-t border-outline-variant/10">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Solution</span>
                <p className="text-sm font-medium mt-1">Unified policy engine for cross-border data transfer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Based Solutions (Bento Style) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight mb-4">Solutions for Every Stakeholder</h2>
            <p className="text-on-surface-variant text-lg">One platform, tailored views for the roles that drive your organization.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GRC Officers */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 border border-outline-variant/5 shadow-sm transition-all hover:-translate-y-1">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">monitoring</span>
                <h3 className="text-2xl font-bold mb-4">GRC Officers</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Centralize risk assessments and automate the collection of evidence for audits. Turn compliance from a cost center into a competitive advantage.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Automated Audit
                    Trails
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Risk Heatmapping
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">security</span>
              </div>
            </div>
            {/* Legal Teams */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 border border-outline-variant/5 shadow-sm transition-all hover:-translate-y-1">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">gavel</span>
                <h3 className="text-2xl font-bold mb-4">Legal Teams</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Monitor regulatory changes in real-time. Map legal requirements directly to technical controls without manual translation.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Regulatory horizon
                    scanning
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Contract compliance AI
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">description</span>
              </div>
            </div>
            {/* Operations */}
            <div className="group relative overflow-hidden rounded-2xl bg-white p-10 border border-outline-variant/5 shadow-sm transition-all hover:-translate-y-1">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-3xl text-primary mb-6">settings_suggest</span>
                <h3 className="text-2xl font-bold mb-4">Operations</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Embed compliance into daily workflows. Reduce friction for frontline staff while ensuring 100% adherence to internal policies.
                </p>
                <ul className="mt-8 space-y-3">
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Seamless API
                    integrations
                  </li>
                  <li className="flex items-center text-sm font-medium">
                    <span className="material-symbols-outlined text-primary mr-2 text-lg">check_circle</span> Real-time alert
                    systems
                  </li>
                </ul>
              </div>
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-[120px]">lan</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full md:w-1/2 p-12 md:p-16 flex flex-col justify-center text-white">
              <span className="text-primary-fixed font-bold text-sm tracking-[0.2em] uppercase mb-4">Success Story</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Nigerian Fintech Leader achieves 40% reduction in audit cycle times.
              </h2>
              <p className="text-primary-fixed/80 text-lg mb-8">
                Learn how sirmX helped one of Nigeria's fastest-growing fintechs scale across Africa while maintaining perfect compliance posture.
              </p>
              <div>
                <a className="inline-flex items-center font-bold text-white group" href="#">
                  Read full case study
                  <span className="material-symbols-outlined ml-2 transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 min-h-[400px] relative">
              <Image
                alt="Sleek glass skyscraper reflecting a bright blue sky"
                className="absolute inset-0 w-full h-full object-cover"
                src="/images/industry-visual.png"
                fill
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-8">Ready to secure your industry footprint?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Join over 500 global enterprises that trust sirmX to handle the burden of regulatory change.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="primary-gradient text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-105 transition-transform">
              Get Started Today
            </button>
            <button className="flex items-center font-bold text-primary hover:text-primary-container transition-colors">
              Schedule a Strategy Call <span className="material-symbols-outlined ml-2">calendar_month</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

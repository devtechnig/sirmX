export default function PricingPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
          Pricing & Plans
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-emerald-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
          Compliance Plans for Every Stage
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed">
          Scale your regulatory intelligence with a framework built for precision. Choose the path that matches your operational
          complexity.
        </p>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col border border-outline-variant/10">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Starter</h3>
            <p className="text-sm text-on-surface-variant mb-8 h-10">
              Essential tools for emerging startups navigating initial compliance.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-on-surface">₦150,000</span>
              <span className="text-on-surface-variant text-sm font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Up to 3 active projects
              </li>
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Standard regulatory feeds
              </li>
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Basic audit trail logging
              </li>
            </ul>
            <button className="w-full py-4 rounded-lg bg-surface-container-highest text-on-surface font-bold hover:bg-surface-container-high transition-colors">
              Start Free Trial
            </button>
          </div>
          {/* Professional Tier (Featured) */}
          <div className="primary-gradient p-10 rounded-xl flex flex-col text-white whisper-shadow relative scale-105 z-10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-fixed text-on-primary-fixed px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase">
              Recommended
            </div>
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-white/80 mb-8 h-10">
              Comprehensive intelligence for established firms with high-volume regulatory needs.
            </p>
            <div className="mb-8">
              <span className="text-5xl font-extrabold">₦450,000</span>
              <span className="text-white/70 text-sm font-medium">/mo</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-sm">
                <span
                  className="material-symbols-outlined text-primary-fixed text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Unlimited active projects
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span
                  className="material-symbols-outlined text-primary-fixed text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Real-time global regulatory alerts
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span
                  className="material-symbols-outlined text-primary-fixed text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                AI-powered gap analysis
              </li>
              <li className="flex items-start gap-3 text-sm">
                <span
                  className="material-symbols-outlined text-primary-fixed text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                Collaborative workflows
              </li>
            </ul>
            <button className="w-full py-4 rounded-lg bg-white text-primary font-bold hover:bg-surface-bright transition-all shadow-lg">
              Get Started Now
            </button>
          </div>
          {/* Enterprise Tier */}
          <div className="bg-surface-container-low p-8 rounded-xl flex flex-col border border-outline-variant/10">
            <h3 className="text-xl font-bold text-emerald-900 mb-2">Enterprise</h3>
            <p className="text-sm text-on-surface-variant mb-8 h-10">
              Tailored framework for global organizations requiring custom integrations.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold text-on-surface">Custom</span>
            </div>
            <ul className="space-y-4 mb-10 flex-grow">
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Dedicated compliance officer
              </li>
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                API & ERP Direct Integrations
              </li>
              <li className="flex items-start gap-3 text-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                Custom data residency options
              </li>
            </ul>
            <button className="w-full py-4 rounded-lg bg-emerald-900 text-white font-bold hover:bg-emerald-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">Feature Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="py-6 px-4 font-manrope font-bold text-on-surface-variant text-sm uppercase tracking-wider">
                  Features
                </th>
                <th className="py-6 px-4 font-manrope font-bold text-emerald-900 text-center">Starter</th>
                <th className="py-6 px-4 font-manrope font-bold text-primary text-center bg-primary/5 rounded-t-xl">
                  Professional
                </th>
                <th className="py-6 px-4 font-manrope font-bold text-emerald-900 text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 text-sm font-medium">Regulatory Intelligence Feeds</td>
                <td className="py-6 px-4 text-center text-sm">Domestic Only</td>
                <td className="py-6 px-4 text-center text-sm font-bold bg-primary/5">Global Access</td>
                <td className="py-6 px-4 text-center text-sm">Global + Custom</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 text-sm font-medium">AI Analysis Limits</td>
                <td className="py-6 px-4 text-center text-sm">10/mo</td>
                <td className="py-6 px-4 text-center text-sm font-bold bg-primary/5">Unlimited</td>
                <td className="py-6 px-4 text-center text-sm">Unlimited</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 text-sm font-medium">Team Seats</td>
                <td className="py-6 px-4 text-center text-sm">3 Members</td>
                <td className="py-6 px-4 text-center text-sm font-bold bg-primary/5">15 Members</td>
                <td className="py-6 px-4 text-center text-sm">Unlimited</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 text-sm font-medium">Audit Reports</td>
                <td className="py-6 px-4 text-center text-sm">Basic PDF</td>
                <td className="py-6 px-4 text-center text-sm font-bold bg-primary/5">Advanced Interactive</td>
                <td className="py-6 px-4 text-center text-sm">Custom Branded</td>
              </tr>
              <tr className="hover:bg-surface-container-low transition-colors">
                <td className="py-6 px-4 text-sm font-medium">Response SLA</td>
                <td className="py-6 px-4 text-center text-sm text-on-surface-variant/50">—</td>
                <td className="py-6 px-4 text-center text-sm font-bold bg-primary/5">12 Hours</td>
                <td className="py-6 px-4 text-center text-sm">1 Hour Priority</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-6 mb-32">
        <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="p-6 bg-surface-container-low rounded-xl">
            <h4 className="font-bold text-emerald-900 mb-2">Can we switch plans at any time?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Yes, you can upgrade or downgrade your plan directly from your dashboard. Pro-rated charges will apply to your next
              billing cycle.
            </p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-xl">
            <h4 className="font-bold text-emerald-900 mb-2">How does the AI Analysis token system work?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Starter plans include 10 tokens per month for deep regulatory impact analysis. Professional and Enterprise tiers
              enjoy unlimited processing for all documents.
            </p>
          </div>
          <div className="p-6 bg-surface-container-low rounded-xl">
            <h4 className="font-bold text-emerald-900 mb-2">Is my data secure and compliant?</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              sirmX is SOC2 Type II and GDPR compliant. We use AES-256 encryption at rest and TLS 1.3 in transit to ensure your
              sensitive data is always protected.
            </p>
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="relative overflow-hidden rounded-3xl bg-emerald-900 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Need a custom framework for your global team?</h2>
            <p className="text-emerald-100 text-lg mb-0">
              Our enterprise architects can build a bespoke regulatory monitoring environment tailored to your specific
              jurisdictional requirements.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-fixed-dim transition-all text-center">
              Talk to an Architect
            </button>
            <button className="border-2 border-white/20 hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all text-center">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

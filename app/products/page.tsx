import Image from "next/image";

export default function ProductsPage() {
  return (
    <main className="mt-24">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold tracking-widest uppercase mb-8">
          <span className="material-symbols-outlined text-sm">verified</span>
          Next-Gen Compliance
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-tight">
          The Engine of <br /> Modern Compliance
        </h1>
        <p className="text-on-surface-variant max-w-2xl text-lg md:text-xl leading-relaxed mb-12">
          A sovereign intelligence framework designed to automate the complexities of global regulatory mandates. Transform static data into proactive strategy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="primary-gradient text-white px-8 py-4 rounded-xl font-bold tracking-tight shadow-lg">
            Explore Core Modules
          </button>
          <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold tracking-tight hover:bg-surface-container-highest transition-colors">
            Documentation
          </button>
        </div>
        <div className="mt-20 w-full rounded-3xl overflow-hidden shadow-2xl bg-surface-container-low border border-outline-variant/10">
          <Image
            alt="Product Dashboard"
            className="w-full aspect-[21/9] object-cover opacity-90"
            src="/images/hero-dashboard.png"
            width={1200}
            height={514}
          />
        </div>
      </section>

      {/* Feature Deep-Dives: Smart Monitoring */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Module 01</div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 leading-tight">Smart Monitoring</h2>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Continuous oversight across global regulatory bodies. Our AI-driven engine listens to updates in real-time, mapping shifts to your specific business architecture instantly.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Multi-jurisdictional radar across 200+ regions</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Semantic delta analysis for regulatory shifts</span>
              </li>
            </ul>
          </div>
          <div className="relative rounded-3xl overflow-hidden bg-surface-container-low p-4">
            <Image
              alt="Monitoring Feed"
              className="rounded-2xl shadow-xl w-full aspect-square object-cover"
              src="/images/regulation-visual.png"
              width={600}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Feature Deep-Dives: Automated Extraction */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden bg-surface p-4">
            <Image
              alt="Data Extraction Visualization"
              className="rounded-2xl shadow-xl w-full aspect-square object-cover"
              src="/images/regulation-visual.png"
              width={600}
              height={600}
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Module 02</div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 leading-tight">Automated Extraction</h2>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Convert thousands of pages of unstructured PDF mandates into actionable data points. Our extraction layer understands legal nuance, not just keywords.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span>99.8% accuracy on complex legal clause parsing</span>
              </li>
              <li className="flex items-start gap-3 text-on-surface">
                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                <span>Direct mapping to internal policy frameworks</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Feature Deep-Dives: Intelligent Alerts */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-primary font-bold text-sm tracking-widest uppercase mb-4">Module 03</div>
            <h2 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-6 leading-tight">Intelligent Alerts</h2>
            <p className="text-on-surface-variant mb-8 text-lg leading-relaxed">
              Never miss a deadline. Receive context-aware notifications that prioritize impact, risk level, and required remedial actions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="text-2xl font-bold text-primary mb-1">0ms</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">Latency</div>
              </div>
              <div className="p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/10">
                <div className="text-2xl font-bold text-primary mb-1">Low</div>
                <div className="text-xs text-on-surface-variant uppercase font-bold tracking-tighter">False Positives</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-surface-container-high rounded-3xl p-8 shadow-inner">
              <div className="bg-white p-6 rounded-2xl shadow-xl border-l-4 border-emerald-600 mb-4 scale-105">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-emerald-900">High Priority Alert</span>
                  <span className="text-xs bg-error-container text-on-error-container px-2 py-0.5 rounded">Critical</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-3">
                  CBN Circular Amendment: Structural shift in FX Guidelines requires immediate policy review.
                </p>
                <button className="text-xs font-bold text-primary flex items-center gap-1">
                  Take Action <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg opacity-60 border-l-4 border-slate-300">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-emerald-900">Scheduled Audit</span>
                  <span className="text-xs bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded">Routine</span>
                </div>
                <p className="text-sm text-on-surface-variant">Quarterly compliance reporting for APAC operations commencing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <Image
            alt="Integration Background"
            className="w-full h-full object-cover"
            src="/images/regulation-visual.png"
            fill
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 tracking-tight">Fits Your Workflow Like a Glove</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">api</span>
              </div>
              <span className="font-bold text-sm tracking-tight">Universal API</span>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <span className="font-bold text-sm tracking-tight">Slack & Teams</span>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">terminal</span>
              </div>
              <span className="font-bold text-sm tracking-tight">CLI Engine</span>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-3xl">cloud_sync</span>
              </div>
              <span className="font-bold text-sm tracking-tight">Cloud Native</span>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">Security & Global Trust</h2>
            <p className="text-on-surface-variant text-lg">
              We maintain the highest standards of data integrity and privacy, ensuring your intelligence framework is as secure as it is smart.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">lock</span>
              <h3 className="text-xl font-bold mb-4">Military Grade Encryption</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                AES-256 encryption at rest and TLS 1.3 in transit. Your data is your own.
              </p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">policy</span>
              <h3 className="text-xl font-bold mb-4">Zero Trust Architecture</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Strict identity verification for every person and device attempting to access resources.
              </p>
            </div>
            <div className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">security</span>
              <h3 className="text-xl font-bold mb-4">Global Compliance</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">SOC2 Type II, ISO 27001, and GDPR compliant by design.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-surface-container-high rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-primary-fixed opacity-10 rounded-full blur-3xl"></div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6 tracking-tight">
              Ready to architect your compliance future?
            </h2>
            <p className="text-on-surface-variant text-lg mb-8">
              Join the world's most sophisticated regulatory teams and start your transformation today.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="primary-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg scale-95 active:opacity-80 transition-transform">
                Get Started Now
              </button>
              <button className="text-emerald-900 px-10 py-5 rounded-2xl font-bold text-lg hover:underline transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
          <div className="relative z-10">
            <div className="bg-white p-4 rounded-3xl shadow-2xl border border-outline-variant/20 rotate-3">
              <Image
                alt="Security Expert"
                className="rounded-2xl w-64 h-64 object-cover"
                src="/images/industry-visual.png"
                width={256}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

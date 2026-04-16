import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
              Regulatory Intelligence for Nigeria
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8 text-primary">
              Local Compliance. <br />
              Automated.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              sirmX continuously tracks FIRS, CBN, and SEC updates, simplifying complex Nigerian regulations into actionable steps to save your business millions in avoidable fines.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-base hover:opacity-90 transition-all whisper-shadow">
                Start Free Trial
              </button>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-headline font-bold text-base hover:bg-surface-container-high transition-all">
                See How It Works
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-4 whisper-shadow border border-outline-variant/10">
              <Image
                alt="sirmX Nigerian Regulatory Dashboard"
                className="rounded-xl w-full h-auto object-cover"
                src="/images/hero-dashboard.png"
                width={800}
                height={600}
              />
              <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-2xl whisper-shadow max-w-xs border border-outline-variant/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                    notifications_active
                  </span>
                  <span className="font-bold text-sm tracking-tight">FIRS Policy Update Detected</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-primary/20 rounded-full w-full"></div>
                  <div className="h-2 bg-surface-container-high rounded-full w-3/4"></div>
                  <div className="h-2 bg-surface-container-high rounded-full w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline mb-10">
            Empowering Nigerian Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder for Nigerian Company Logos - using same visual placeholders for fidelity but context is Nigerian */}
            <div className="text-xl font-bold text-slate-400">GTCO</div>
            <div className="text-xl font-bold text-slate-400">MTN Nigeria</div>
            <div className="text-xl font-bold text-slate-400">Dangote</div>
            <div className="text-xl font-bold text-slate-400">Flutterwave</div>
            <div className="text-xl font-bold text-slate-400">Access Bank</div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-primary mb-6">The Nigerian Regulatory Maze</h2>
              <p className="text-on-surface-variant mb-8 text-lg">
                Manual tracking of circulars and policy shifts is slow and prone to error. Missing a single CBN circular or FIRS deadline can cost your business millions in Naira.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4 p-6 bg-white rounded-xl whisper-shadow">
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                    error_outline
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface">Missed Circulars</h4>
                    <p className="text-sm text-on-surface-variant">
                      Agencies release updates frequently. Don't let a buried PDF lead to a regulatory audit.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 bg-white rounded-xl whisper-shadow">
                  <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>
                    payments
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface">Avoidable Fines</h4>
                    <p className="text-sm text-on-surface-variant">
                      Stop losing revenue to late filing penalties and non-compliance fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-low rounded-3xl p-12 relative overflow-hidden">
              <Image
                alt="Nigerian Regulatory Complexity"
                className="rounded-2xl w-full h-[400px] object-cover opacity-80"
                src="/images/regulation-visual.png"
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">AI-Powered Compliance</h2>
          <p className="text-lg text-on-surface-variant max-w-3xl mx-auto">
            Our platform continuously monitors Nigerian regulatory agencies, delivering instant intelligence and clear action items.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl whisper-shadow border-t-4 border-primary">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">rss_feed</span>
            <h3 className="text-xl font-bold mb-4 text-on-surface">Continuous Tracking</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Real-time monitoring of FIRS, CBN, SEC, NCC, and NAFDAC. Never miss a policy change.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl whisper-shadow border-t-4 border-primary">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">auto_awesome_motion</span>
            <h3 className="text-xl font-bold mb-4 text-on-surface">Simplified Action</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We break down complex legal jargon into clear, step-by-step instructions for your team.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl whisper-shadow border-t-4 border-primary">
            <span className="material-symbols-outlined text-primary-container text-4xl mb-6">event_upcoming</span>
            <h3 className="text-xl font-bold mb-4 text-on-surface">Deadline Tracking</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Get instant notifications for exact compliance deadlines and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature */}
            <div className="md:col-span-8 bg-surface-container-low p-10 rounded-3xl flex flex-col justify-between">
              <div>
                <div className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined">gavel</span>
                </div>
                <h3 className="text-3xl font-extrabold text-on-surface mb-4">Federal & State Oversight</h3>
                <p className="text-on-surface-variant max-w-md">
                  From federal agencies like the CBN to state-level revenue services (LIRS, etc.), sirmX provides unified visibility.
                </p>
              </div>
              <div className="mt-12 overflow-hidden rounded-2xl">
                <Image
                  alt="Unified Compliance Visual"
                  className="w-full h-64 object-cover"
                  src="/images/industry-visual.png"
                  width={800}
                  height={256}
                />
              </div>
            </div>
            {/* Small Feature 1 */}
            <div className="md:col-span-4 bg-secondary-container p-8 rounded-3xl">
              <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-6">alarm</span>
              <h3 className="text-2xl font-extrabold text-on-secondary-container mb-4">Instant Alerts</h3>
              <p className="text-on-secondary-container/80 text-sm">
                Receive WhatsApp and Email notifications the moment a relevant agency publishes a new directive.
              </p>
            </div>
            {/* Small Feature 2 */}
            <div className="md:col-span-4 bg-surface-container p-8 rounded-3xl">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">description</span>
              <h3 className="text-2xl font-extrabold text-on-surface mb-4">Circular Summary</h3>
              <p className="text-on-surface-variant text-sm">
                Our AI summarizes long policy circulars into 3-point bullet summaries specifically for your industry.
              </p>
            </div>
            {/* Medium Feature */}
            <div className="md:col-span-8 bg-primary p-10 rounded-3xl text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                <div>
                  <h3 className="text-3xl font-extrabold mb-4">Regulatory Mapping</h3>
                  <p className="text-primary-fixed opacity-90">
                    Automatically map new Nigerian laws to your internal processes, identifying exactly what needs to change in your operations.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-primary-fixed"></div>
                    <span className="text-xs font-mono">MAP_FIRS_VAT_RULE</span>
                  </div>
                  <div className="h-1 bg-white/20 w-full mb-4"></div>
                  <div className="h-1 bg-white/20 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Intelligence Flow */}
      <section className="py-24 px-6 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-primary mb-16">How sirmX Works</h2>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-[250px] z-10">
              <div className="w-16 h-16 rounded-full bg-white whisper-shadow flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">search</span>
              </div>
              <h4 className="font-bold mb-2">Monitor</h4>
              <p className="text-xs text-on-surface-variant">Continuous crawling of government gazettes and agency portals.</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-outline-variant/30 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-[250px] z-10">
              <div className="w-16 h-16 rounded-full bg-white whisper-shadow flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">psychology</span>
              </div>
              <h4 className="font-bold mb-2">Interpret</h4>
              <p className="text-xs text-on-surface-variant">AI breaks down complex policies into clear business requirements.</p>
            </div>
            <div className="hidden md:block flex-1 h-0.5 bg-outline-variant/30 relative">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary"></div>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-[250px] z-10">
              <div className="w-16 h-16 rounded-full bg-primary text-white whisper-shadow flex items-center justify-center mb-6">
                <span className="material-symbols-outlined">task_alt</span>
              </div>
              <h4 className="font-bold mb-2">Act</h4>
              <p className="text-xs text-on-surface-variant">Instant notifications and exact compliance steps delivered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
              Ready to Secure Your Compliance?
            </h2>
            <p className="text-primary-fixed text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-90 font-medium">
              Join the leading Nigerian businesses using sirmX to stay ahead of policy changes and avoid millions in fines.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-primary px-10 py-5 rounded-2xl font-headline font-extrabold text-lg hover:bg-surface-container transition-all whisper-shadow">
                Get a Custom Demo
              </button>
              <button className="bg-transparent text-white border-2 border-white/30 px-10 py-5 rounded-2xl font-headline font-extrabold text-lg hover:bg-white/10 transition-all">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

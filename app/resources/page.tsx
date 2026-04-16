import Image from "next/image";

export default function ResourcesPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase text-primary bg-primary-fixed/20 rounded-full">
            Knowledge Hub
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-on-background mb-8 leading-[1.1]">
            Regulatory Insights & <br />
            <span className="text-primary">Compliance Guides</span>
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl font-body">
            Navigate the complex landscape of global digital regulations with curated intelligence, technical whitepapers, and
            implementation frameworks.
          </p>
        </div>
      </section>

      {/* Featured Content: Bento Style */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Large Featured Card */}
          <div className="lg:col-span-8 group relative overflow-hidden rounded-3xl bg-surface-container-low aspect-[16/10] lg:aspect-auto lg:h-[600px] flex flex-col justify-end p-10">
            <div className="absolute inset-0 z-0">
              <Image
                alt="Global Data Networks"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF4Zvr10uSKQqAH94uZocKuptC3yvoXp6mJyqrsy4Qe9RlRB8xSEdyDsTw-_6S_GQ6n2yiWcGxEoFSYO2RHR_AtgcXYXmz5CJ9aFqTAcGqO3FGXTgwkmQmqTU4ui9uuX5ChA1qcKzROa4PDuZd5Jj0Nx06FvQsL-W2CGE6gAjusZHYiPsXkfb0vqxqItnLDFW1FLEdZIxzVZA-zO1b2yp6ZDmP32mOKE8a-3y2bTiMhiEZram-pehCBNfts-pMORnq6C_yimq2yHI"
                fill
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-900/40 to-transparent"></div>
            </div>
            <div className="relative z-10 text-white max-w-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary-fixed">auto_awesome</span>
                <span className="font-bold text-sm tracking-widest uppercase text-primary-fixed">Latest Report</span>
              </div>
              <h2 className="text-4xl font-bold mb-6">2024 Global AI Governance & Compliance Trends</h2>
              <p className="text-emerald-50/80 mb-8 text-lg">
                An exhaustive 80-page deep dive into the EU AI Act, US Executive Orders, and the future of automated oversight.
              </p>
              <a
                className="inline-flex items-center gap-2 bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
                href="#"
              >
                Read Full Report
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </a>
            </div>
          </div>
          {/* Secondary Featured */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex-1 bg-surface-container-high rounded-3xl p-8 border border-outline-variant/10 flex flex-col">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4">Quick Start</span>
              <h3 className="text-2xl font-bold text-on-background mb-4">Regulatory Sandbox Implementation</h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-1">
                A developer's guide to testing compliance frameworks in isolated environments.
              </p>
              <a className="text-primary font-semibold inline-flex items-center gap-1 group" href="#">
                View Documentation
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
              </a>
            </div>
            <div className="flex-1 bg-primary rounded-3xl p-8 flex flex-col text-on-primary">
              <span className="text-primary-fixed font-bold text-xs uppercase tracking-widest mb-4">Featured Guide</span>
              <h3 className="text-2xl font-bold mb-4">FinTech Automation 2.0</h3>
              <p className="text-primary-fixed/80 text-sm mb-6 flex-1">
                Standardizing cross-border transactions under the new sirmX-Alpha protocol.
              </p>
              <a className="text-on-primary font-semibold inline-flex items-center gap-1 group" href="#">
                Download PDF
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">download</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-on-background">Latest Articles</h2>
            <p className="text-on-surface-variant mt-2">Deep dives into the intersection of technology and law.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2">
            <button className="bg-primary text-on-primary px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap">
              All Topics
            </button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-primary/10 transition-colors">
              AI & Ethics
            </button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-primary/10 transition-colors">
              Regulations
            </button>
            <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-full text-sm font-semibold whitespace-nowrap hover:bg-primary/10 transition-colors">
              Automation
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
          {/* Blog 1 */}
          <article className="group">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-container">
              <Image
                alt="Futuristic Glass Circuit Board"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvPbzhEPdFhVCK4-9oE9gHyvbm1dKJT1ZKTVJ_9smuYpkS3Ix1gGj0E-84n853LULV1ADRvcK7xv4PiJkXgJGdmHxjX-GQGW5EIYp5WsIbf4i7_p4nqaiod2htVF7SFIHcXDC4IS27VXG15_v0nwba2S7u2_RuC4qxZ3jv6_lSP8xuW5bdDMyFonqAk9OeCYBGPuaxf5ckHLjISZm-M58t1Om5xpplNh-1raJJ87fLwEPrrW7wfBgZptUDV6JLNmmRewERNyJrPUU"
                fill
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-primary">
                AI Ethics
              </div>
            </div>
            <div className="space-y-3">
              <time className="text-xs text-on-surface-variant uppercase font-medium tracking-wider">March 12, 2024</time>
              <h3 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors leading-tight">
                The Moral Calculus: Auditing Black-Box Algorithms
              </h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                How sirmX provides transparency in automated decision-making systems for Tier-1 financial institutions.
              </p>
            </div>
          </article>
          {/* Blog 2 */}
          <article className="group">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-container">
              <Image
                alt="Modern Courthouse"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd2tFBV5dW0EAJL_uyAJHBmV-wFV_vGI8oKVddeu1Gy5CCLxra1WcDIiA9vrl3qWntQ2uUKYm2gFS8UkZfJymvLy_ysjKrGyBwWwZbMLhSRf-lKTWXHc0422r-7lYfrc1zlLiOWAETdEE0tevGy0A_EjzOpzEta9AdLXFdyaJoBeC4nJmtZs1pNfAtJO0Xq-15D9x4uybQaMt5DXsle0v7SP8ZH0Xl2gz8yLTSqOIKc9fp7DIxxEUg4gUNq6MeLyeezHlC6XCLxhk"
                fill
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-primary">
                Regulations
              </div>
            </div>
            <div className="space-y-3">
              <time className="text-xs text-on-surface-variant uppercase font-medium tracking-wider">February 28, 2024</time>
              <h3 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors leading-tight">
                Navigating the 2024 SEC Disclosure Mandates
              </h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                A step-by-step framework for meeting the latest cybersecurity reporting requirements with confidence.
              </p>
            </div>
          </article>
          {/* Blog 3 */}
          <article className="group">
            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-surface-container">
              <Image
                alt="Compliance Dashboard"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvasmEtViNEQ8UGxKFJNgDik5Eehbbxzg51j5E-hYvtliRUyhH1nTaqxSBF1O-mfwDKc3hVU_AHhKng2Uyr8n9gEBuFZKZsn6OK2xuIsWRhtvahGKK_qr24Qo-7r22n2p-VmFJXjmD0T8sW3JOahOf-TDaoZY7YzA4WclfrjMYfmLIYqDgAGXwSXlwVhHPMHYEX0okeyJn7E9Z4SDseLlZzH5XlbkYH07sFFE6_vEBIflooh0w_s4QY9g3n57_jYRz1RVny8UiOp0"
                fill
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-[10px] font-bold uppercase text-primary">
                Automation
              </div>
            </div>
            <div className="space-y-3">
              <time className="text-xs text-on-surface-variant uppercase font-medium tracking-wider">February 15, 2024</time>
              <h3 className="text-xl font-bold text-on-background group-hover:text-primary transition-colors leading-tight">
                Automating the KYC Lifecycle: Beyond Onboarding
              </h3>
              <p className="text-on-surface-variant text-sm line-clamp-2">
                Moving from static verification to continuous behavioral monitoring using the sirmX engine.
              </p>
            </div>
          </article>
        </div>
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
            Browse All Insights
          </button>
        </div>
      </section>

      {/* Help Center Link: CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-surface-container-high rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl"></div>
          <div className="flex-1 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-on-background mb-6">Need Technical Support?</h2>
            <p className="text-on-surface-variant text-lg mb-8 max-w-xl">
              Access our full documentation, API references, and developer tutorials to integrate sirmX into your existing tech
              stack.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">menu_book</span>
                Help Center
              </a>
              <a
                className="bg-white text-on-background border border-outline-variant px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-surface-container transition-all"
                href="#"
              >
                <span className="material-symbols-outlined">terminal</span>
                API Documentation
              </a>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4 relative z-10">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mb-3">settings_ethernet</span>
              <p className="font-bold text-on-background">Core SDK</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mb-3">account_tree</span>
              <p className="font-bold text-on-background">Webhooks</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mb-3">shield</span>
              <p className="font-bold text-on-background">Auth Guides</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant/20">
              <span className="material-symbols-outlined text-primary mb-3">monitoring</span>
              <p className="font-bold text-on-background">Monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-7xl mx-auto px-6 py-24 mb-12">
        <div className="bg-emerald-950 rounded-[2.5rem] p-10 lg:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-emerald-100/70 mb-10 text-lg">
              Weekly regulatory roundups and compliance strategy delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                className="flex-1 bg-white/10 border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-emerald-100/50 focus:ring-2 focus:ring-primary-fixed outline-none"
                placeholder="professional@company.com"
                required
                type="email"
              />
              <button
                className="bg-primary-fixed text-on-primary-fixed px-10 py-4 rounded-2xl font-bold hover:bg-white transition-colors"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-6 text-xs text-emerald-100/40">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

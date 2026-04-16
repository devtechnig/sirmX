import Image from "next/image";

export default function DevelopersPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-[14px]">code</span> Developer Portal
          </div>
          <h1 className="font-headline text-5xl lg:text-7xl font-extrabold editorial-spacing text-on-surface leading-tight">
            Build Compliance into <br /> <span className="text-primary italic">Your Product</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
            Integrate the Sovereign Intelligence Framework into your stack. Use our production-ready endpoints for automated tracking, summarization, and regulatory extraction.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-headline font-bold shadow-xl hover:shadow-primary/20 transition-all">
              Get API Keys
            </button>
            <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-lg font-headline font-bold hover:bg-surface-variant transition-all">
              View Documentation
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full"></div>
          <div className="relative rounded-2xl bg-inverse-surface border border-outline-variant/10 p-1 overflow-hidden code-glow shadow-2xl">
            <div className="flex items-center gap-1.5 px-4 py-3 bg-inverse-surface/50 border-b border-outline-variant/10">
              <div className="w-3 h-3 rounded-full bg-error/30"></div>
              <div className="w-3 h-3 rounded-full bg-tertiary-container/30"></div>
              <div className="w-3 h-3 rounded-full bg-primary-fixed-dim/30"></div>
              <span className="ml-4 text-xs font-mono text-outline-variant">python — sirmX_quickstart.py</span>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-inverse-on-surface">
              <p>
                <span className="text-primary-fixed-dim">import</span> sirmX
              </p>
              <p className="mt-2 text-outline-variant"># Initialize the client</p>
              <p>
                client = sirmX.<span className="text-secondary-fixed">Client</span>(api_key=
                <span className="text-tertiary-fixed-dim">"sk_live_..."</span>)
              </p>
              <p className="mt-4">
                <span className="text-primary-fixed-dim">analysis</span> = client.regulations.
                <span className="text-secondary-fixed">extract</span>(
              </p>
              <p className="pl-4">
                source=<span className="text-tertiary-fixed-dim">"https://reg.gov/final-rule-2024"</span>,
              </p>
              <p className="pl-4">
                depth=<span className="text-tertiary-fixed-dim">"comprehensive"</span>,
              </p>
              <p className="pl-4">
                output_format=<span className="text-tertiary-fixed-dim">"json"</span>
              </p>
              <p>)</p>
              <p className="mt-4 text-primary-fixed">
                print<span className="text-white">(analysis.compliance_summary)</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Overview: Tonal Layering */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Core Endpoints</h2>
            <p className="text-on-surface-variant">Purpose-built for high-frequency regulatory monitoring.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Tracking */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  monitoring
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Real-time Tracking</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Monitor global jurisdictions for legislative changes in sub-100ms intervals.
              </p>
              <code className="text-[10px] bg-surface-container px-2 py-1 rounded font-mono text-primary">
                GET /v1/monitor/track
              </code>
            </div>
            {/* Summarization */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  summarize
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">AI Summarization</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Condense 500-page regulatory filings into executive bullet points automatically.
              </p>
              <code className="text-[10px] bg-surface-container px-2 py-1 rounded font-mono text-primary">
                POST /v1/analyze/summary
              </code>
            </div>
            {/* Extraction */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl hover:translate-y-[-4px] transition-transform duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  database_search
                </span>
              </div>
              <h3 className="font-headline text-xl font-bold mb-3">Entity Extraction</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Extract dates, obligations, and penalties into structured JSON objects.
              </p>
              <code className="text-[10px] bg-surface-container px-2 py-1 rounded font-mono text-primary">
                POST /v1/extract/schema
              </code>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Grid: Bento Style */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-high p-10 rounded-3xl flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">Documentation Hub</h2>
              <p className="text-on-surface-variant text-lg">
                Everything you need to integrate sirmX into your production environment, from authentication to advanced SDK
                usage.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 flex-1 min-w-[140px]">
                <span className="material-symbols-outlined text-primary">javascript</span>
                <span className="text-sm font-semibold">Node.js SDK</span>
              </div>
              <div className="flex items-center gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 flex-1 min-w-[140px]">
                <span className="material-symbols-outlined text-primary">language</span>
                <span className="text-sm font-semibold">Python SDK</span>
              </div>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-8 rounded-3xl hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined mb-4">key</span>
            <h4 className="font-bold mb-2">Authentication</h4>
            <p className="text-xs opacity-80">Bearer token & OAuth2 implementation guides.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10">
            <span className="material-symbols-outlined mb-4 text-primary">webhook</span>
            <h4 className="font-bold mb-2 text-on-surface">Webhooks</h4>
            <p className="text-xs text-on-surface-variant">Real-time event notifications for your app.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10">
            <span className="material-symbols-outlined mb-4 text-primary">speed</span>
            <h4 className="font-bold mb-2 text-on-surface">Rate Limits</h4>
            <p className="text-xs text-on-surface-variant">Tiered capacity for high-scale enterprise needs.</p>
          </div>
          <div className="bg-surface-container-high p-8 rounded-3xl border border-outline-variant/10">
            <span className="material-symbols-outlined mb-4 text-primary">security</span>
            <h4 className="font-bold mb-2 text-on-surface">Security</h4>
            <p className="text-xs text-on-surface-variant">SOC2 compliance and data encryption protocols.</p>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-outline-variant/10">
        <div className="bg-inverse-surface rounded-[40px] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
            <Image
              alt="Community Background"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHJokkNir4KcN-NXXjf5DcC1nasFIHFDeDqqYLBnK2Xf9cXIsWPnWzoTvAkOsb5iPRT3u2vhqQbLwn_8LLsmt0kMBc4a5CczR-g6ISy49IJ5NUF-cXAPDqnZTu6etM6jVvXjiNl57knj0a8WpzM9fq0hxvwDWIBmbEbpUMUmy-KlzJzTYyYhMJDTtw0y1a9C6mxfyPNCp1xuGlhUFbOJze0ymDpVgZ3csPXYaJr3msj4TSBrFTOMtwv1YJgD6N3o5nWtyudjt-lVU"
              fill
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-headline text-4xl lg:text-5xl font-bold text-white mb-8">
              Join the Sovereign Developer Community
            </h2>
            <p className="text-inverse-on-surface/70 text-lg mb-10">
              Collaborate with thousands of compliance engineers building the next generation of regulatory tech. Share insights,
              get help, and contribute to our open SDKs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2">
                <span className="material-symbols-outlined">forum</span> Join Discord
              </button>
              <button className="bg-white/10 text-white backdrop-blur-md px-8 py-4 rounded-xl font-headline font-bold flex items-center gap-2 border border-white/20">
                <span className="material-symbols-outlined">description</span> Technical Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

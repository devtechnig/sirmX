export default function ContactPage() {
  return (
    <main className="pt-32">
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-emerald-900 mb-8 leading-[1.1]">
                Let's Talk <br /> Compliance.
              </h1>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
                Whether you're a scaling fintech or a global enterprise, we have the framework to secure your regulatory future.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sales & Inquiries</h4>
                    <p className="text-on-surface-variant">hello@sirmx.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Lagos HQ</h4>
                    <p className="text-on-surface-variant text-sm">Victoria Island, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-outline-variant/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">First Name</label>
                    <input type="text" className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Ada" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Last Name</label>
                    <input type="text" className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="Okonjo" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Work Email</label>
                  <input type="email" className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="ada@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">How can we help?</label>
                  <textarea className="w-full bg-surface-container-low px-4 py-3 rounded-xl border border-outline-variant/10 focus:ring-2 focus:ring-primary outline-none transition-all h-32 resize-none" placeholder="Tell us about your regulatory challenge..."></textarea>
                </div>
                <button className="w-full primary-gradient text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

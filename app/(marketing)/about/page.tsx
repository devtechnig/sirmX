import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
              Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]">
              Automating Trust in the Nigerian Economy.
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed font-body">
              sirmX was founded to solve a critical bottleneck: the friction between rapid business innovation and complex regulatory oversight. We bridge the gap with the world's most sophisticated Sovereign Intelligence Framework.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div className="bg-surface-container-lowest p-12 rounded-[2.5rem] shadow-sm border border-outline-variant/10">
            <h2 className="text-3xl font-bold text-primary mb-6">Our Mission</h2>
            <p className="text-on-surface-variant leading-relaxed">
              To empower Nigerian industry leaders with real-time, actionable regulatory intelligence, ensuring that compliance is never a hurdle to growth, but a strategic catalyst for excellence.
            </p>
          </div>
          <div className="bg-primary p-12 rounded-[2.5rem] text-on-primary shadow-xl shadow-primary/10">
            <h2 className="text-3xl font-bold mb-6 text-on-primary">Our Vision</h2>
            <p className="text-on-primary/80 leading-relaxed">
              To define the global standard for Sovereign Intelligence, where every policy shift is automatically translated into business success, fostering a transparent and thriving African marketplace.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-on-surface mb-16 text-center text-primary">The sirmX DNA</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Uncompromising Accuracy</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                In the world of regulation, "near-misses" don't count. We pride ourselves on the 99.9% accuracy of our AI extraction engines.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">speed</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Sovereign Velocity</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Regulations move fast. We move faster. Our tracking systems monitor agency portals in sub-100ms intervals to keep you ahead.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Local Context, Global Scale</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                We understand the nuances of Nigerian business culture while maintaining global standards for data integrity and security.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-container rounded-[3rem] p-12 md:p-24 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <h2 className="text-4xl font-extrabold text-on-surface mb-8">Built by Compliance Experts, for Industry Leaders.</h2>
              <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
                Our founders spent decades navigating the corridors of the CBN, FIRS, and global tech giants. We built sirmX because we've seen the cost of non-compliance firsthand.
              </p>
              <button className="primary-gradient text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-primary/20">
                Join the Team
              </button>
            </div>
            <div className="flex-1 relative">
               <div className="aspect-square bg-outline-variant/20 rounded-3xl overflow-hidden relative rotate-3">
                 <Image 
                    src="/images/industry-visual.png"
                    alt="sirmX Leadership"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
               </div>
               <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-outline-variant/10 max-w-[200px]">
                 <p className="text-2xl font-black text-primary">50+</p>
                 <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-1">Compliance Architects</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

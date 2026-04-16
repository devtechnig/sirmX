export default function CareersPage() {
  return (
    <main className="pt-32">
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase mb-6">
            Join the Framework
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-emerald-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
            Build the Operating System for <span className="text-primary italic">Compliance</span>.
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We're looking for architects, engineers, and analysts who believe that regulation shouldn't slow down the speed of business. Help us automate trust.
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-emerald-900">Our Culture</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                At sirmX, we value deep technical ownership and sovereign thinking. We're a remote-first team with a bias toward action and a passion for solving the world's most boring (but important) problems.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-2">Remote First</h4>
                  <p className="text-sm text-on-surface-variant">Work from anywhere. Global talent fuels our growth.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Bias for Action</h4>
                  <p className="text-sm text-on-surface-variant">We move fast, break outdated processes, and ship daily.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-outline-variant/10">
              <div className="space-y-4">
                <div className="h-4 bg-primary/20 rounded-full w-3/4"></div>
                <div className="h-4 bg-surface-container-high rounded-full w-full"></div>
                <div className="h-4 bg-surface-container-high rounded-full w-5/6"></div>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10"></div>
                <div className="w-12 h-12 rounded-full bg-secondary/10"></div>
                <div className="w-12 h-12 rounded-full bg-tertiary/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-on-surface mb-12">Open Opportunities</h2>
          <div className="space-y-4">
            {[
              { title: "Senior AI Engineer", team: "Core Intelligence", type: "Full-time" },
              { title: "Compliance Data Analyst", team: "Regulatory Mapping", type: "Full-time" },
              { title: "Frontend Software Engineer", team: "Product Experience", type: "Full-time" },
              { title: "Legal Content Strategist", team: "Policy Summarization", type: "Contract" }
            ].map((role, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-8 bg-surface-container-lowest rounded-2xl border border-outline-variant/5 shadow-sm hover:translate-x-2 transition-transform cursor-pointer">
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-1">{role.title}</h3>
                  <p className="text-sm text-on-surface-variant">{role.team} • {role.type}</p>
                </div>
                <button className="mt-4 md:mt-0 px-6 py-2 rounded-lg border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

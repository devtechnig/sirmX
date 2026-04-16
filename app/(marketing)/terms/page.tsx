export default function TermsPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-900 mb-8 tracking-tighter">Terms of Service</h1>
        <p className="text-on-surface-variant font-medium mb-12">Last Updated: April 16, 2024</p>
        
        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Acceptance of Terms</h2>
            <p className="text-on-surface-variant leading-relaxed">
              By accessing the sirmX Intelligence Framework, you agree to be bound by these Terms of Service and all applicable laws and regulations in the Federal Republic of Nigeria and other jurisdictions where we operate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. Service Scope</h2>
            <p className="text-on-surface-variant leading-relaxed">
              sirmX provides AI-powered regulatory tracking and extraction. While we strive for absolute accuracy, the framework is a decision-support tool and does not constitute legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Prohibited Use</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Users may not attempt to reverse-engineer the sirmX extraction engines or use the framework for any illegal regulatory circumventing activities.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

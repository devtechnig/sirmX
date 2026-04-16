export default function PrivacyPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-900 mb-8 tracking-tighter">Privacy Policy</h1>
        <p className="text-on-surface-variant font-medium mb-12">Last Updated: April 16, 2024</p>
        
        <div className="prose prose-slate max-w-none space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">1. Data Collection</h2>
            <p className="text-on-surface-variant leading-relaxed">
              We collect information to provide better services to all our users. This includes account information, usage data, and regulatory feed preferences specifically tailored to your organization's jurisdictional requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">2. NDPR Compliance</h2>
            <p className="text-on-surface-variant leading-relaxed">
              As a Nigerian-founded intelligence framework, sirmX is strictly compliant with the Nigeria Data Protection Regulation (NDPR). We ensure all PII and sensitive organizational data is stored with military-grade encryption and processed with explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-on-surface mb-4">3. Data Usage</h2>
            <p className="text-on-surface-variant leading-relaxed">
              Your data is used solely to enhance the accuracy of regulatory mapping and to provide critical alerts. We do not sell your data to third parties.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

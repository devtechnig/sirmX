export default function SecurityPage() {
  return (
    <main className="pt-32">
      <section className="mb-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
            <span className="material-symbols-outlined text-4xl">shield_lock</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 max-w-4xl mx-auto leading-[1.1]">
            Enterprise-Grade <br /> <span className="text-primary">Fortress Architecture</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Your regulatory data is protected by the same encryption standards used by global financial institutions. Trust is hard-coded into our framework.
          </p>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-24 bg-inverse-surface text-inverse-on-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Technical Safeguards</h2>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">lock</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">End-to-End Encryption</h4>
                    <p className="text-inverse-on-surface/70 text-sm leading-relaxed">
                      Data is encrypted using AES-256 at rest and TLS 1.3 in transit. We use hardware security modules (HSM) for key management.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">hub</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">Isolated Workspaces</h4>
                    <p className="text-inverse-on-surface/70 text-sm leading-relaxed">
                      Each organization's data is logically isolated in its own secure silo, ensuring zero cross-tenant data leakage.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-primary">MFA & SSO</h4>
                    <p className="text-inverse-on-surface/70 text-sm leading-relaxed">
                      Integration with Okta, Azure AD, and mandatory Multi-Factor Authentication for all administrative access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-white/5 rounded-3xl border border-white/10 p-8 flex flex-col justify-center gap-4 overflow-hidden shadow-2xl code-glow">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs font-mono opacity-50 uppercase tracking-widest">SYSTEM_ENCRYPTION_ACTIVE</span>
                </div>
                <div className="space-y-2 opacity-30">
                  <div className="h-2 bg-white rounded-full w-full"></div>
                  <div className="h-2 bg-white rounded-full w-3/4"></div>
                  <div className="h-2 bg-white rounded-full w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-on-surface mb-12">Global Security Compliance</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale">
            <div className="text-xl font-black italic text-on-surface">SOC2 Type II</div>
            <div className="text-xl font-black italic text-on-surface">ISO 27001</div>
            <div className="text-xl font-black italic text-on-surface">GDPR</div>
            <div className="text-xl font-black italic text-on-surface">NDPR</div>
          </div>
        </div>
      </section>
    </main>
  );
}

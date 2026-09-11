export const metadata = {
  title: "RizzScript — Write Scripts With Rizz | TikTok Shop Creators",
  description: "Teleprompter + script generator + audio routing + recording in one app. Built for TikTok Shop creators who post daily.",
};

const features = [
  { s: "01", t: "Script Generator", d: "AI writes your product scripts using hooks, curiosity loops, and proven formats. Under 30 seconds." },
  { s: "02", t: "Teleprompter", d: "Scroll your script while recording. Speed control, mirror mode, adjustable text size." },
  { s: "03", t: "Audio Routing", d: "Connect any mic — phone, lavalier, USB, Bluetooth. Studio-quality from your phone." },
  { s: "04", t: "Record in App", d: "Teleprompter + camera + audio in one screen. Stop switching between 5 apps." },
  { s: "05", t: "Export Anywhere", d: "Export to CapCut, Premiere, or auto-edit. Your choice." },
  { s: "06", t: "Product Scanner", d: "Scans your TikTok Shop showcase and recommends products to feature next." },
];

const pain = [
  { t: "You write scripts in Notes app", d: "Copying between apps, losing drafts, no structure." },
  { t: "You memorize before recording", d: "Wasting takes because you forgot the hook." },
  { t: "Your audio sounds bad", d: "No mic control. No lavalier support." },
  { t: "You edit separately", d: "Exporting footage, losing context, starting over." },
];

export default function RizzScript() {
  return (
    <main className="min-h-screen w-full bg-[#0B1426] text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1426]/90 backdrop-blur-xl border-b border-white/5">
        <div className="mx-auto flex items-center justify-between px-6 py-3" style={{ maxWidth: "64rem" }}>
          <span className="text-sm font-bold tracking-wider text-white">Rizz<span className="text-[#a855f7]">Script</span></span>
          <a href="#waitlist" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#a855f7] text-white text-sm font-semibold hover:bg-[#7c3aed] transition-all">Join Waitlist</a>
        </div>
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center px-6" style={{ minHeight: "85vh", paddingTop: "6rem" }}>
        <div className="mesh-bg" />
        <div className="relative z-10 mx-auto space-y-6" style={{ maxWidth: "44rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#a855f7] border border-[#a855f7]/20 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#a855f7] animate-pulse" />
            Built for TikTok Shop Creators
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            Your scripts.<br /><span className="text-[#a855f7]">Your rizz.</span><br />One app.
          </h1>
          <p className="text-xl text-white/50 leading-relaxed mx-auto max-w-lg">
            Stop switching between 5 apps. Script it, prompt it, record it — all from your phone.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#waitlist" className="cta-pulse inline-flex items-center px-10 py-4 rounded-xl bg-[#a855f7] text-white font-semibold text-lg hover:bg-[#7c3aed] transition-all hover:scale-105">Join the Waitlist</a>
            <a href="#how" className="inline-flex items-center px-8 py-4 rounded-xl border border-white/10 text-white/60 font-medium hover:border-[#a855f7]/40 hover:text-[#a855f7] transition-all">How It Works</a>
          </div>
          <p className="text-sm text-white/30">Free beta · No credit card · 200 spots</p>
        </div>
      </section>
{/*P2*/}
      <section className="py-20 px-6 relative overflow-hidden" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-4">Sound Familiar?</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">You&apos;re doing this every day:</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pain.map((p, i) => (
              <div key={i} className="bg-[#0f1a2e] border border-[#a855f7]/10 rounded-2xl p-8">
                <h3 className="text-lg font-semibold mb-2 text-white/80">{p.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 px-6 relative overflow-hidden">
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "56rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-4">The Solution</div>
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">One app. <span className="text-[#a855f7]">Every step.</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#0f1a2e] border border-[#a855f7]/10 rounded-2xl p-8 hover:border-[#a855f7]/30 transition-all duration-500">
                <span className="text-4xl font-light text-[#a855f7]/20">{f.s}</span>
                <h3 className="text-lg font-semibold mt-4 mb-2">{f.t}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-24 px-6 relative overflow-hidden text-center" style={{ background: "#0d1520" }}>
        <div className="mesh-bg" />
        <div className="mx-auto" style={{ maxWidth: "32rem" }}>
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#a855f7] mb-4">Beta Access</div>
          <h2 className="text-3xl md:text-4xl font-light mb-6">Get RizzScript Before Everyone Else</h2>
          <p className="text-white/40 mb-8 text-lg">200 beta spots. Free. No credit card.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <input type="email" placeholder="your@email.com" className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0f1a2e] border border-[#a855f7]/20 text-white placeholder-white/20 focus:border-[#a855f7]/50 focus:outline-none" style={{ minWidth: "240px" }} />
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#a855f7] text-white font-semibold hover:bg-[#7c3aed] transition-all hover:scale-105">Join Waitlist</button>
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-white/5 text-center text-white/20 text-xs">
        RizzScript — Built by <a href="https://github.com/ypc-ux" className="text-[#a855f7]/50 hover:text-[#a855f7]">Julius Young III</a> · Quartermaster AI Studio
      </footer>
    </main>
  );
}

export default function Proposal() {
  const Q = [
    { id: '1', c: 'Geo-Targeted', d: 'Within your service area.' },
    { id: '2', c: 'Homeowner Verified', d: 'AI confirms ownership.' },
    { id: '3', c: 'Active Intent', d: 'Seeking roofing services.' },
    { id: '4', c: '90-Day Timeline', d: 'Project within 90 days.' },
    { id: '5', c: 'Financial Ready', d: 'Budget confirmed.' },
    { id: '6', c: 'Appointment Booked', d: 'On your calendar.' },
  ];
  const S = [
    { s: '01', t: 'We Run Your Ads', d: 'Done-for-you Meta and Google ads, geo-targeted.' },
    { s: '02', t: 'AI Calls in 5 Min', d: 'Our AI calls the lead within 5 minutes.' },
    { s: '03', t: 'Pre-Qualify', d: 'Verifies ownership, project, service area.' },
    { s: '04', t: 'Book on Calendar', d: 'Date, time, address confirmed.' },
  ];
  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="fade-in"><span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Partnership Proposal</span></div>
          <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">Your Competitor Already<br/><span className="text-[#0693e3]">Booked the Lead</span><br/>You Missed.</h1>
          <p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">Speed-to-lead is the #1 predictor of who closes the job. Average contractor calls back in 42 minutes. We call in 5. You just show up and sell.</p>
          <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#pricing" className="cta-pulse inline-flex items-center px-8 py-4 rounded-xl bg-emerald-500 text-white font-semibold text-lg hover:bg-emerald-600 transition-all hover:scale-105">Pay $2,000 Setup</a>
            <a href="#how-it-works" className="inline-flex items-center px-8 py-4 rounded-xl border border-neutral-700 text-neutral-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-all">How It Works</a>
          </div>
        </div>
      </section>
      <section className="py-24"><div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">The Problem with Traditional Lead Gen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">💸</span><h3 className="text-xl font-semibold">Shared Leads</h3><p className="text-neutral-400 leading-relaxed">Same lead sent to 5 contractors.</p></div>
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">🐌</span><h3 className="text-xl font-semibold">Slow Follow-Up</h3><p className="text-neutral-400 leading-relaxed">Industry avg: 42 min speed-to-lead.</p></div>
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">🎲</span><h3 className="text-xl font-semibold">No Quality Control</h3><p className="text-neutral-400 leading-relaxed">Form fills from tire-kickers.</p></div>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24" id="how-it-works"><div className="max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">The Solution</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">We Sell Appointments, Not Leads.</h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-16">Every lead is pre-qualified, pre-educated, and pre-booked on your calendar.</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">{S.map((item,i) => (
          <div key={i} className="glow-card p-8 flex gap-6"><span className="text-5xl font-bold text-emerald-500/20 shrink-0">{item.s}</span><div><h3 className="text-xl font-semibold mb-2">{item.t}</h3><p className="text-neutral-400 leading-relaxed">{item.d}</p></div></div>
        ))}</div>
      </div></section>
{/*CONTINUED*/}
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24" id="qualified-leads"><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">Lead Quality</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Counts as a <span className="text-emerald-400">Qualified Lead</span></h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">6 checkpoints. Does not qualify = you do not pay.</p>
        </div>
        <div className="glow-card overflow-hidden"><table className="comparison-table">
          <thead><tr><th className="w-16">#</th><th>Criteria</th><th>Details</th></tr></thead>
          <tbody>{Q.map((r) => (<tr key={r.id}><td className="text-emerald-400 font-bold">{r.id}</td><td className="font-semibold">{r.c}</td><td className="text-neutral-400">{r.d}</td></tr>))}</tbody>
        </table></div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">Financial Qualification</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Verify They Can <span className="text-emerald-400">Actually Pay</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">🛡️</span><h3 className="text-xl font-semibold">Insurance Claims</h3><p className="text-neutral-400 leading-relaxed">Verify active coverage. Highest-converting leads in roofing.</p></div>
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">🏠</span><h3 className="text-xl font-semibold">Home Equity</h3><p className="text-neutral-400 leading-relaxed">Verified through property data. They can finance or pay cash.</p></div>
          <div className="glow-card p-8 space-y-4"><span className="text-4xl">💳</span><h3 className="text-xl font-semibold">Budget Confirmation</h3><p className="text-neutral-400 leading-relaxed">AI asks about budget. Filters tire-kickers instantly.</p></div>
        </div>
        <div className="mt-12 glow-card p-8 text-center"><p className="text-lg text-neutral-300 max-w-3xl mx-auto"><strong className="text-white">Result:</strong> You meet a homeowner who owns their home, has a real project, has confirmed budget, and is expecting you.</p></div>
      </div></section>
{/*CONTINUED2*/}
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24" id="pricing"><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">Investment</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple. Performance-Based. <span className="text-emerald-400">No Risk.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="glow-card p-10 text-center space-y-6">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">One-Time Setup</span>
            <a href="https://whop.com/velocitydemos/velocitydemos-marketing-services/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center px-6 py-3 rounded-xl bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-all">Pay Setup Fee</a>
            <div className="space-y-2"><span className="text-6xl font-bold text-white">$2,000</span><span className="block text-neutral-500">upfront</span></div>
            <ul className="space-y-3 text-left text-neutral-400">
              {['Done-for-you Meta ads','Done-for-you Google ads','Geo-targeted audience','Landing page creation','AI call system setup','Calendar integration','Tracking dashboard'].map((item,i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>{item}</li>
              ))}
            </ul>
          </div>
          <div className="glow-card p-10 text-center space-y-6 border-emerald-500/50 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-500 text-white">Best Value</span></div>
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Per Appointment</span>
            <div className="space-y-2"><span className="text-6xl font-bold text-emerald-400">$200</span><span className="block text-neutral-500">per booked appointment</span></div>
            <ul className="space-y-3 text-left text-neutral-400">
              {['20 guaranteed appointments/mo','Only pay for booked leads','AI calls in 5 minutes','Pre-qualified on the call','Booked on your calendar','Financial verification','No gap charge if under 20'].map((item,i) => (
                <li key={i} className="flex items-start gap-3"><svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 glow-card p-8 text-center max-w-4xl mx-auto">
          <p className="text-neutral-400 mb-2">Total monthly investment</p>
          <p className="text-4xl font-bold text-white mb-2">$2,000 setup + $4,000/mo</p>
          <p className="text-lg text-neutral-500">$200/appointment x 20. Close 20% = 4 new roofs/month. Average roof: $8K-$15K.</p>
        </div>
      </div></section>
{/*CONTINUED3*/}
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How We Compare</h2>
        <div className="glow-card overflow-hidden"><table className="comparison-table">
          <thead><tr><th>Feature</th><th>HomeAdvisor</th><th>Angi</th><th className="highlight">Us</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Cost per lead</td><td className="text-neutral-500">$15-$85</td><td className="text-neutral-500">$15-$75</td><td className="highlight">$200/appointment</td></tr>
            <tr><td className="font-semibold">Exclusivity</td><td className="text-neutral-500">Shared (4-5)</td><td className="text-neutral-500">Shared</td><td className="highlight">100% exclusive</td></tr>
            <tr><td className="font-semibold">Speed to lead</td><td className="text-neutral-500">You call</td><td className="text-neutral-500">You call</td><td className="highlight">AI in 5 min</td></tr>
            <tr><td className="font-semibold">Pre-qualified</td><td className="text-neutral-500">No</td><td className="text-neutral-500">No</td><td className="highlight">6-point check</td></tr>
            <tr><td className="font-semibold">Financial check</td><td className="text-neutral-500">No</td><td className="text-neutral-500">No</td><td className="highlight">Budget confirmed</td></tr>
            <tr><td className="font-semibold">Appointment</td><td className="text-neutral-500">No</td><td className="text-neutral-500">No</td><td className="highlight">On your calendar</td></tr>
            <tr><td className="font-semibold">Guarantee</td><td className="text-neutral-500">None</td><td className="text-neutral-500">None</td><td className="highlight">20 leads or no gap</td></tr>
            <tr><td className="font-semibold">Ad creative</td><td className="text-neutral-500">You build</td><td className="text-neutral-500">You build</td><td className="highlight">Done-for-you</td></tr>
          </tbody>
        </table></div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">Risk Reversal</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Guarantee</h2>
        <div className="glow-card p-12 space-y-6">
          <p className="text-2xl font-semibold text-white leading-relaxed">20 booked appointments in 30 days. Guaranteed.</p>
          <p className="text-xl text-neutral-400 leading-relaxed">We dont deliver 20? You dont pay for the gap. No questions.</p>
          <p className="text-lg text-neutral-500">We take the risk. You take the upside.</p>
        </div>
      </div></section>
{/*CONTINUED4*/}
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Your Potential ROI</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="glow-card p-8 space-y-2"><span className="stat-number text-4xl font-bold text-emerald-400 block">20</span><span className="text-sm text-neutral-500">Appointments/mo</span></div>
          <div className="glow-card p-8 space-y-2"><span className="stat-number text-4xl font-bold text-emerald-400 block">4</span><span className="text-sm text-neutral-500">Closed deals (20%)</span></div>
          <div className="glow-card p-8 space-y-2"><span className="stat-number text-4xl font-bold text-emerald-400 block">$40K+</span><span className="text-sm text-neutral-500">Revenue from 4 roofs</span></div>
          <div className="glow-card p-8 space-y-2"><span className="stat-number text-4xl font-bold text-emerald-400 block">10x</span><span className="text-sm text-neutral-500">ROI on $4K invest</span></div>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Watch the 3-Minute Demo</h2>
        <p className="text-xl text-neutral-400 mb-12">See exactly how the system works.</p>
        <div className="glow-card p-8 aspect-video flex items-center justify-center">
          <div className="text-center space-y-4">
            <svg className="w-20 h-20 mx-auto text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <p className="text-neutral-500">Video Sales Letter - Coming Soon</p>
          </div>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto"/>
      <section className="py-24"><div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FAQ</h2>
        <div className="space-y-4">
          {[{q:'What if a lead no-shows?',a:'Does not count. You only pay for attended appointments.'},{q:'How fast do you call?',a:'Within 5 minutes. 100x more likely to connect.'},{q:'Do I run my own ads?',a:'No. We handle everything.'},{q:'What if I get less than 20 leads?',a:'You dont pay for the gap.'},{q:'How are leads qualified?',a:'6-point: geo, homeowner, intent, timeline, budget, appointment.'},{q:'Can I cancel?',a:'Yes. Month-to-month after first 30 days.'}].map((faq,i) => (
            <div key={i} className="glow-card p-8"><h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3><p className="text-neutral-400">{faq.a}</p></div>
          ))}
        </div>
      </div></section>
      <section className="py-32"><div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">Ready to Get<br/><span className="text-emerald-400">20 Booked Appointments?</span></h2>
        <p className="text-xl text-neutral-400">Reply to this email. Lets get your first campaign live this week.</p>
        <a href="https://whop.com/velocitydemos/velocitydemos-marketing-services/" target="_blank" rel="noopener noreferrer" className="cta-pulse inline-flex items-center px-12 py-5 rounded-xl bg-emerald-500 text-white font-bold text-xl hover:bg-emerald-600 transition-all hover:scale-105">Pay $2,000 Setup Fee</a>
        <p className="text-neutral-500 text-sm mt-4">Secure payment via Whop</p>
      </div></section>
      <footer className="py-12 border-t border-neutral-800"><div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-neutral-500 text-sm">2026 JBuilds. All rights reserved.</p>
        <p className="text-neutral-600 text-xs">Confidential - Mr. Roofing and Contracting</p>
      </div></footer>
    </main>
  );
}





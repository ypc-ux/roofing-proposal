"use client";

import { Marquee } from "@/components/ui/marquee";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";

const Check = ({ className = "w-5 h-5 text-[#8ed1fc] shrink-0 mt-0.5" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
);
const XIcon = ({ className = "w-4 h-4 text-neutral-600 shrink-0" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);
const Bolt = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
);
const Target = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const Clock = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const Shield = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
);
const HomeIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const CardIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
);
const ShareIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
);
const FilterIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
);
const CalIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);

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
      <nav className="glass-nav">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2">
            <Bolt className="w-5 h-5 text-[#0693e3]" />
            <span className="text-sm font-bold tracking-wider text-white">Julius Young III</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
            <a href="#how-it-works" className="hover:text-[#8ed1fc] transition-colors">How It Works</a>
            <a href="#pricing" className="hover:text-[#8ed1fc] transition-colors">Pricing</a>
            <a href="#guarantee" className="hover:text-[#8ed1fc] transition-colors">Guarantee</a>
          </div>
          <a href="#pricing" className="inline-flex items-center px-4 py-2 rounded-lg bg-[#0693e3] text-white text-sm font-semibold hover:bg-[#07a4f5] transition-all">Get Started</a>
        </div>
      </nav>

      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <section className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden pt-24">
        <div className="mesh-bg" />
        <div className="max-w-4xl mx-auto space-y-8 px-6 relative z-10">
          <div className="fade-in"><span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20">Confidential Proposal — Mr. Roofing &amp; Contracting</span></div>
          <h1 className="fade-in fade-in-delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">Matt — Your Competitor<br /><span className="text-[#0693e3]">Already Booked the Lead</span><br />You Missed.</h1>
          <p className="fade-in fade-in-delay-2 text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">Speed-to-lead is the #1 predictor of who closes the job. The average contractor calls back in 42 minutes. We call in 5. You just show up and sell.</p>
          <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#pricing" className="cta-pulse inline-flex items-center px-8 py-4 rounded-xl bg-[#0693e3] text-white font-semibold text-lg hover:bg-[#07a4f5] transition-all hover:scale-105">Pay $2,000 Setup</a>
            <a href="#how-it-works" className="inline-flex items-center px-8 py-4 rounded-xl border border-neutral-700 text-neutral-300 font-medium hover:border-[#0693e3]/50 hover:text-[#8ed1fc] transition-all">How It Works</a>
          </div>
          <div className="fade-in fade-in-delay-4 pt-2"><span className="text-sm text-neutral-500">No contracts. Cancel anytime after 30 days. 20 appointments or you don&apos;t pay the gap.</span></div>
        </div>
      </section>

      {/* Social proof marquee — Magic UI */}
      <div className="py-5 border-y border-neutral-800/60 bg-[#0d1520]/60 relative">
        <Marquee pauseOnHover className="[--duration:28s]">
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><Bolt className="w-4 h-4 text-[#0693e3]" /> 100% Exclusive Leads</span>
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><Clock className="w-4 h-4 text-[#0693e3]" /> 5-Minute Speed to Lead</span>
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><Target className="w-4 h-4 text-[#0693e3]" /> 6-Point Qualification</span>
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><Shield className="w-4 h-4 text-[#0693e3]" /> Financial Verification</span>
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><CalIcon className="w-4 h-4 text-[#0693e3]" /> Booked on Your Calendar</span>
          <span className="flex items-center gap-2 mx-6 text-sm text-neutral-500 whitespace-nowrap"><HomeIcon className="w-4 h-4 text-[#0693e3]" /> Homeowner Verified</span>
        </Marquee>
      </div>

      <section className="py-24 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">The Problem with Traditional Lead Gen</h2>
        <p className="text-lg text-neutral-500 text-center mb-16 max-w-2xl mx-auto">You already know this. You&apos;ve lived it.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glow-card p-8 space-y-4"><ShareIcon className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">Shared Leads</h3><p className="text-neutral-400 leading-relaxed">The same lead gets sold to 4-5 contractors. Whoever calls first wins. Everyone else pays for nothing.</p></div>
          <div className="glow-card p-8 space-y-4"><Clock className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">Slow Follow-Up</h3><p className="text-neutral-400 leading-relaxed">Industry average speed-to-lead: 42 minutes. 78% of homeowners hire whoever responds first.</p></div>
          <div className="glow-card p-8 space-y-4"><FilterIcon className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">No Quality Control</h3><p className="text-neutral-400 leading-relaxed">Form fills from tire-kickers, renters, and price shoppers who will never buy.</p></div>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6" id="how-it-works"><div className="mesh-bg" /><div className="max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20 mb-6">The Solution</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">We Sell <span className="text-[#8ed1fc]">Appointments</span>, Not Leads.</h2>
        <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-16">Every lead is pre-qualified, pre-educated, and pre-booked on your calendar before you ever touch the phone.</p>
        <div className="grid md:grid-cols-2 gap-6 text-left">{S.map((item, i) => (
          <div key={i} className="glow-card p-8 flex gap-6"><span className="text-5xl font-bold text-[#0693e3]/20 shrink-0">{item.s}</span><div><h3 className="text-xl font-semibold mb-2">{item.t}</h3><p className="text-neutral-400 leading-relaxed">{item.d}</p></div></div>
        ))}</div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6" id="qualified-leads"><div className="mesh-bg" /><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20 mb-6">Lead Quality</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Counts as a <span className="text-[#8ed1fc]">Qualified Lead</span></h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">6 checkpoints. Fails one = you do not pay for it. Period.</p>
        </div>
        <div className="glow-card overflow-hidden"><table className="comparison-table">
          <thead><tr><th className="w-16">#</th><th>Criteria</th><th>Details</th></tr></thead>
          <tbody>{Q.map((r) => (<tr key={r.id}><td className="text-[#8ed1fc] font-bold">{r.id}</td><td className="font-semibold">{r.c}</td><td className="text-neutral-400">{r.d}</td></tr>))}</tbody>
        </table></div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20 mb-6">Financial Qualification</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Verify They Can <span className="text-[#8ed1fc]">Actually Pay</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glow-card p-8 space-y-4"><Shield className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">Insurance Claims</h3><p className="text-neutral-400 leading-relaxed">Verify active coverage on the call. Highest-converting lead type in roofing.</p></div>
          <div className="glow-card p-8 space-y-4"><HomeIcon className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">Home Equity</h3><p className="text-neutral-400 leading-relaxed">Verified through property data. They can finance or pay cash — not a maybe.</p></div>
          <div className="glow-card p-8 space-y-4"><CardIcon className="w-8 h-8 text-[#0693e3]" /><h3 className="text-xl font-semibold">Budget Confirmation</h3><p className="text-neutral-400 leading-relaxed">The AI asks about budget directly. Filters tire-kickers instantly.</p></div>
        </div>
        <div className="mt-12 glow-card p-8 text-center"><p className="text-lg text-neutral-300 max-w-3xl mx-auto"><strong className="text-white">The result:</strong> You meet a homeowner who owns their home, has a real project, has confirmed budget, and is expecting your call. That&apos;s not a lead. That&apos;s an appointment.</p></div>
      </div></section>
{/*CONTINUED2*/}
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6" id="pricing"><div className="mesh-bg" /><div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20 mb-6">Investment</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple. Performance-Based. <span className="text-[#8ed1fc]">No Risk.</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mx-auto" style={{ maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="glow-card p-10 text-center space-y-6 flex flex-col">
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">One-Time Setup</span>
            <div className="space-y-2"><span className="text-6xl font-bold text-white">$2,000</span><span className="block text-neutral-500">upfront, one time</span></div>
            <ul className="space-y-3 text-left text-neutral-400 flex-1">
              {['Done-for-you Meta ads', 'Done-for-you Google ads', 'Geo-targeted audience build', 'Landing page creation', 'AI call system setup', 'Calendar integration', 'Tracking dashboard'].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><Check />{item}</li>
              ))}
            </ul>
            <a href="https://whop.com/velocitydemos/velocitydemos-marketing-services/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl bg-[#0693e3] text-white font-semibold hover:bg-[#07a4f5] transition-all">Pay Setup Fee →</a>
          </div>
          <div className="glow-card p-10 text-center space-y-6 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2"><span className="px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#0693e3] text-white">Best Value</span></div>
            <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Per Appointment</span>
            <div className="space-y-2"><span className="text-6xl font-bold text-[#8ed1fc]">$200</span><span className="block text-neutral-500">per booked appointment</span></div>
            <ul className="space-y-3 text-left text-neutral-400 flex-1">
              {['20 guaranteed appointments/mo', 'Only pay for booked + attended', 'AI calls in 5 minutes', 'Pre-qualified on the call', 'Booked on your calendar', 'Financial verification included', 'No gap charge if under 20'].map((item, i) => (
                <li key={i} className="flex items-start gap-3"><Check />{item}</li>
              ))}
            </ul>
            <div className="inline-flex items-center justify-center w-full px-6 py-4 rounded-xl border border-[#0693e3]/30 text-[#8ed1fc] font-semibold text-sm">Billed after appointments are delivered</div>
          </div>
        </div>
        <div className="mt-12 glow-card p-8 text-center max-w-4xl mx-auto">
          <p className="text-neutral-400 mb-2">Total monthly investment</p>
          <p className="text-4xl font-bold text-white mb-2">$2,000 setup + $4,000/mo</p>
          <p className="text-lg text-neutral-500">$200/appointment × 20. Close 20% = 4 new roofs/month. Average roof: $8K–$15K.</p>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How We Compare</h2>
        <p className="text-lg text-neutral-500 text-center mb-16">You&apos;ve tried the rest. Here&apos;s the difference.</p>
        <div className="glow-card overflow-hidden"><table className="comparison-table">
          <thead><tr><th>Feature</th><th>HomeAdvisor</th><th>Angi</th><th className="highlight">Julius Young III</th></tr></thead>
          <tbody>
            <tr><td className="font-semibold">Cost per lead</td><td className="text-neutral-500">$15–$85</td><td className="text-neutral-500">$15–$75</td><td className="highlight">$200/appointment</td></tr>
            <tr><td className="font-semibold">Exclusivity</td><td className="text-neutral-500"><XIcon /></td><td className="text-neutral-500"><XIcon /></td><td className="highlight"><Check className="w-4 h-4" /></td></tr>
            <tr><td className="font-semibold">Speed to lead</td><td className="text-neutral-500">You call</td><td className="text-neutral-500">You call</td><td className="highlight">AI in 5 min</td></tr>
            <tr><td className="font-semibold">Pre-qualified</td><td className="text-neutral-500"><XIcon /></td><td className="text-neutral-500"><XIcon /></td><td className="highlight">6-point check</td></tr>
            <tr><td className="font-semibold">Financial check</td><td className="text-neutral-500"><XIcon /></td><td className="text-neutral-500"><XIcon /></td><td className="highlight">Budget confirmed</td></tr>
            <tr><td className="font-semibold">Appointment</td><td className="text-neutral-500"><XIcon /></td><td className="text-neutral-500"><XIcon /></td><td className="highlight">On your calendar</td></tr>
            <tr><td className="font-semibold">Guarantee</td><td className="text-neutral-500"><XIcon /></td><td className="text-neutral-500"><XIcon /></td><td className="highlight">20 or no gap charge</td></tr>
            <tr><td className="font-semibold">Ad creative</td><td className="text-neutral-500">You build</td><td className="text-neutral-500">You build</td><td className="highlight">Done-for-you</td></tr>
          </tbody>
        </table></div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6" id="guarantee"><div className="mesh-bg" /><div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase bg-[#0693e3]/10 text-[#8ed1fc] border border-[#0693e3]/20 mb-6">Risk Reversal</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">The Guarantee</h2>
        <div className="glow-card p-12 space-y-6">
          <Target className="w-12 h-12 text-[#0693e3] mx-auto" />
          <p className="text-2xl font-semibold text-white leading-relaxed">20 booked appointments in 30 days. Guaranteed.</p>
          <p className="text-xl text-neutral-400 leading-relaxed">We don&apos;t deliver 20? You don&apos;t pay for the gap. No questions. No phone tag.</p>
          <p className="text-lg text-neutral-500">We take the risk. You take the upside.</p>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Your Potential ROI</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glow-card p-8 space-y-2"><span className="text-4xl font-bold text-[#8ed1fc] block"><NumberTicker value={20} className="text-[#8ed1fc]" /></span><span className="text-sm text-neutral-500">Appointments/mo</span></div>
          <div className="glow-card p-8 space-y-2"><span className="text-4xl font-bold text-[#8ed1fc] block"><NumberTicker value={4} className="text-[#8ed1fc]" /></span><span className="text-sm text-neutral-500">Closed deals (20%)</span></div>
          <div className="glow-card p-8 space-y-2"><span className="text-4xl font-bold text-[#8ed1fc] block">$<NumberTicker value={40} delay={0.3} className="text-[#8ed1fc]" />K+</span><span className="text-sm text-neutral-500">Revenue from 4 roofs</span></div>
          <div className="glow-card p-8 space-y-2"><span className="text-4xl font-bold text-[#8ed1fc] block"><NumberTicker value={10} delay={0.5} className="text-[#8ed1fc]" />x</span><span className="text-sm text-neutral-500">ROI on $4K invest</span></div>
        </div>
      </div></section>
      <div className="section-divider max-w-5xl mx-auto" />
      <section className="py-24 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">FAQ</h2>
        <div className="space-y-4">
          {[{ q: 'What if a lead no-shows?', a: 'Does not count. You only pay for attended appointments. A no-show is on us, not you.' },
            { q: 'How fast do you call?', a: 'Within 5 minutes of form submission. Speed-to-lead is the #1 close rate predictor — we make the call while the homeowner is still looking at your ad.' },
            { q: 'Do I run my own ads?', a: 'No. Meta ads, Google ads, creative, audience build — all handled by us. You approve the targeting before we launch.' },
            { q: 'What if I get less than 20 leads?', a: 'You don\'t pay for the gap. If we deliver 17, you pay for 17. The guarantee is in writing.' },
            { q: 'How are leads qualified?', a: '6-point check: geo-targeted, homeowner verified, active intent, 90-day timeline, confirmed budget, appointment booked.' },
            { q: 'Can I cancel?', a: 'Yes. Month-to-month after the first 30 days. No long-term contracts.' }].map((faq, i) => (
            <div key={i} className="glow-card p-8"><h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3><p className="text-neutral-400 leading-relaxed">{faq.a}</p></div>
          ))}
        </div>
      </div></section>
      <section className="py-32 relative overflow-hidden px-6"><div className="mesh-bg" /><div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-center">Ready to Get<br /><span className="text-[#8ed1fc]">20 Booked Appointments?</span></h2>
        <p className="text-xl text-neutral-400">Reply to this email or pay the setup fee below. We can have your first campaign live this week.</p>
        <a href="https://whop.com/velocitydemos/velocitydemos-marketing-services/" target="_blank" rel="noopener noreferrer" className="cta-pulse inline-flex items-center px-12 py-5 rounded-xl bg-[#0693e3] text-white font-bold text-xl hover:bg-[#07a4f5] transition-all hover:scale-105">Pay $2,000 Setup Fee</a>
        <p className="text-neutral-500 text-sm">Secure payment via Whop · Setup begins within 48 hours of payment</p>
      </div></section>
      <footer className="py-12 border-t border-neutral-800 px-6"><div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2"><Bolt className="w-4 h-4 text-[#0693e3]" /><span className="text-neutral-500 text-sm font-bold tracking-wider">Julius Young III</span></div>
        <p className="text-neutral-600 text-xs">Confidential proposal — Prepared for Mr. Roofing &amp; Contracting</p>
      </div></footer>
    </main>
  );
}





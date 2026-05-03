export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Discord communities with 500+ members
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Auto-Archive Discord Threads<br />
          <span className="text-[#58a6ff]">by Engagement Rules</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Stop manually cleaning up dead threads. Set inactivity timers, message count thresholds, and reaction metrics — your server stays organized automatically.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-4 mb-20">
        {[
          { icon: "⏱", title: "Inactivity Rules", desc: "Archive threads idle for X hours or days" },
          { icon: "📊", title: "Engagement Metrics", desc: "Thresholds on messages, reactions, and members" },
          { icon: "🔔", title: "Discord OAuth", desc: "Connect your server in under 2 minutes" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white text-sm mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-xs">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month per server</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited threads monitored",
              "Custom inactivity rules",
              "Reaction & message thresholds",
              "Scheduled archiving jobs",
              "Discord OAuth login",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the bot connect to my server?",
              a: "You authenticate with Discord OAuth and invite the bot to your server. It only needs read access to threads and permission to archive them — no admin rights required."
            },
            {
              q: "Can I set different rules for different channels?",
              a: "Yes. The dashboard lets you configure per-channel archiving rules with independent inactivity durations and engagement thresholds."
            },
            {
              q: "What happens to archived threads?",
              a: "Threads are archived using Discord's native archive feature — all messages are preserved and the thread can be unarchived at any time by your moderators."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        © {new Date().getFullYear()} Discord Thread Auto-Archiver. All rights reserved.
      </footer>
    </main>
  );
}

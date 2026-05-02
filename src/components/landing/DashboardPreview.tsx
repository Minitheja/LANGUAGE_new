import { motion } from "framer-motion";

export function DashboardPreview() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] mb-5">Dashboard</h2>
          <p className="text-[#6B7280]">Manage your progress and sessions seamlessly.</p>
        </div>

        <div className="space-y-6">
          {/* Top Card */}
          <div className="bg-white rounded-[16px] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2">Ready for your next 10-minute session?</h3>
              <p className="text-[#22C55E] font-medium flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#22C55E]"></span>
                </span>
                Available for matching
              </p>
            </div>
            <a
              href="/#cta"
              className="inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#FFC107] px-8 py-4 text-[#111111] font-bold shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:bg-[#E0A800] transition-smooth whitespace-nowrap"
            >
              Start a session
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Match Card */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E5E7EB] md:col-span-1">
              <h4 className="text-[#6B7280] text-sm font-bold uppercase tracking-wider mb-4">Your match is ready</h4>
              <div className="flex flex-col items-center justify-center p-4 bg-[#F8F9FA] rounded-[12px] border border-[#E5E7EB] h-full min-h-[120px]">
                <span className="text-xl font-bold text-[#1A1A1A] text-center">🇬🇧 English (B2) <br/><span className="text-[#6B7280] text-sm my-1 block">↔</span> 🇪🇸 Spanish (A2)</span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-[#E5E7EB] md:col-span-1">
              <h4 className="text-[#6B7280] text-sm font-bold uppercase tracking-wider mb-4">Performance</h4>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">4</div>
                  <div className="text-sm text-[#6B7280]">sessions this week <span className="text-[#22C55E]">(+2 vs last week)</span></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#1A1A1A]">47</div>
                  <div className="text-sm text-[#6B7280]">corrections received (improving accuracy)</div>
                </div>
              </div>
            </div>

            {/* Streak Card */}
            <div className="bg-white rounded-[16px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border-2 border-[#FFC107] md:col-span-1 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -right-4 -top-4 opacity-10 text-8xl">🔥</div>
              <div>
                <h4 className="text-[#6B7280] text-sm font-bold uppercase tracking-wider mb-4">Your Streak</h4>
                <div className="text-3xl font-bold text-[#1A1A1A] mb-1">7-day streak 🔥</div>
                <p className="text-[#6B7280] mb-6">Don’t break it today</p>
              </div>
              <a
                href="/#cta"
                className="w-full inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#FFC107] px-4 py-3 text-[#111111] font-bold shadow-soft hover:bg-[#E0A800] transition-smooth mt-auto"
              >
                Start today’s session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

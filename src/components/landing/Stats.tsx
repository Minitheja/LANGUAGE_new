const stats = [
  { value: "100+", label: "Countries" },
  { value: "30+", label: "Languages" },
  { value: "Instant", label: "Sessions" },
];

export function Stats() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 text-[#1A1A1A]">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">Join a global speaking network</h2>
          <p className="text-[#6B7280]">🌍 Learners across 100+ countries • 🗣️ 30+ languages practiced daily • ⚡ Instant structured sessions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-[#1A1A1A]">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-[#111111]">{s.value}</div>
              <div className="text-sm text-[#6B7280] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

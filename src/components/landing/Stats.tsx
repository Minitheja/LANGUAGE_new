const stats = [
  { value: "21,023", label: "Customers" },
  { value: "44,023", label: "Downloads" },
  { value: "35,023", label: "Satisfied" },
  { value: "2,323", label: "Cup of Coffee" },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 text-hero-foreground">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">We're Here to Help You</h2>
          <p className="opacity-90">Have some questions? Chat with us now, or send us an email to get in touch.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((s) => (
            <div key={s.label} className="text-center text-hero-foreground">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{s.value}</div>
              <div className="text-sm opacity-80 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

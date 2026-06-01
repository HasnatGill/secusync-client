import useScrollReveal from "../hooks/useGsapScroll";

const SERVICES = [
    { icon: "📍", title: "Live GPS Tracking", desc: "Real-time location of every guard on an interactive map with route history." },
    { icon: "🛡️", title: "Shift Operations", desc: "Clock-in/out, geofenced checkpoints and automated attendance tracking." },
    { icon: "❤️", title: "Welfare Checks", desc: "Periodic safety check-ins with grace timers and instant escalation." },
    { icon: "🚨", title: "SOS & Incidents", desc: "One-tap panic alerts and rich incident reports with photos & signatures." },
    { icon: "💬", title: "Team Chat", desc: "Direct and group messaging with media, voice notes and read receipts." },
    { icon: "📊", title: "Reports & Timesheets", desc: "Auto-generated timesheets, paysheets and exportable activity logs." },
];

export default function Services() {
    const grid = useScrollReveal({ y: 50, stagger: 0.1 });

    return (
        <section
            id="services"
            aria-label="Services"
            style={{ background: "#EAF2F8", padding: "120px 5vw" }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <p style={{ color: "#0FA9C4", fontWeight: 800, letterSpacing: 2, fontSize: 13, margin: 0 }}>
                    WHAT WE DO
                </p>
                <h2
                    style={{
                        margin: "8px 0 50px",
                        fontSize: "clamp(1.8rem,4vw,3rem)",
                        fontWeight: 800,
                        color: "#0E2A47",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Everything your operation needs.
                </h2>

                <div
                    ref={grid}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 20,
                    }}
                >
                    {SERVICES.map((s) => (
                        <div
                            key={s.title}
                            style={{
                                background: "#fff",
                                borderRadius: 20,
                                padding: 28,
                                border: "1px solid #D6E2EC",
                                transition: "transform .3s ease, box-shadow .3s ease",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 18px 40px rgba(14,42,71,0.10)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <div
                                style={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: 16,
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: 26,
                                    background: "rgba(31,200,227,0.12)",
                                    marginBottom: 18,
                                }}
                            >
                                {s.icon}
                            </div>
                            <h3 style={{ margin: "0 0 8px", fontSize: "1.2rem", fontWeight: 800, color: "#0E2A47" }}>
                                {s.title}
                            </h3>
                            <p style={{ margin: 0, color: "#5A6B7B", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                {s.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
import useScrollReveal from "../hooks/useGsapScroll";

const ITEMS = [
    {
        quote:
            "Secusync gave our control room real-time visibility we never had. Incident response time dropped dramatically.",
        name: "Operations Manager",
        role: "Facilities Security Firm",
    },
    {
        quote:
            "Clock-ins, welfare checks and patrol tracking in one app our supervisors finally trust the data.",
        name: "Site Supervisor",
        role: "Commercial Estate",
    },
    {
        quote:
            "The SOS escalation and live map are game-changers for lone-worker safety on night shifts.",
        name: "Safety Lead",
        role: "Industrial Site",
    },
];

export default function Testimonials() {
    const grid = useScrollReveal({ y: 50, stagger: 0.15 });

    return (
        <section
            aria-label="Testimonials"
            style={{ background: "#fff", padding: "120px 5vw" }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <p style={{ color: "#0FA9C4", fontWeight: 800, letterSpacing: 2, fontSize: 13, margin: 0 }}>
                    TRUSTED IN THE FIELD
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
                    What teams say.
                </h2>

                <div
                    ref={grid}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: 20,
                    }}
                >
                    {ITEMS.map((t, i) => (
                        <figure
                            key={i}
                            style={{
                                margin: 0,
                                background: "#EAF2F8",
                                borderRadius: 22,
                                padding: 28,
                                border: "1px solid #D6E2EC",
                                display: "flex",
                                flexDirection: "column",
                                gap: 18,
                            }}
                        >
                            <span style={{ fontSize: 40, lineHeight: 0.5, color: "#1FC8E3", fontFamily: "Sora, sans-serif" }}>
                                &ldquo;
                            </span>
                            <blockquote style={{ margin: 0, color: "#0E2A47", lineHeight: 1.6, fontSize: "1rem", fontWeight: 500 }}>
                                {t.quote}
                            </blockquote>
                            <figcaption style={{ marginTop: "auto" }}>
                                <div style={{ fontWeight: 800, color: "#0E2A47", fontSize: "0.95rem" }}>{t.name}</div>
                                <div style={{ color: "#5A6B7B", fontSize: "0.85rem", marginTop: 2 }}>{t.role}</div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    );
}
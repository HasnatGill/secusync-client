import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useGsapScroll";

const PROJECTS = [
    {
        title: "Secusync Platform",
        tag: "Web + Mobile",
        desc: "Guard management suite live tracking, shift ops, welfare checks & incident reporting across web and React Native.",
        icon: "🛡️",
    },
    {
        title: "Live Operations Dashboard",
        tag: "Real-time",
        desc: "Socket-driven control room with map tracking, geofencing and instant SOS escalation.",
        icon: "📍",
    },
    {
        title: "Industrial AI Diagnostics",
        tag: "Data Science",
        desc: "Anomaly detection & predictive maintenance pipelines for industrial machinery.",
        icon: "⚙️",
    },
];

export default function Projects() {
    const grid = useScrollReveal({ y: 60, stagger: 0.15 });

    return (
        <section
            id="projects"
            aria-label="Selected work"
            style={{ background: "#EAF2F8", padding: "120px 20px" }}
        >
            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <p style={{ color: "#0FA9C4", fontWeight: 800, letterSpacing: 2, fontSize: 13, margin: 0 }}>
                    SELECTED WORK
                </p>
                <h2
                    style={{
                        margin: "8px 0 50px",
                        fontSize: "clamp(1.8rem, 4vw, 3rem)",
                        fontWeight: 800,
                        color: "#0E2A47",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Projects that ship.
                </h2>

                <div
                    ref={grid}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 22,
                    }}
                >
                    {PROJECTS.map((p) => (
                        <motion.article
                            key={p.title}
                            whileHover={{ y: -8, rotateX: 6, rotateY: -6 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            style={{
                                transformPerspective: 800,
                                background: "#fff",
                                borderRadius: 22,
                                padding: 26,
                                border: "1px solid #D6E2EC",
                                boxShadow: "0 10px 30px rgba(14,42,71,0.06)",
                            }}
                        >
                            <div
                                style={{
                                    width: 56,
                                    height: 56,
                                    borderRadius: 16,
                                    display: "grid",
                                    placeItems: "center",
                                    fontSize: 26,
                                    background: "rgba(31,200,227,0.12)",
                                    marginBottom: 18,
                                }}
                            >
                                {p.icon}
                            </div>
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 800,
                                    letterSpacing: 1,
                                    color: "#0FA9C4",
                                    background: "rgba(31,200,227,0.1)",
                                    padding: "4px 10px",
                                    borderRadius: 8,
                                }}
                            >
                                {p.tag}
                            </span>
                            <h3 style={{ margin: "14px 0 8px", fontSize: "1.3rem", fontWeight: 800, color: "#0E2A47" }}>
                                {p.title}
                            </h3>
                            <p style={{ margin: 0, color: "#5A6B7B", lineHeight: 1.6, fontSize: "0.95rem" }}>
                                {p.desc}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
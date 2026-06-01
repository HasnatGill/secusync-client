import { motion } from "framer-motion";
import useScrollReveal from "../hooks/useGsapScroll";
import appLogo from "../assets/appLogo.png";

const STATS = [
    { value: "100%", label: "Real-time sync" },
    { value: "24/7", label: "Live monitoring" },
    { value: "2", label: "Platforms (Web + Mobile)" },
];

export default function About() {
    const stats = useScrollReveal({ y: 30, stagger: 0.1 });

    return (
        <section
            id="about"
            aria-label="About Secusync"
            style={{ background: "#fff", padding: "120px 5vw" }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: 60,
                    alignItems: "center",
                }}
            >
                {/* Text */}
                <div>
                    <p style={{ color: "#0FA9C4", fontWeight: 800, letterSpacing: 2, fontSize: 13, margin: 0 }}>
                        WHO WE ARE
                    </p>
                    <h2
                        style={{
                            margin: "10px 0 20px",
                            fontSize: "clamp(1.8rem,4vw,2.8rem)",
                            fontWeight: 800,
                            color: "#0E2A47",
                            letterSpacing: "-0.02em",
                            lineHeight: 1.1,
                        }}
                    >
                        Security operations, <span style={{ color: "#1FC8E3" }}>reimagined.</span>
                    </h2>
                    <p style={{ color: "#5A6B7B", lineHeight: 1.7, fontSize: "1.05rem", marginBottom: 16 }}>
                        Secusync connects guards, supervisors and control rooms in real time.
                        From clock-in to incident reporting, every action is tracked, verified
                        and synced across the field and the office.
                    </p>
                    <p style={{ color: "#5A6B7B", lineHeight: 1.7, fontSize: "1.05rem" }}>
                        Built for reliability live GPS tracking, geofenced checkpoints, welfare
                        check-ins and instant SOS escalation, all in one platform.
                    </p>

                    <div
                        ref={stats}
                        style={{ display: "flex", gap: 36, marginTop: 36, flexWrap: "wrap" }}
                    >
                        {STATS.map((s) => (
                            <div key={s.label}>
                                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#0E2A47", fontFamily: "Sora, sans-serif" }}>
                                    {s.value}
                                </div>
                                <div style={{ fontSize: 13, color: "#5A6B7B", marginTop: 4 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Visual card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        position: "relative",
                        borderRadius: 28,
                        padding: 50,
                        background: "radial-gradient(120% 120% at 30% 0%, #1B3B5F, #0E2A47 60%, #06121F)",
                        display: "grid",
                        placeItems: "center",
                        minHeight: 320,
                        overflow: "hidden",
                        boxShadow: "0 30px 60px rgba(14,42,71,0.25)",
                    }}
                >
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            inset: 0,
                            backgroundImage:
                                "linear-gradient(rgba(31,200,227,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(31,200,227,0.08) 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <motion.img
                        src={appLogo}
                        alt="Secusync app"
                        animate={{ y: [0, -14, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        style={{
                            width: 120,
                            height: "auto",
                            position: "relative",
                            filter: "drop-shadow(0 0 30px rgba(31,200,227,0.5))",
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
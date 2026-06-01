import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

const STATS = [
    { value: 500, suffix: "+", label: "Guards managed" },
    { value: 50, suffix: "+", label: "Active sites" },
    { value: 99, suffix: "%", label: "Uptime reliability" },
    { value: 24, suffix: "/7", label: "Live monitoring" },
];

function Counter({ value, suffix }) {
    const ref = useRef(null);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obj = { n: 0 };
        const st = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
                gsap.to(obj, {
                    n: value,
                    duration: 1.6,
                    ease: "power2.out",
                    onUpdate: () => setDisplay(Math.round(obj.n)),
                });
            },
        });
        return () => st.kill();
    }, [value]);

    return (
        <span ref={ref}>
            {display}
            {suffix}
        </span>
    );
}

export default function Stats() {
    return (
        <section
            aria-label="Key numbers"
            style={{
                background: "#0E2A47",
                padding: "60px 5vw",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(90deg, rgba(31,200,227,0.06) 1px, transparent 1px)",
                    backgroundSize: "80px 100%",
                }}
            />
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    position: "relative",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: 30,
                    textAlign: "center",
                }}
            >
                {STATS.map((s) => (
                    <div key={s.label}>
                        <div
                            style={{
                                fontFamily: "Sora, sans-serif",
                                fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                                fontWeight: 800,
                                color: "#1FC8E3",
                                lineHeight: 1,
                            }}
                        >
                            <Counter value={s.value} suffix={s.suffix} />
                        </div>
                        <div
                            style={{
                                marginTop: 10,
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: 0.5,
                                color: "rgba(233,246,251,0.7)",
                            }}
                        >
                            {s.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
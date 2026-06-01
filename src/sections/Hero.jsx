import { useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { gsap, ScrollTrigger } from "../lib/gsap";
import Scene from "../components/three/Scene";
import logoWhite from "../assets/secusync-logo-white.png";

/**
 * Hero — fullscreen dark navy section.
 * A pinned ScrollTrigger writes scroll progress (0..1) into scrollRef,
 * which the 3D <Scene/> reads each frame to rotate/scale the core.
 */
export default function Hero() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);
    const scrollRef = useRef(0); // shared 0..1 progress for the 3D scene

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Pin the hero and track progress for the 3D scene
            ScrollTrigger.create({
                trigger: sectionRef.current,
                start: "top top",
                end: "+=120%",
                pin: true,
                scrub: 1,
                onUpdate: (self) => {
                    scrollRef.current = self.progress;
                },
            });

            // Fade/translate the headline out as you scroll
            gsap.to(contentRef.current, {
                y: -80,
                opacity: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=80%",
                    scrub: 1,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const word = {
        hidden: { opacity: 0, y: 30 },
        show: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.15 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }),
    };

    return (
        <section
            ref={sectionRef}
            aria-label="Introduction"
            style={{
                position: "relative",
                height: "100vh",
                overflow: "hidden",
                background:
                    "radial-gradient(120% 120% at 50% 0%, #1B3B5F 0%, #0E2A47 45%, #06121F 100%)",
            }}
        >
            {/* 3D background */}
            <Scene scrollRef={scrollRef} />

            {/* subtle grid overlay */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "linear-gradient(rgba(31,200,227,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(31,200,227,0.06) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at 50% 40%, black, transparent 75%)",
                }}
            />

            {/* content */}
            <div
                ref={contentRef}
                style={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "0 20px",
                }}
            >
                <motion.img
                    src={logoWhite}
                    alt="Secusync logo"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                        width: 150,
                        height: "auto",
                        marginBottom: 28,
                        filter: "drop-shadow(0 0 24px rgba(31,200,227,0.4))",
                    }}
                />

                <h1
                    style={{
                        margin: 0,
                        fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                        maxWidth: 900,
                    }}
                >
                    {["Smarter", "Security,", "Synced."].map((w, i) => (
                        <motion.span
                            key={w}
                            custom={i}
                            variants={word}
                            initial="hidden"
                            animate="show"
                            style={{
                                display: "inline-block",
                                marginRight: 14,
                                color: i === 2 ? "#1FC8E3" : "#fff",
                            }}
                        >
                            {w}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    style={{
                        marginTop: 22,
                        maxWidth: 560,
                        fontSize: "clamp(1rem, 2vw, 1.15rem)",
                        lineHeight: 1.6,
                        color: "rgba(233,246,251,0.75)",
                    }}
                >
                    Real-time guard management, live tracking, and incident reporting
                    engineered into one seamless platform.
                </motion.p>

                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.85, duration: 0.7 }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                        marginTop: 38,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        padding: "15px 34px",
                        borderRadius: 14,
                        background: "linear-gradient(90deg, #1FC8E3, #0FA9C4)",
                        color: "#0A1F36",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        textDecoration: "none",
                        boxShadow: "0 10px 30px rgba(31,200,227,0.35)",
                    }}
                >
                    Explore the Work
                </motion.a>
            </div>

            {/* scroll cue */}
            <motion.div
                aria-hidden="true"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                style={{
                    position: "absolute",
                    bottom: 26,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                    color: "rgba(31,200,227,0.8)",
                    fontSize: 12,
                    letterSpacing: 2,
                    fontWeight: 700,
                }}
            >
                Secusync
            </motion.div>
        </section>
    );
}
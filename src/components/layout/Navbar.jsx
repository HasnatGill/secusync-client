import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logoWhite from "../../assets/secusync-logo-white.png";
import logo from "../../assets/logo.png";

const LINKS = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: scrolled ? "12px 5vw" : "22px 5vw",
                transition: "padding .35s ease, background .35s ease, box-shadow .35s ease",
                background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
                backdropFilter: scrolled ? "blur(14px)" : "none",
                boxShadow: scrolled ? "0 6px 24px rgba(14,42,71,0.08)" : "none",
                borderBottom: scrolled ? "1px solid #D6E2EC" : "1px solid transparent",
            }}
        >
            <a href="#top" aria-label="Secusync home">
                <img
                    src={scrolled ? logo : logoWhite}
                    alt="Secusync"
                    style={{
                        height: scrolled ? 28 : 34,
                        width: "auto",
                        display: "block",
                        transition: "height .35s ease",
                    }}
                />
            </a>

            <nav aria-label="Primary">
                <ul
                    style={{
                        display: "flex",
                        gap: 30,
                        listStyle: "none",
                        margin: 0,
                        padding: 0,
                        alignItems: "center",
                    }}
                >
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                style={{
                                    textDecoration: "none",
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: scrolled ? "#0E2A47" : "rgba(255,255,255,0.85)",
                                    transition: "color .3s ease",
                                }}
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            style={{
                                textDecoration: "none",
                                fontSize: 14,
                                fontWeight: 800,
                                padding: "9px 20px",
                                borderRadius: 12,
                                color: "#0A1F36",
                                background: "linear-gradient(90deg,#1FC8E3,#0FA9C4)",
                                boxShadow: "0 6px 18px rgba(31,200,227,0.35)",
                            }}
                        >
                            Let's Talk
                        </a>
                    </li>
                </ul>
            </nav>
        </motion.header>
    );
}
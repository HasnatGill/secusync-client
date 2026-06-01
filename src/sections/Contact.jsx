import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleChange = (e) =>
        setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: wire to your API / email service
        setSent(true);
    };

    return (
        <section
            id="contact"
            aria-label="Contact"
            style={{
                background: "radial-gradient(120% 120% at 50% 0%, #1B3B5F, #0E2A47 50%, #06121F)",
                padding: "120px 5vw",
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
                        "linear-gradient(rgba(31,200,227,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(31,200,227,0.05) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                    maskImage: "radial-gradient(circle at 50% 30%, black, transparent 70%)",
                }}
            />

            <div style={{ maxWidth: 640, margin: "0 auto", position: "relative", textAlign: "center" }}>
                <p style={{ color: "#1FC8E3", fontWeight: 800, letterSpacing: 2, fontSize: 13, margin: 0 }}>
                    GET IN TOUCH
                </p>
                <h2
                    style={{
                        margin: "10px 0 16px",
                        fontSize: "clamp(1.8rem,4vw,3rem)",
                        fontWeight: 800,
                        color: "#fff",
                        letterSpacing: "-0.02em",
                    }}
                >
                    Let's build something secure.
                </h2>
                <p style={{ color: "rgba(233,246,251,0.7)", lineHeight: 1.6, marginBottom: 40 }}>
                    Tell us about your operation and we'll show you how Secusync fits.
                </p>

                {sent ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{
                            padding: "26px",
                            borderRadius: 18,
                            background: "rgba(31,200,227,0.12)",
                            border: "1px solid rgba(31,200,227,0.4)",
                            color: "#E9F6FB",
                            fontWeight: 600,
                        }}
                    >
                        ✅ Thanks! We'll get back to you shortly.
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14, textAlign: "left" }}>
                        <Field label="Name" name="name" value={form.name} onChange={handleChange} />
                        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} />
                        <div>
                            <label style={labelStyle}>Message</label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={4}
                                required
                                style={{ ...inputStyle, resize: "vertical" }}
                            />
                        </div>
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{
                                marginTop: 8,
                                padding: "15px",
                                borderRadius: 14,
                                border: "none",
                                cursor: "pointer",
                                background: "linear-gradient(90deg,#1FC8E3,#0FA9C4)",
                                color: "#0A1F36",
                                fontWeight: 800,
                                fontSize: "1rem",
                                boxShadow: "0 10px 30px rgba(31,200,227,0.35)",
                            }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                )}
            </div>
        </section>
    );
}

const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 0.5,
    color: "rgba(233,246,251,0.6)",
    marginBottom: 6,
};
const inputStyle = {
    width: "100%",
    padding: "13px 16px",
    borderRadius: 12,
    border: "1px solid rgba(31,200,227,0.25)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    fontSize: "0.95rem",
    outline: "none",
};

const Field = ({ label, name, type = "text", value, onChange }) => (
    <div>
        <label style={labelStyle}>{label}</label>
        <input name={name} type={type} value={value} onChange={onChange} required style={inputStyle} />
    </div>
);
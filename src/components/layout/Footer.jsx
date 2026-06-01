import logoWhite from "../../assets/secusync-logo-white.png";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer
            style={{
                background: "#06121F",
                color: "rgba(233,246,251,0.6)",
                padding: "40px 5vw",
            }}
        >
            <div
                style={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 20,
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <img src={logoWhite} alt="Secusync" style={{ height: 26, width: "auto", display: "block" }} />
                <p style={{ margin: 0, fontSize: 13 }}>
                    © {year} Secusync. All rights reserved.
                </p>
                <nav aria-label="Footer">
                    <a href="#about" style={fLink}>About</a>
                    <a href="#services" style={fLink}>Services</a>
                    <a href="#contact" style={fLink}>Contact</a>
                </nav>
            </div>
        </footer>
    );
}

const fLink = {
    color: "rgba(233,246,251,0.6)",
    textDecoration: "none",
    fontSize: 13,
    marginLeft: 20,
};
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiLock, FiChevronRight, FiCheckCircle, FiShield, FiFileText } from "react-icons/fi";

const sections = [
  { id: "intro", title: "1. Introduction" },
  { id: "collect", title: "2. Information We Collect" },
  { id: "use-info", title: "3. How We Use Information" },
  { id: "sharing", title: "4. Information Sharing" },
  { id: "security", title: "5. Data Security & Storage" },
  { id: "rights", title: "6. Your Privacy Rights" },
  { id: "changes", title: "7. Policy Updates" },
  { id: "contact", title: "8. Contact Privacy Team" }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative overflow-hidden bg-white">

      {/* 1. HERO HEADER */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-[var(--color-lightcyan)]/30 via-white to-white border-b border-[var(--color-lightcyan)]/80">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            <FiLock className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            Security & Trust
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-caption)] max-w-xl mx-auto leading-relaxed">
            Last Updated: June 23, 2026. Learn how SecuSync collects, handles, safeguards, and respects your organization's and personnel's operational data.
          </p>
        </div>
      </section>

      {/* 2. CONTENT SECTION WITH SIDEBAR */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Left Sidebar Menu (Sticky) */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 space-y-2.5 p-6 rounded-2xl bg-slate-50/70 border border-slate-100/80 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200/50">
                  <FiFileText className="text-[var(--color-accent)] h-5 w-5" />
                  <span className="font-bold text-xs uppercase tracking-wider text-[var(--color-primary)]">Document Outline</span>
                </div>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${activeSection === sec.id
                        ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/10"
                        : "text-[var(--color-caption)] hover:bg-slate-100 hover:text-[var(--color-primary)]"
                        }`}
                    >
                      <span>{sec.title}</span>
                      <FiChevronRight className={`h-3 w-3 opacity-60 transition-transform ${activeSection === sec.id ? "translate-x-0.5" : ""}`} />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Detailed Contents */}
            <div className="lg:col-span-8 space-y-12 text-left text-sm sm:text-base text-[var(--color-caption)] leading-relaxed">

              {/* Introduction */}
              <article id="intro" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  1. Introduction
                </h2>
                <p>
                  Welcome to SecuSync ("we", "our", or "us"). We operate a premium SaaS platform designed for private security guard tracking, real-time dispatch, visitor logging, client reports, and shift planning. We are highly committed to securing your operational telemetry, officer details, and client site logs.
                </p>
                <p>
                  This Privacy Policy describes our practices regarding the collection, processing, protection, and disclosure of personal and business information when you use our website, mobile patrol software applications, and client dashboard portals (collectively, the "Service").
                </p>
              </article>

              {/* Information We Collect */}
              <article id="collect" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  2. Information We Collect
                </h2>
                <p>
                  To provide our integrated patrol and dispatch services, we collect several categories of information:
                </p>
                <ul className="space-y-2.5 pl-5 list-none">
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span><strong>Account Information:</strong> Organization name, administrator email, passwords, phone numbers, and billing coordinates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span><strong>Telemetry & GPS Data:</strong> Real-time location logs of security officers, checkpoint scans (NFC, QR codes, GPS tags), and routing schedules.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span><strong>Report Contents:</strong> Incident descriptions, attached photos, visitor register logs, and client emails submitted during patrol operations.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span><strong>Technical Data:</strong> Device hardware profiles, mobile operating system versions, IP addresses, and application crash log analytics.</span>
                  </li>
                </ul>
              </article>

              {/* How We Use Information */}
              <article id="use-info" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  3. How We Use Information
                </h2>
                <p>
                  SecuSync processes operational data for specific, lawful purposes related to optimizing your security workflows:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <h4 className="font-extrabold text-[var(--color-primary)] text-xs uppercase tracking-wider mb-2">Service Execution</h4>
                    <p className="text-xs">Processing officer check-ins, generating dynamic client reports, updating live GPS routing panels, and calculating billable hours.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                    <h4 className="font-extrabold text-[var(--color-primary)] text-xs uppercase tracking-wider mb-2">Platform Tuning</h4>
                    <p className="text-xs">Diagnosing software bugs, scaling storage databases, improving battery efficiency during GPS tracking, and updating UI flows.</p>
                  </div>
                </div>
              </article>

              {/* Information Sharing */}
              <article id="sharing" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  4. Information Sharing
                </h2>
                <p>
                  We believe in protecting your proprietary security logs. We do not sell or lease your business telemetry to advertising networks. Sharing only occurs under strict criteria:
                </p>
                <ul className="space-y-2 pl-4 list-disc">
                  <li><strong>Third-Party Vendors:</strong> Cloud storage providers (AWS/Azure), payment processors, and mapping systems (Google Maps API) that adhere to equivalent security certifications.</li>
                  <li><strong>Partner Agencies:</strong> Only when you explicitly authorize sub-contracting or dispatch pooling via the SecuSync Hub network interface.</li>
                  <li><strong>Legal Mandate:</strong> Compliance with warrants or local emergency requests where life or safety is at risk.</li>
                </ul>
              </article>

              {/* Data Security */}
              <article id="security" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  5. Data Security & Storage
                </h2>
                <p>
                  Our security systems operate on multi-tiered protection mechanisms to ensure your data stays private:
                </p>
                <p>
                  <strong>Encryption:</strong> All telemetry and personal data is encrypted in transit using TLS 1.3 and at rest inside databases using AES-256 standards.
                </p>
                <p>
                  <strong>Retention:</strong> Operational reports and officer GPS history are kept for the duration of active contracts, or deleted within 90 days of contract termination, subject to customized compliance rules you request.
                </p>
              </article>

              {/* Your Privacy Rights */}
              <article id="rights" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  6. Your Privacy Rights
                </h2>
                <p>
                  Under regional frameworks (such as GDPR in Europe and CCPA in California), you have rights to request data access, rectifications, portability, and restriction of processing. Security officers can request account detail revisions through their employing agency's console administrator.
                </p>
              </article>

              {/* Policy Updates */}
              <article id="changes" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  7. Policy Updates
                </h2>
                <p>
                  We may adjust this policy to represent updates in patrol features or global compliance laws. Registered organization admins will receive notice through the console dashboard or via email prior to significant adjustments taking effect.
                </p>
              </article>

              {/* Contact Privacy Team */}
              <article id="contact" className="space-y-4 scroll-mt-28 p-6 rounded-2xl bg-[var(--color-lightcyan)]/30 border border-[var(--color-accent)]/10">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  8. Contact Privacy Team
                </h2>
                <p>
                  For questions about this policy, data access requests, or reporting security concerns, reach out to our legal officers:
                </p>
                <div className="pt-2 text-xs sm:text-sm font-semibold space-y-1 text-[var(--color-primary)]">
                  <p>Email: <a href="mailto:privacy@secusync.com" className="text-[var(--color-secondary)] hover:underline">privacy@secusync.com</a></p>
                  <p>Address: Legal Compliance Department, SecuSync Systems, Amsterdam, NL</p>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* 3. FOOTER CTA */}
      <section className="py-12 bg-slate-50 border-t border-slate-100 text-center">
        <p className="text-xs font-semibold text-[var(--color-caption)]">
          Have questions about security practices? Check our <Link to="/contact" className="text-[var(--color-secondary)] font-bold hover:underline">Compliance Desk</Link> or contact support.
        </p>
      </section>

    </div>
  );
}

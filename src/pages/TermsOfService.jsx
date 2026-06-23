import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiFileText, FiChevronRight, FiCheckCircle, FiShield, FiAlertTriangle } from "react-icons/fi";

const sections = [
  { id: "agreement", title: "1. Terms Agreement" },
  { id: "services", title: "2. Description of Service" },
  { id: "accounts", title: "3. Accounts & Registration" },
  { id: "billing", title: "4. Fees, Billing & Upgrades" },
  { id: "prohibited", title: "5. Prohibited Uses" },
  { id: "ip", title: "6. Intellectual Property" },
  { id: "warranty", title: "7. Disclaimer of Warranties" },
  { id: "liability", title: "8. Limitation of Liability" },
  { id: "governing", title: "9. Governing Law" },
  { id: "contact", title: "10. Contact Information" }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("agreement");

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
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            <FiFileText className="h-3.5 w-3.5 text-[var(--color-accent)]" />
            Terms of Use
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-[var(--color-caption)] max-w-xl mx-auto leading-relaxed">
            Last Updated: June 23, 2026. Please read these terms carefully before accessing or using the SecuSync private security software platform.
          </p>
        </div>
      </section>

      {/* 2. CONTENT SECTION WITH SIDEBAR */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Sidebar Outline Menu */}
            <aside className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 space-y-2.5 p-6 rounded-2xl bg-slate-50/70 border border-slate-100/80 shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-200/50">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  <span className="font-bold text-xs uppercase tracking-wider text-[var(--color-primary)]">Legal Outline</span>
                </div>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full flex items-center justify-between text-left px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        activeSection === sec.id
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
              
              {/* Terms Agreement */}
              <article id="agreement" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  1. Terms Agreement
                </h2>
                <p>
                  By registering for an account, deploying our mobile applications, or utilizing any portion of the SecuSync software suite, your organization ("Subscriber" or "User") agrees to be legally bound by these Terms of Service ("Terms") and our Privacy Policy.
                </p>
                <p>
                  If you are registering on behalf of a private patrol agency, you represent that you have legal authority to bind the entity to these Terms. If you do not agree to these conditions, you must not access or use the Service.
                </p>
              </article>

              {/* Description of Service */}
              <article id="services" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  2. Description of Service
                </h2>
                <p>
                  SecuSync provides an integrated suite of private security management tools, including:
                </p>
                <ul className="space-y-2.5 pl-5 list-none">
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span>Real-time GPS guard tracking and NFC/QR checkpoint scan verification.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span>Automated smart alarm routing, response, and dispatch logs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span>Customer-facing portal networks for viewing daily activity reports.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <FiCheckCircle className="text-[var(--color-accent)] h-4 w-4 mt-1 shrink-0" />
                    <span>Shift planning, visual guard scheduling, and contract billing engines.</span>
                  </li>
                </ul>
              </article>

              {/* Accounts & Registration */}
              <article id="accounts" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  3. Accounts & Registration
                </h2>
                <p>
                  To leverage our secure consoles, you must register for an administrative account. Subscribers are fully responsible for:
                </p>
                <ul className="space-y-2 pl-4 list-disc">
                  <li>Maintaining the confidentiality of administrator and guard clock-in credentials.</li>
                  <li>Ensuring all activities occurring under your team credentials comply with relevant state and national security licensing laws.</li>
                  <li>Informing us immediately of any unauthorized access, leaks, or suspect security breaches.</li>
                </ul>
              </article>

              {/* Fees, Billing & Upgrades */}
              <article id="billing" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  4. Fees, Billing & Upgrades
                </h2>
                <p>
                  Subscribers agree to pay all service subscription fees specified in their service contracts or online subscription tiers:
                </p>
                <p>
                  <strong>Billing Cycle:</strong> Subscriptions are billed monthly or annually in advance. All invoices are payable within 30 days of generation unless customized terms apply.
                </p>
                <p>
                  <strong>Overdue Accounts:</strong> Failure to pay subscription balances on schedule may lead to service suspensions with 10 days' prior written warning.
                </p>
              </article>

              {/* Prohibited Uses */}
              <article id="prohibited" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  5. Prohibited Uses
                </h2>
                <p>
                  Our services must not be leveraged for:
                </p>
                <ul className="space-y-2 pl-4 list-disc">
                  <li>Spying on individuals outside the context of authorized commercial guard patrols or site surveillance.</li>
                  <li>Attempting to probe, reverse-engineer, or breach SecuSync cloud application infrastructures.</li>
                  <li>Injecting malware, spam, or falsifying GPS coordinates using virtual coordinate engines.</li>
                </ul>
              </article>

              {/* Intellectual Property */}
              <article id="ip" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  6. Intellectual Property
                </h2>
                <p>
                  The SecuSync software dashboards, logos, algorithms, system structures, and proprietary branding are the sole property of SecuSync Systems and its licensors. We grant subscribers a revocable, non-exclusive, non-transferable license to access our platform interfaces for business operations during their subscription term.
                </p>
              </article>

              {/* Disclaimer of Warranties */}
              <article id="warranty" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2 text-[var(--color-warning)]">
                  <FiAlertTriangle className="h-5 w-5" />
                  7. Disclaimer of Warranties
                </h2>
                <p className="italic">
                  Our services are provided on an "AS IS" and "AS AVAILABLE" basis. SecuSync does not warrant that telemetry syncs, GPS readings, or patrol notification alerts will be 100% uninterrupted, error-free, or unaffected by cellular network outages. The platform is an operational helper and does not substitute for active emergency coordination (911 services).
                </p>
              </article>

              {/* Limitation of Liability */}
              <article id="liability" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2 text-[var(--color-danger)]">
                  <FiAlertTriangle className="h-5 w-5" />
                  8. Limitation of Liability
                </h2>
                <p>
                  To the maximum extent permitted by governing law, SecuSync Systems shall not be liable for any indirect, incidental, punitive, or consequential damages (including loss of profits, security contract losses, or data corruption) arising out of or related to your use or inability to use the platform.
                </p>
              </article>

              {/* Governing Law */}
              <article id="governing" className="space-y-4 scroll-mt-28">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  9. Governing Law
                </h2>
                <p>
                  These Terms of Service and any operations disputes will be governed by the laws of the Netherlands, without regard to its conflict of law principles. Any legal filings must be processed through the courts in Amsterdam, NL.
                </p>
              </article>

              {/* Contact Information */}
              <article id="contact" className="space-y-4 scroll-mt-28 p-6 rounded-2xl bg-[var(--color-lightcyan)]/30 border border-[var(--color-accent)]/10">
                <h2 className="text-xl font-extrabold text-[var(--color-darkPrimary)] sm:text-2xl flex items-center gap-2">
                  <FiShield className="text-[var(--color-accent)] h-5 w-5" />
                  10. Contact Information
                </h2>
                <p>
                  If you have questions about these Terms of Service or need to request a formal business service Level Agreement (SLA) contract, reach out to our legal department:
                </p>
                <div className="pt-2 text-xs sm:text-sm font-semibold space-y-1 text-[var(--color-primary)]">
                  <p>Email: <a href="mailto:support@secusync.com" className="text-[var(--color-secondary)] hover:underline">support@secusync.com</a></p>
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
          Need a signed Enterprise SLA? <Link to="/contact" className="text-[var(--color-secondary)] font-bold hover:underline">Contact sales operations</Link> to schedule a call.
        </p>
      </section>

    </div>
  );
}

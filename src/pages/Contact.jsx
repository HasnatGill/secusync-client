import { useState } from "react";
import Button from "../components/common/Button";
import { FiMail, FiPhone, FiCheck, FiUser, FiBriefcase, FiUsers, FiMessageSquare, FiSend, FiClock } from "react-icons/fi";

export default function Contact() {

  const [formData, setFormData] = useState({ name: "", email: "", company: "", guards: "1-10", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-16 md:py-24 animate-fade-in">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--color-lightcyan)]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-accent)]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Grid background layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,rgba(31,200,227,0.06),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative mx-auto max-w-[75%] px-6 lg:px-8">

        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">

          {/* Left Column Copy & Details */}
          <div className="lg:col-span-5 text-left space-y-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/30 shadow-[0_2px_10px_-3px_rgba(31,200,227,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              Get in Touch
            </span>

            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-4xl md:text-5xl leading-tight">
              Request a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] font-extrabold">
                SecuSync Demo
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[var(--color-caption)] leading-relaxed max-w-md">
              Book a demo and see how SecuSync helps security companies manage scheduling, workforce operations, mobile patrols, reports, and real-time tracking more efficiently.
            </p>

            {/* Checklist */}
            <ul className="space-y-4 pt-4 border-l-2 border-[var(--color-lightcyan)] pl-4">
              {[
                "Personalized operations setup walk-through",
                "Full contract indexation pricing calculator",
                "Live team onboarding checklists and docs",
                "Interactive review of GPS and mobile workflows"
              ].map((item, idx) => (
                <li key={idx} className="group flex items-center gap-3 text-xs sm:text-sm font-semibold text-[var(--color-caption)] transition-all duration-300 hover:translate-x-1">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] border border-[var(--color-accent)]/20 shadow-sm transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-accent)] group-hover:scale-110">
                    <FiCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="group-hover:text-[var(--color-primary)] transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Details Cards */}
            <div className="border-t border-slate-100 pt-8 space-y-4">
              <a
                href="tel:+31208003920"
                className="group flex gap-4 p-5 rounded-2xl border border-[var(--color-lightcyan)]/30 bg-white/50 backdrop-blur-xs hover:bg-white hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.01] cursor-pointer block text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)] shadow-[var(--shadow-glow)] transition-all duration-300 group-hover:rotate-6">
                  <FiPhone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold text-[var(--color-primary)]">Talk to Sales</h4>
                  <p className="text-xs text-[var(--color-caption)] mt-1">Get custom enterprise volume pricing and custom SLAs.</p>
                  <p className="text-sm font-bold text-[var(--color-accentDark)] mt-2 flex items-center gap-1 group-hover:text-[var(--color-secondary)] transition-colors">
                    +31 (0) 20 800 3920
                  </p>
                </div>
              </a>

              <a
                href="mailto:support@secusync.com"
                className="group flex gap-4 p-5 rounded-2xl border border-[var(--color-lightcyan)]/30 bg-white/50 backdrop-blur-xs hover:bg-white hover:border-[var(--color-accent)]/30 hover:shadow-[var(--shadow-glow)] transition-all duration-300 hover:scale-[1.01] cursor-pointer block text-left"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-primary)] text-[var(--color-accent)] shadow-[var(--shadow-glow)] transition-all duration-300 group-hover:rotate-6">
                  <FiMail className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-extrabold text-[var(--color-primary)]">Technical Support</h4>
                  <p className="text-xs text-[var(--color-caption)] mt-1">24/7 help desk for setup, API, and offline app issues.</p>
                  <p className="text-sm font-bold text-[var(--color-accentDark)] mt-2 flex items-center gap-1 group-hover:text-[var(--color-secondary)] transition-colors">
                    support@secusync.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[var(--color-lightcyan)]/60 shadow-[var(--shadow-card3d)] hover:shadow-2xl transition-all duration-500 relative">

            {submitted ? (
              <div className="text-center py-16 px-4 space-y-6 animate-fade-in">
                <div className="relative mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] border border-[var(--color-accent)]/30 shadow-[var(--shadow-glow)]">
                  <div className="absolute inset-0 rounded-full bg-[var(--color-accent)]/10 animate-ping" />
                  <FiCheck className="h-10 w-10 text-[var(--color-accentDark)] relative z-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-[var(--color-primary)]">Request Received!</h3>
                  <p className="text-sm text-[var(--color-caption)] max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. One of our senior platform onboarding architects will contact you within the next 2 hours.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-3 pt-4 text-xs text-[var(--color-caption)] bg-[var(--color-lightcyan)]/30 border border-[var(--color-lightcyan)]/50 rounded-2xl p-4 max-w-sm mx-auto">
                  <FiClock className="h-4 w-4 text-[var(--color-accentDark)] shrink-0" />
                  <span>Average response time today: <strong className="text-[var(--color-primary)]">14 minutes</strong></span>
                </div>
                <div className="pt-6">
                  <Button onClick={() => setSubmitted(false)} variant="secondary">
                    Send another request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div className="space-y-2 mb-2">
                  <h3 className="text-2xl font-extrabold text-[var(--color-darkPrimary)]">Request Demo & Consultation</h3>
                  <p className="text-sm text-[var(--color-caption)]">Complete the form below to book your free sandbox environment.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">Your Name</label>
                    <div className="relative rounded-xl shadow-xs group">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <FiUser className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Sterling"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 transition-all duration-300 focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">Work Email</label>
                    <div className="relative rounded-xl shadow-xs group">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <FiMail className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" />
                      </div>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. m.sterling@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 transition-all duration-300 focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/10 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">Company Name</label>
                    <div className="relative rounded-xl shadow-xs group">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <FiBriefcase className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Sterling Protective Ltd"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 transition-all duration-300 focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/10 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">Active Workforce Size</label>
                    <div className="relative rounded-xl shadow-xs group">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                        <FiUsers className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" />
                      </div>
                      <select
                        value={formData.guards}
                        onChange={(e) => setFormData({ ...formData, guards: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-10 text-sm text-gray-800 transition-all duration-300 focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/10 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="1-10">1 - 10 Guards</option>
                        <option value="11-50">11 - 50 Guards</option>
                        <option value="51-200">51 - 200 Guards</option>
                        <option value="200+">200+ Guards</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <svg className="h-4 w-4 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider block">How can we help you?</label>
                  <div className="relative rounded-xl shadow-xs group">
                    <div className="pointer-events-none absolute top-3 left-3.5">
                      <FiMessageSquare className="h-4.5 w-4.5 text-slate-400 group-focus-within:text-[var(--color-accent)] transition-colors duration-300" />
                    </div>
                    <textarea
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your requirements or operational issues..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 py-3 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 transition-all duration-300 focus:bg-white focus:border-[var(--color-accent)] focus:ring-4 focus:ring-[var(--color-accent)]/10 focus:outline-none resize-none"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="group/btn w-full rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primaryLight)] text-white font-extrabold text-sm py-4 text-center transition-all duration-300 cursor-pointer hover:from-[var(--color-darkPrimary)] hover:to-[var(--color-primary)] hover:shadow-[var(--shadow-glow)] shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Submit Demo Request</span>
                    <FiSend className="h-4 w-4 text-[var(--color-accent)] transition-all duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>

                <p className="text-[10px] text-center text-slate-400">
                  By submitting, you agree to receive follow-up emails in accordance with our Privacy Policy.
                </p>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

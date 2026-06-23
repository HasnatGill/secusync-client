import { useState } from "react";
import Button from "../components/common/Button";
import { FiMail, FiPhone, FiCheck, FiShield } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    guards: "1-10",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column Copy & Details */}
          <div className="lg:col-span-5 text-left space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
              <FiShield className="h-3.5 w-3.5 text-[var(--color-accent)]" />
              Get in Touch
            </span>
            
            <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-4xl md:text-5xl leading-tight">
              Request a SecuSync Demo
            </h1>

            <p className="text-sm sm:text-base text-[var(--color-caption)] leading-relaxed max-w-md">
              Book a demo and see how SecuSync helps security companies manage scheduling, workforce operations, mobile patrols, reports, and real-time tracking more efficiently.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 pt-2">
              {[
                "Personalized operations setup walk-through",
                "Full contract indexation pricing calculator",
                "Live team onboarding checklists and docs",
                "Interactive review of GPS and mobile workflows"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[var(--color-caption)]">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] mt-0.5 border border-[var(--color-accent)]/20">
                    <FiCheck className="h-3 w-3 text-[var(--color-accent)]" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Details Cards */}
            <div className="border-t border-gray-100 pt-8 space-y-4">
              <div className="flex gap-4 p-4.5 rounded-2xl border border-[var(--color-lightcyan)]/20 bg-[var(--color-lightcyan)]/30">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)] shadow-[var(--shadow-glow)]">
                  <FiPhone className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">Talk to Sales</h4>
                  <p className="text-xs text-[var(--color-caption)] mt-1">Get custom enterprise volume pricing and custom SLAs.</p>
                  <p className="text-sm font-bold text-[var(--color-primary)] mt-1.5">+31 (0) 20 800 3920</p>
                </div>
              </div>

              <div className="flex gap-4 p-4.5 rounded-2xl border border-[var(--color-lightcyan)]/20 bg-[var(--color-lightcyan)]/30">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-primary)] text-[var(--color-accent)] shadow-[var(--shadow-glow)]">
                  <FiMail className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-[var(--color-primary)]">Technical Support</h4>
                  <p className="text-xs text-[var(--color-caption)] mt-1">24/7 help desk for setup, API, and offline app issues.</p>
                  <p className="text-sm font-bold text-[var(--color-secondary)] mt-1.5">support@secusync.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[var(--color-lightcyan)]/50 shadow-[var(--shadow-card3d)] relative">
            
            {submitted ? (
              <div className="text-center py-16 space-y-4">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] mb-2 border border-[var(--color-accent)]/20">
                  <FiCheck className="h-8 w-8 text-[var(--color-accent)]" />
                </span>
                <h3 className="text-2xl font-bold text-[var(--color-primary)]">Request Received!</h3>
                <p className="text-sm text-[var(--color-caption)] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. One of our senior platform onboarding architects will contact you within the next 2 hours.
                </p>
                <div className="pt-4">
                  <Button onClick={() => setSubmitted(false)} variant="secondary">
                    Send another request
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                <h3 className="text-xl font-bold text-[var(--color-darkPrimary)]">Request Demo & Consultation</h3>
                <p className="text-xs text-gray-400">Complete the form below to book your free sandbox environment.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Marcus Sterling"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-accent)] focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase">Work Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. m.sterling@company.com"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-accent)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Sterling Protective Ltd"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-accent)] focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[var(--color-primary)] uppercase">Active Workforce Size</label>
                    <select
                      value={formData.guards}
                      onChange={(e) => setFormData({ ...formData, guards: e.target.value })}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 focus:border-[var(--color-accent)] focus:outline-none"
                    >
                      <option value="1-10">1 - 10 Guards</option>
                      <option value="11-50">11 - 50 Guards</option>
                      <option value="51-200">51 - 200 Guards</option>
                      <option value="200+">200+ Guards</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-[var(--color-primary)] uppercase">How can we help you?</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your requirements or operational issues..."
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[var(--color-accent)] focus:outline-none resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-full bg-[var(--color-primary)] text-white font-bold text-sm py-3 text-center transition-colors cursor-pointer hover:bg-[var(--color-darkPrimary)] hover:shadow-[var(--shadow-glow)] shadow-md"
                  >
                    Submit Demo Request
                  </button>
                </div>

                <p className="text-[10px] text-center text-gray-400">
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

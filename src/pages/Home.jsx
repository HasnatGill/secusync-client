import { homeContent } from "../content/homeContent";
import { caseStudies } from "../content/caseStudies";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import FeatureCard from "../components/common/FeatureCard";
import TestimonialSlider from "../components/common/TestimonialSlider";
import FaqAccordion from "../components/common/FaqAccordion";
import ArticleCard from "../components/common/ArticleCard";
import LogoCloud from "../components/common/LogoCloud";
import PlaceholderImage from "../components/common/PlaceholderImage";
import { FiCheck, FiArrowRight, FiSmartphone, FiShield, FiStar } from "react-icons/fi";

export default function Home() {
  const { hero, valueCards, logoCloud, showcases, benefitsSecondary, mobileApp, testimonials, faqs } = homeContent;

  // Grab first 3 case studies for preview
  const featuredCases = caseStudies.list.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[var(--color-lightcyan)]/30 via-white to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-6 space-y-6 text-left animate-fade-in">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <FiShield className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {hero.badge}
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl md:text-6xl leading-tight">
                {hero.title.split(" ").map((word, index) =>
                  word === "Platform" || word === "Unified" || word === "Security" ? (
                    <span key={index} className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] font-extrabold">{word} </span>
                  ) : (
                    word + " "
                  )
                )}
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-caption)] leading-relaxed max-w-xl">
                {hero.subtitle}
              </p>

              {/* Bullet list */}
              <ul className="space-y-2.5 pt-2">
                {hero.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm font-semibold text-[var(--color-caption)]">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-accent)]">
                      <FiCheck className="h-3 w-3" />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button to="/contact" variant="primary">
                  {hero.ctaPrimary}
                </Button>
                {/* <Button to="/product-overview" variant="secondary" icon={FiArrowRight}>
                  {hero.ctaSecondary}
                </Button> */}
              </div>
            </div>

            {/* Hero Right Composition */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Decorative brand block frame behind image */}
              <div className="absolute -z-10 -bottom-6 -left-6 w-[80%] h-[90%] rounded-3xl bg-[var(--color-primaryLight)]/10 rotate-3"></div>

              {/* Main dashboard placeholder mockup */}
              <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-[var(--color-lightcyan)] overflow-hidden relative">
                <PlaceholderImage type="dashboard" height="h-80" />

                {/* Floating mini stats badge on top-right */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-xs p-3.5 rounded-2xl shadow-xl border border-[var(--color-lightcyan)] flex items-center gap-3 animate-bounce duration-[4000ms]">
                  <div className="h-10 w-10 rounded-xl bg-[var(--color-accent)] text-[var(--color-primary)] flex items-center justify-center">
                    <FiStar className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold text-gray-400 uppercase leading-none">Response SLA</p>
                    <p className="text-sm font-extrabold text-[var(--color-primary)] mt-1">99.8% Perfect</p>
                  </div>
                </div>

                {/* Floating active icon strip at bottom-left */}
                <div className="absolute -bottom-2 -left-2 bg-[var(--color-darkPrimary)] p-2.5 rounded-xl shadow-xl flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-accent)] animate-ping"></span>
                  <span className="text-[9px] font-bold text-white uppercase tracking-widest">Active Dispatch Online</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION CARDS (3-column) */}
      <section className="py-16 md:py-24 bg-white border-t border-[var(--color-lightcyan)]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Key Business Values"
            title="Designed for Operations, Proven in the Field"
            description="Achieve transparency, enforce accountability, and secure your profit margins with built-in private security modules."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valueCards.map((card, i) => (
              <FeatureCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. LOGO CLOUD */}
      <LogoCloud title={logoCloud.title} logos={logoCloud.logos} />

      {/* 4, 5, 6. PRODUCT SHOWCASES (Alternating layout sections) */}
      <section className="py-20 space-y-24 md:space-y-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="System Modules"
            title="End-to-End Private Patrol Software"
            description="Rebuild your daily workflow around connected databases. Monitor, action, and report from a centralized security panel."
          />

          <div className="mt-16 space-y-20 md:space-y-28">
            {showcases.map((showcase, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={showcase.id}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                >

                  {/* Left Column: Visual representation */}
                  <div className={`lg:col-span-6 relative ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="absolute -z-10 -top-4 -left-4 w-full h-full rounded-2xl bg-[var(--color-lightcyan)]/40 scale-102"></div>
                    <div className="rounded-2xl bg-white shadow-lg border border-[var(--color-lightcyan)]/40 p-4">
                      {/* Dynamic Placeholder based on module intent */}
                      <PlaceholderImage type={showcase.placeholderType} height="h-72" />
                    </div>
                  </div>

                  {/* Right Column: Copy & Actions */}
                  <div className={`lg:col-span-6 text-left space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                      {showcase.eyebrow}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[var(--color-darkPrimary)] sm:text-3xl leading-tight">
                      {showcase.title}
                    </h3>
                    <p className="text-[var(--color-caption)] text-sm sm:text-base leading-relaxed">
                      {showcase.description}
                    </p>
                    <div className="pt-2">
                      <Button to={showcase.linkHref} variant="secondary" icon={FiArrowRight}>
                        {showcase.linkText}
                      </Button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SECONDARY BENEFITS (3-column) */}
      <section className="py-16 md:py-24 bg-[var(--color-lightcyan)]/40 border-y border-[var(--color-lightcyan)]/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Scalable Success"
            title="Everything You Need to Succeed"
            description="We build software that scales with your growth, minimizes financial risks, and offers top-tier assistance."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitsSecondary.map((card, i) => (
              <FeatureCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. MOBILE APP SECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                <FiSmartphone className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                {mobileApp.eyebrow}
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-4xl leading-tight">
                {mobileApp.title}
              </h2>
              <p className="text-[var(--color-caption)] leading-relaxed text-sm sm:text-base">
                {mobileApp.description}
              </p>

              {/* App Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {mobileApp.bulletPoints.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] mt-0.5 border border-[var(--color-accent)]/20">
                      <FiCheck className="h-3 w-3 text-[var(--color-accent)]" />
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-caption)]">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button to="/features/guard-tour-system" variant="primary">
                  {mobileApp.ctaText}
                </Button>
              </div>
            </div>

            {/* Right Phone Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <PlaceholderImage type="mobile" height="h-96" className="max-w-md rounded-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* 9. CUSTOMER QUOTES */}
      <section className="py-16 md:py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Success Testimonials"
            title="Trusted by Security Executives"
            description="Hear what operations managers, CEOs, and directors say about moving their workforce management to SecuSync."
          />
          <div className="mt-8">
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* 10. FAQ SECTION */}
      <section className="py-20 md:py-28 bg-white border-t border-[var(--color-lightcyan)]/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

            {/* FAQ Left details */}
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">FAQ</span>
              <h2 className="text-3xl font-extrabold text-[var(--color-darkPrimary)] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--color-caption)] text-sm leading-relaxed max-w-md">
                Can't find the answers you're looking for? Reach out to our customer onboarding team for a personalized platform review.
              </p>
              <div className="pt-2">
                <Button to="/contact" variant="secondary">
                  Contact Support
                </Button>
              </div>
            </div>

            {/* FAQ Accordion Right */}
            <div className="lg:col-span-7">
              <FaqAccordion items={faqs} />
            </div>

          </div>
        </div>
      </section>

      {/* 11. CASE STUDIES PREVIEW SECTION */}
      {/* <section className="py-20 bg-slate-50/30 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Success Stories"
              title="SecuSync in Action"
              description="Learn how other security agencies are scaling up operations, and lowering overhead costs."
              align="left"
              className="max-w-2xl"
            />
            <Button to="/case-studies" variant="secondary" icon={FiArrowRight} className="shrink-0">
              View All Case Studies
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCases.map((story) => (
              <ArticleCard
                key={story.id}
                type="case-study"
                id={story.id}
                title={story.title}
                excerpt={story.excerpt}
                category={story.category}
                statValue={story.statValue}
                statLabel={story.statLabel}
                company={story.company}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* 12. CTA BANNER SECTION (Dark navy gradient card with cyan highlights) */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] px-8 py-12 text-center shadow-[var(--shadow-card3d)] max-w-5xl mx-auto border border-[var(--color-primaryLight)]">
          {/* Decorative wave backgrounds (CSS) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,80 Q200,180 500,80 T1000,80" fill="none" stroke="var(--color-accent)" strokeWidth="3" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white! sm:text-4xl leading-tight">
              Request a SecuSync Demo
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Book a demo and see how SecuSync helps security companies manage scheduling, workforce operations, mobile patrols, reports, and real-time tracking more efficiently.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
              <Button to="/contact" variant="accent">
                Request Demo
              </Button>
              <Button to="/contact" variant="text" className="text-white hover:text-[var(--color-accent)]! font-bold">
                Talk to Sales Specialists
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
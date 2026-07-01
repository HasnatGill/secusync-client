import { useParams, Navigate } from "react-router-dom";
import { featurePages } from "../content/featurePages";
import { blog } from "../content/blog";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import FeatureCard from "../components/common/FeatureCard";
import FaqAccordion from "../components/common/FaqAccordion";
import ArticleCard from "../components/common/ArticleCard";
import PlaceholderImage from "../components/common/PlaceholderImage";
import { FiShield } from "react-icons/fi";

export default function FeatureDetail() {
  const { slug } = useParams();

  // Look up feature details by URL slug
  const feature = featurePages[slug];

  // If slug is invalid, redirect to NotFound
  if (!feature) {
    return <Navigate to="/404" replace />;
  }

  // Pick first 3 blog posts as recommended
  const recommendedArticles = blog.articles.slice(0, 3);

  // Testimonial related to this feature
  const quote = feature.quote;

  return (
    <div className="relative overflow-hidden bg-white">

      {/* 1. HERO SECTION */}
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-gradient-to-b from-[var(--color-lightcyan)]/30 via-white to-white border-b border-[var(--color-lightcyan)]/30">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Column Copy */}
            <div className="lg:col-span-6 space-y-6 text-left animate-fade-in">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-lightcyan)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
                <FiShield className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                Featured Module
              </span>

              <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
                {feature.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-caption)] leading-relaxed max-w-xl">
                {feature.hero.description}
              </p>

              <div className="pt-2">
                <Button to="/contact" variant="primary">
                  {feature.hero.ctaText}
                </Button>
              </div>
            </div>

            {/* Right Column Visual */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Green/Navy frame element */}
              <div className="absolute -z-10 -bottom-5 -left-5 w-[85%] h-[90%] rounded-3xl bg-[var(--color-primaryLight)]/10 rotate-2"></div>

              {/* Main mockup placeholder */}
              <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl border border-[var(--color-lightcyan)]/40 p-4 relative">
                <PlaceholderImage type={feature.hero.placeholderType} height="h-80" />

                {/* Floating card element */}
                <div className="absolute -top-3 -right-3 bg-[var(--color-darkPrimary)] text-white p-3.5 rounded-xl shadow-xl border border-[var(--color-primaryLight)] text-left space-y-1">
                  <p className="text-[9px] font-bold text-[var(--color-accent)] uppercase">Integration Active</p>
                  <p className="text-xs font-bold text-white">Client Sync Live</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MINI FEATURE CARDS (3 Cards) */}
      <section className="py-16 md:py-20 bg-[var(--color-lightcyan)]/10">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.miniCards.map((card, i) => (
              <FeatureCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. DEEP-DIVE SECTIONS (4 Alternating Blocks) */}
      <section className="py-20 md:py-28 space-y-24 md:space-y-32">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">

          <SectionHeader
            eyebrow="Detailed Breakdown"
            title={`Capabilities of ${feature.title}`}
            description="Explore how this module helps security companies plan patrols, secure sites, and invoice cleanly."
          />

          <div className="mt-16 space-y-20 md:space-y-28">
            {feature.deepDives.map((sec, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center ${isEven ? "" : "lg:flex-row-reverse"
                    }`}
                >

                  {/* Left Column Visual */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-2xl bg-white shadow-xl border border-[var(--color-lightcyan)]/40 p-4">
                      <PlaceholderImage type={sec.placeholderType} height="h-72" />
                    </div>
                  </div>

                  {/* Right Column Content */}
                  <div className={`lg:col-span-6 text-left space-y-4 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                      {sec.eyebrow}
                    </span>
                    <h3 className="text-2xl font-extrabold text-[var(--color-darkPrimary)] sm:text-3xl leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-[var(--color-caption)] text-sm sm:text-base leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. MID CTA BANNER (Dark navy gradient block) */}
      <section className="mx-auto max-w-[75%] px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] text-white rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card3d)] text-center relative overflow-hidden max-w-4xl mx-auto border border-[var(--color-primaryLight)]">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h3 className="text-2xl text-white! font-extrabold">Interested in checking this module out in real time?</h3>
            <p className="text-xs sm:text-sm text-slate-300">Schedule a 15-minute operational call with our private security system architects.</p>
            <div className="pt-2">
              <Button to="/contact" variant="accent">
                Book a 15-Min Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER QUOTES SECTION */}
      {quote && (
        <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-100">
          <div className="mx-auto max-w-[75%] px-6 lg:px-8 text-center space-y-6 max-w-3xl">
            <span className="block text-5xl text-[var(--color-accent)]/90 font-serif leading-none">“</span>
            <p className="text-lg sm:text-xl font-medium text-[var(--color-caption)] italic leading-relaxed">
              {quote.text}
            </p>
            <div>
              <h4 className="text-base font-bold text-[var(--color-darkPrimary)]">{quote.name}</h4>
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-secondary)] mt-0.5">
                {quote.role} &bull; <span className="text-gray-500">{quote.company}</span>
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 6. ALL FEATURES AT A GLANCE GRID */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <SectionHeader
            eyebrow="Feature Matrix"
            title="Complete Capability Overview"
            description={`Every tool and utility included inside the ${feature.title} module.`}
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {feature.allFeatures.map((feat, idx) => (
              <FeatureCard
                key={idx}
                icon={feat.icon}
                title={feat.name}
                description={feat.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-16 md:py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5 text-left space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">Module Q&A</span>
              <h2 className="text-3xl font-extrabold text-[var(--color-darkPrimary)] leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--color-caption)] text-sm leading-relaxed max-w-sm">
                Have specific technical questions about software configurations, integrations, or compatibility? Contact our technical assistance team.
              </p>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={feature.faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. RECOMMENDED ARTICLES SECTION */}
      {/* <section className="py-20 bg-white">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <SectionHeader
            eyebrow="Resources"
            title="Recommended Reads for Security Managers"
            description="Stay ahead of market changes and software trends."
            className="mb-12"
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recommendedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                type="blog"
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* 9. FINAL CTA BANNER */}
      <section className="mx-auto max-w-[75%] px-6 lg:px-8 py-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] px-8 py-12 text-center shadow-[var(--shadow-card3d)] max-w-5xl mx-auto border border-[var(--color-primaryLight)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-2xl font-extrabold text-white! leading-tight">
              Request a Demo for the {feature.title} Today
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Set up your guards, map your first route checkpoints, and deliver clean client reports in less than 5 days.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Button to="/contact" variant="accent">
                Request {feature.title} Demo
              </Button>
              <Button to="/contact" variant="text" className="text-white hover:text-[var(--color-accent)]! font-bold">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

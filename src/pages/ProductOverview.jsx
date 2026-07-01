import { productOverview } from "../content/productOverview";
import { homeContent } from "../content/homeContent";
import { blog } from "../content/blog";
import Button from "../components/common/Button";
import SectionHeader from "../components/common/SectionHeader";
import TestimonialSlider from "../components/common/TestimonialSlider";
import ArticleCard from "../components/common/ArticleCard";
import PlaceholderImage from "../components/common/PlaceholderImage";
import { FiCheck, FiArrowRight } from "react-icons/fi";

export default function ProductOverview() {
  const { hero, modules } = productOverview;

  // Recommend first 3 blog posts
  const recommendedArticles = blog.articles.slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-white">

      {/* Hero */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-24 bg-[var(--color-lightcyan)]/30 border-b border-[var(--color-lightcyan)]/80">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <span className="inline-block rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            {hero.badge}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
            {hero.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-caption)] max-w-2xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="pt-2">
            <Button to="/contact" variant="primary">
              {hero.ctaText}
            </Button>
          </div>
        </div>
      </section>

      {/* Stacked Alternating Modules */}
      <section className="py-20 md:py-28 space-y-24 md:space-y-32">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          {modules.map((mod, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={mod.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center py-12 md:py-16 border-b border-[var(--color-lightcyan)]/30 last:border-b-0 ${isEven ? "" : "lg:flex-row-reverse"
                  }`}
              >

                {/* Visual side */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="rounded-2xl bg-white shadow-xl border border-[var(--color-lightcyan)]/30 p-4">
                    <PlaceholderImage type={mod.placeholderType} height="h-72" />
                  </div>
                </div>

                {/* Text side */}
                <div className={`lg:col-span-6 text-left space-y-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] font-mono">
                    {mod.eyebrow}
                  </span>
                  <h2 className="text-2xl font-extrabold text-[var(--color-darkPrimary)] sm:text-3xl">
                    {mod.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[var(--color-caption)] leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 pt-2">
                    {mod.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[var(--color-caption)]">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] mt-0.5 border border-[var(--color-accent)]/20">
                          <FiCheck className="h-3 w-3 text-[var(--color-accent)]" />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button to={mod.linkHref} variant="secondary" icon={FiArrowRight}>
                      {mod.linkText}
                    </Button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <SectionHeader
            eyebrow="Proven Success"
            title="What Our Clients Say About Our Modules"
            description="Our modular platform allows companies of all sizes to integrate their operations seamlessly."
          />
          <div className="mt-8">
            <TestimonialSlider testimonials={homeContent.testimonials} />
          </div>
        </div>
      </section>

      {/* Recommended Articles */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[75%] px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry Resources"
            title="Read More from Our Experts"
            description="Explore our operations guides, tech tips, and industry trends posts."
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
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-[75%] px-6 lg:px-8 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] px-8 py-12 text-center shadow-[var(--shadow-card3d)] max-w-5xl mx-auto border border-[var(--color-primaryLight)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Ready to Upgrade to the Full SecuSync Suite?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Integrate all 7 modules under one operations center. Set up role access for guards, admins, and clients.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Button to="/contact" variant="accent">
                Request Demo
              </Button>
              <Button to="/contact" variant="text" className="text-white hover:text-[var(--color-accent)] font-bold">
                Request Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

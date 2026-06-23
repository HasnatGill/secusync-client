import { useState } from "react";
import { caseStudies } from "../content/caseStudies";
import ArticleCard from "../components/common/ArticleCard";
import Button from "../components/common/Button";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStories = selectedCategory === "All"
    ? caseStudies.list
    : caseStudies.list.filter(item => item.category === selectedCategory);

  return (
    <div className="relative overflow-hidden bg-white">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-[var(--color-lightcyan)]/30 border-b border-[var(--color-lightcyan)]/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <span className="inline-block rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            Client Success
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
            {caseStudies.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-caption)] max-w-2xl mx-auto leading-relaxed">
            {caseStudies.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Categories & Listing */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 mb-12">
            {caseStudies.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--color-primary)] text-white shadow-md hover:shadow-[var(--shadow-glow)]"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of cards */}
          {filteredStories.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStories.map((story) => (
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
          ) : (
            <div className="text-center py-12 text-gray-400">
              No case studies found for the selected category.
            </div>
          )}

        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] px-8 py-12 text-center shadow-[var(--shadow-card3d)] max-w-5xl mx-auto border border-[var(--color-primaryLight)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Want to Achieve Similar Results with SecuSync?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Book a demo and see how SecuSync helps security companies manage scheduling, patrols, and reporting more efficiently.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Button to="/contact" variant="accent">
                Request Demo
              </Button>
              <Button to="/contact" variant="text" className="text-white hover:text-[var(--color-accent)] font-bold">
                Talk to Sales Specialists
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

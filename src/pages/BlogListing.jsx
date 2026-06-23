import { useState } from "react";
import { Link } from "react-router-dom";
import { blog } from "../content/blog";
import ArticleCard from "../components/common/ArticleCard";
import Button from "../components/common/Button";
import PlaceholderImage from "../components/common/PlaceholderImage";
import { FiSearch, FiCalendar, FiClock, FiArrowRight } from "react-icons/fi";

export default function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const allArticles = [blog.featured, ...blog.articles];

  // Filtering logic
  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden bg-white">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 md:pt-16 md:pb-20 bg-[var(--color-lightcyan)]/30 border-b border-[var(--color-lightcyan)]/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-6 max-w-4xl">
          <span className="inline-block rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            SecuSync Blog
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-5xl leading-tight">
            {blog.hero.title}
          </h1>
          <p className="text-base sm:text-lg text-[var(--color-caption)] max-w-2xl mx-auto leading-relaxed">
            {blog.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Listing and Search Controls */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          
          {/* Controls row */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {blog.categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[var(--color-primary)] text-white shadow-xs hover:shadow-[var(--shadow-glow)]"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input Mockup */}
            <div className="relative w-full max-w-xs shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <FiSearch className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-[var(--color-primary)] placeholder-gray-400 focus:border-[var(--color-accent)] focus:outline-none"
              />
            </div>
          </div>

          {/* Featured Article Layout */}
          {selectedCategory === "All" && searchQuery === "" && (
            <div className="mb-16">
              <div className="group grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center rounded-3xl border border-gray-100 bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300">
                
                {/* Visual */}
                <div className="lg:col-span-7 rounded-2xl overflow-hidden">
                  <PlaceholderImage type="illustration" height="h-80" className="transition-transform duration-500 group-hover:scale-[1.01]" />
                </div>

                {/* Info details */}
                <div className="lg:col-span-5 text-left space-y-4">
                  <span className="inline-block rounded-full bg-slate-900/80 backdrop-blur-xs px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    {blog.featured.category}
                  </span>
                  
                  <h2 className="text-xl font-bold text-[var(--color-darkPrimary)] sm:text-2xl leading-snug group-hover:text-[var(--color-accent)] transition-colors">
                    <Link to={`/blog/${blog.featured.id}`}>
                      {blog.featured.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-[var(--color-caption)] leading-relaxed line-clamp-3">
                    {blog.featured.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-[var(--color-caption)] font-semibold pt-2">
                    <span>By {blog.featured.author}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><FiCalendar /> {blog.featured.date}</span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1"><FiClock /> {blog.featured.readTime}</span>
                  </div>

                  <div className="pt-4">
                    <Button to={`/blog/${blog.featured.id}`} variant="primary" icon={FiArrowRight}>
                      Read Article
                    </Button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Remaining Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles
                // Skip featured article in grid if we are displaying it above
                .filter((art) => !(selectedCategory === "All" && searchQuery === "" && art.id === blog.featured.id))
                .map((article) => (
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
          ) : (
            <div className="text-center py-12 text-gray-400">
              No articles found matching your query.
            </div>
          )}

        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-darkPrimary)] px-8 py-12 text-center shadow-[var(--shadow-card3d)] max-w-5xl mx-auto border border-[var(--color-primaryLight)]">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Get Security Insights Delivered
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Join 4,000+ security directors who receive our bi-weekly newsletter with operations checklists.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="rounded-full border border-gray-200 bg-white px-5 py-3 text-sm focus:border-[var(--color-accent)] focus:outline-none w-64 shadow-xs"
              />
              <Button to="/contact" variant="accent">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

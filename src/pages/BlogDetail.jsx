import { useParams, Link, Navigate } from "react-router-dom";
import { blog } from "../content/blog";
import ArticleCard from "../components/common/ArticleCard";
import PlaceholderImage from "../components/common/PlaceholderImage";
import { FiCalendar, FiClock, FiArrowLeft, FiUser } from "react-icons/fi";

export default function BlogDetail() {
  const { id } = useParams();

  // Combine featured and regular articles
  const allArticles = [blog.featured, ...blog.articles];
  const article = allArticles.find((art) => art.id === id);

  // If article not found, redirect to Blog listing or NotFound
  if (!article) {
    return <Navigate to="/404" replace />;
  }

  // Get related articles (exclude current one, grab up to 3)
  const relatedArticles = allArticles
    .filter((art) => art.id !== id)
    .slice(0, 3);

  return (
    <div className="relative overflow-hidden bg-white py-12 md:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-left">
        
        {/* Back Link */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-caption)] hover:text-[var(--color-accentDark)] transition-colors mb-8"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Article Metadata */}
        <div className="space-y-4">
          <span className="inline-block rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20">
            {article.category}
          </span>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--color-darkPrimary)] sm:text-4xl md:text-5xl leading-tight">
            {article.title}
          </h1>

          {/* Author Strip */}
          <div className="flex items-center gap-4 text-xs sm:text-sm text-[var(--color-caption)] font-semibold border-y border-[var(--color-lightcyan)]/40 py-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="h-8 w-8 rounded-full bg-[var(--color-lightcyan)] text-[var(--color-primary)] flex items-center justify-center border border-[var(--color-accent)]/20">
                <FiUser className="h-4 w-4 text-[var(--color-accent)]" />
              </span>
              <div>
                <p className="text-[var(--color-primary)] font-bold leading-none">{article.author}</p>
                {article.authorRole && <p className="text-[10px] text-gray-500 mt-0.5 leading-none">{article.authorRole}</p>}
              </div>
            </div>
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="flex items-center gap-1"><FiCalendar /> {article.date}</span>
            <div className="h-4 w-px bg-gray-200"></div>
            <span className="flex items-center gap-1"><FiClock /> {article.readTime}</span>
          </div>
        </div>

        {/* Hero Illustration */}
        <div className="my-8 rounded-2xl overflow-hidden shadow-md">
          <PlaceholderImage type="illustration" height="h-96" />
        </div>

        {/* Article content */}
        <article 
          className="prose prose-slate max-w-none text-[var(--color-caption)] leading-relaxed space-y-6 pt-4 text-base sm:text-lg"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <div className="mt-20 pt-12 border-t border-[var(--color-lightcyan)]/40">
            <h3 className="text-2xl font-extrabold text-[var(--color-darkPrimary)] mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((art) => (
                <ArticleCard 
                  key={art.id}
                  type="blog"
                  id={art.id}
                  title={art.title}
                  excerpt={art.excerpt}
                  category={art.category}
                  date={art.date}
                  readTime={art.readTime}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

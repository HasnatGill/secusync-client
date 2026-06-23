import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiClock } from "react-icons/fi";
import PlaceholderImage from "./PlaceholderImage";

export default function ArticleCard({ 
  type = "blog", 
  id, 
  title, 
  excerpt, 
  category, 
  date, 
  readTime, 
  statValue, 
  statLabel,
  company 
}) {
  const detailLink = type === "blog" ? `/blog/${id}` : `/case-studies`;

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-primary-light">
      
      {/* Visual Header */}
      <div className="relative overflow-hidden">
        {/* Placeholder image representation */}
        <PlaceholderImage 
          type={type === "blog" ? "illustration" : "checklist"} 
          height="h-48" 
          className="transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Category tag */}
        <span className="absolute top-4 left-4 rounded-full bg-slate-900/80 backdrop-blur-xs px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 text-left">
        {type === "case-study" && (
          <span className="text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
            {company}
          </span>
        )}

        <h3 className="text-lg font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
          <Link to={detailLink}>{title}</Link>
        </h3>
        
        <p className="mt-3 text-sm text-gray-500 leading-relaxed line-clamp-3">
          {excerpt}
        </p>

        {/* Case Study Specific: Stat Highlight */}
        {type === "case-study" && statValue && (
          <div className="mt-4.5 mb-2.5 p-3 rounded-xl bg-primary-light/40 border border-primary-light/50 flex items-center justify-between">
            <span className="text-xs font-bold text-gray-700">{statLabel}</span>
            <span className="text-base font-extrabold text-primary">{statValue}</span>
          </div>
        )}

        {/* Spacer */}
        <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
          {/* Blog Meta */}
          {type === "blog" ? (
            <div className="flex items-center gap-3 text-[11px] text-gray-400 font-semibold">
              <span className="flex items-center gap-1"><FiCalendar /> {date}</span>
              <span>&bull;</span>
              <span className="flex items-center gap-1"><FiClock /> {readTime}</span>
            </div>
          ) : (
            <span className="text-[11px] text-gray-400 font-bold uppercase">Success Story</span>
          )}

          {/* Link action */}
          <Link 
            to={detailLink} 
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-700 group-hover:bg-primary group-hover:text-white transition-colors"
            aria-label="Read more"
          >
            <FiArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

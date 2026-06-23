import * as FiIcons from "react-icons/fi";

export default function FeatureCard({ icon, title, description, className = "" }) {
  // Dynamically resolve icon from string
  const IconComponent = FiIcons[icon] || FiIcons.FiCheckSquare;

  return (
    <div className={`group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card3d)] hover:border-[var(--color-accent)]/40 ${className}`}>
      {/* Icon frame */}
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-lightcyan)] text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-accent)]">
        <IconComponent className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-[var(--color-darkPrimary)] leading-snug">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-caption)] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

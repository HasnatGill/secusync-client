export default function SectionHeader({ 
  eyebrow, 
  title, 
  description, 
  align = "center",
  className = "" 
}) {
  const isCenter = align === "center";
  
  return (
    <div className={`max-w-3xl ${isCenter ? "mx-auto text-center" : "text-left"} ${className} animate-fade-in`}>
      {eyebrow && (
        <span className="inline-block rounded-full bg-[var(--color-lightcyan)] px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[var(--color-primary)] border border-[var(--color-accent)]/20 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

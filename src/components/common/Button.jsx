import { Link } from "react-router-dom";

export default function Button({ 
  children, 
  to, 
  onClick, 
  variant = "primary", 
  className = "", 
  icon: Icon
}) {
  const baseStyle = "inline-flex items-center justify-center gap-2 rounded-full font-bold text-sm transition-all duration-200 focus:outline-none -translate-y-0 active:translate-y-0 cursor-pointer shadow-xs hover:-translate-y-0.5";
  
  const variants = {
    primary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-darkPrimary)] hover:shadow-[var(--shadow-glow)] px-6 py-3",
    secondary: "border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-lightcyan)] hover:shadow-[var(--shadow-border)] px-6 py-3",
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accentDark)] hover:shadow-[var(--shadow-glow)] px-6 py-3",
    text: "text-[var(--color-caption)] hover:text-[var(--color-primary)] px-3 py-2 shadow-none hover:shadow-none hover:translate-y-0"
  };

  const combinedStyles = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
        {Icon && <Icon className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
    </button>
  );
}

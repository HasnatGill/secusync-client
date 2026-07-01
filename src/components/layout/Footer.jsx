import { Link } from "react-router-dom";
import { footerContent } from "../../content/footer";
import { FiMail } from "react-icons/fi";
import whiteLogo from "../../assets/whiteLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-darkPrimary)] text-slate-300 border-t border-[var(--color-primaryLight)] pt-16 pb-8">
      <div className="mx-auto max-w-[85%] px-6 lg:px-8">

        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-6">

          {/* Brand Info (2 columns span on large screens) */}
          <div className="lg:col-span-2 space-y-6 text-left">
            <Link to="/" className="flex items-center">
              <img src={whiteLogo} alt="SecuSync Logo" className="h-11 w-auto object-contain" />
            </Link>

            <p className="text-sm text-slate-400! max-w-sm leading-relaxed">
              {footerContent.brand.tagline}
            </p>
          </div>

          {/* Mapped Menu Columns */}
          {footerContent.sections.map((section) => (
            <div key={section.title} className="space-y-4 text-left">
              <h4 className="text-sm font-bold text-white! uppercase tracking-wider">{section.title}</h4>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="hover:text-[var(--color-accent)] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="space-y-4 text-left">
            <h4 className="text-sm font-bold text-white! uppercase tracking-wider">{footerContent.contact.title}</h4>
            <ul className="space-y-3.5 text-sm">
              {/* <li className="flex items-start gap-2.5">
                <FiMapPin className="h-4 w-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                <span className="leading-tight">{footerContent.contact.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FiPhone className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span>{footerContent.contact.phone}</span>
              </li> */}
              <li className="flex items-center gap-2.5">
                <FiMail className="h-4 w-4 shrink-0 text-[var(--color-accent)]" />
                <span>{footerContent.contact.email}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--color-primaryLight)] mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>{footerContent.brand.copyright}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerContent.legal.map((item) => (
              <Link key={item.label} to={item.href} className="hover:text-[var(--color-accent)] transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
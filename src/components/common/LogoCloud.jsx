export default function LogoCloud({ title, logos }) {
  return (
    <div className="bg-gray-50 py-12 border-y border-gray-100/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {title && (
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-gray-400">
            {title}
          </h3>
        )}
        <div className="mx-auto mt-8 grid max-cols-2 max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="col-span-1 flex justify-center py-2.5 px-4 rounded-xl bg-white border border-gray-200/40 shadow-xs group cursor-pointer hover:border-primary-light transition-all"
            >
              {/* CSS Grayscale Textual Logo Mockup */}
              <span className="text-sm font-extrabold text-gray-400 select-none tracking-tight group-hover:text-primary transition-colors flex items-center gap-1.5 uppercase">
                <span className="h-4.5 w-4.5 rounded bg-gray-200 text-gray-500 font-serif flex items-center justify-center text-[10px] group-hover:bg-primary group-hover:text-white transition-colors">
                  {logo.logoText || logo.name.charAt(0)}
                </span>
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

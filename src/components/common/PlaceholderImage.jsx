import {
  FiMapPin,
  FiUser,
  FiLayers,
  FiCheckCircle,
  FiSmartphone,
  FiBarChart2,
  FiBell
} from "react-icons/fi";

export default function PlaceholderImage({ type = "illustration", height = "h-72", className = "" }) {

  // Dashboard Mockup
  if (type === "dashboard") {
    return (
      <div>
        <img src="https://res.cloudinary.com/dkulkn9be/image/upload/v1783242570/Central_Control_Over_All_Field_Operations_boznau.png" alt="Dashboard" />
      </div>
      // <div className={`relative w-full ${height} rounded-2xl bg-slate-900 text-slate-300 shadow-xl border border-slate-800 overflow-hidden flex flex-col font-sans text-left ${className}`}>
      //   {/* REPLACE WITH REAL DASHBOARD SCREENSHOT */}

      //   {/* Mock Top bar */}
      //   <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
      //     <div className="flex items-center gap-2">
      //       <span className="h-3.5 w-3.5 rounded-full bg-red-500/80"></span>
      //       <span className="h-3.5 w-3.5 rounded-full bg-yellow-500/80"></span>
      //       <span className="h-3.5 w-3.5 rounded-full bg-green-500/80"></span>
      //       <span className="ml-4 text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-md">secusync.com/admin/dashboard</span>
      //     </div>
      //     <div className="flex items-center gap-3 text-slate-500 text-xs">
      //       <FiBell className="h-4 w-4 text-[var(--color-accent)] animate-pulse" />
      //       <div className="h-6 w-6 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-[10px] font-bold">JD</div>
      //     </div>
      //   </div>

      //   {/* Mock Content area */}
      //   <div className="flex flex-1 overflow-hidden">
      //     {/* Sidebar */}
      //     <div className="w-16 md:w-36 bg-slate-950 p-2 border-r border-slate-800 space-y-1 hidden sm:block">
      //       {["Dashboard", "Guards", "Patrols", "Invoicing", "Schedules"].map((item, idx) => (
      //         <div key={item} className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-[10px] font-medium ${idx === 0 ? "bg-[var(--color-primary)]/40 text-[var(--color-accent)] border-l-2 border-[var(--color-accent)]" : "text-slate-500"}`}>
      //           <div className="h-3 w-3 rounded-full bg-current opacity-70"></div>
      //           <span className="hidden md:inline">{item}</span>
      //         </div>
      //       ))}
      //     </div>

      //     {/* Grid Layout */}
      //     <div className="flex-1 p-4 space-y-4 overflow-y-auto">
      //       {/* Stat row */}
      //       <div className="grid grid-cols-3 gap-3">
      //         {[
      //           { title: "Active Guards", val: "24", pct: "100%", color: "text-[var(--color-accent)]" },
      //           { title: "Checkpoint Scans", val: "1,480", pct: "98.4%", color: "text-[var(--color-accent)]" },
      //           { title: "Unresolved Alarms", val: "0", pct: "Cleared", color: "text-slate-400" }
      //         ].map((card, i) => (
      //           <div key={i} className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
      //             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{card.title}</p>
      //             <div className="flex items-baseline gap-2 mt-1.5">
      //               <span className="text-lg font-bold text-white">{card.val}</span>
      //               <span className={`text-[9px] font-bold ${card.color}`}>{card.pct}</span>
      //             </div>
      //           </div>
      //         ))}
      //       </div>

      //       {/* Chart mockup */}
      //       <div className="bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 space-y-2">
      //         <div className="flex items-center justify-between text-xs">
      //           <span className="font-bold text-white">Daily Performance Metrics</span>
      //           <span className="text-[10px] text-slate-500">Live Updates</span>
      //         </div>
      //         {/* Graphic bars */}
      //         <div className="flex items-end justify-between h-20 pt-4 px-2">
      //           {[40, 65, 55, 85, 95, 75, 80, 90, 100].map((h, i) => (
      //             <div key={i} className="w-6 bg-slate-800 rounded-t-sm flex flex-col justify-end" style={{ height: "100%" }}>
      //               <div
      //                 className={`w-full rounded-t-sm ${i === 8 ? "bg-[var(--color-accent)]" : "bg-[var(--color-primary)]"}`}
      //                 style={{ height: `${h}%` }}
      //               />
      //             </div>
      //           ))}
      //         </div>
      //         <div className="flex justify-between text-[8px] text-slate-500 pt-1">
      //           <span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>00:00</span>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }

  // Map Mockup
  if (type === "map") {
    return (
      <div className={`relative w-full ${height} rounded-2xl bg-[var(--color-lightcyan)] text-slate-700 shadow-xl border border-sky-100 overflow-hidden flex items-center justify-center font-sans ${className}`}>
        {/* REPLACE WITH REAL GPS MAP SCREENSHOT */}

        {/* Simulated Map Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1FC8E3_0.8px,transparent_0.8px)] [background-size:16px_16px] opacity-15" />

        {/* Mock Streets */}
        <svg className="absolute inset-0 h-full w-full stroke-sky-200/50 stroke-2 fill-none" xmlns="http://www.w3.org/2000/svg">
          <path d="M -20,80 L 500,80 M -20,200 L 500,200 M 120,-20 L 120,400 M 340,-20 L 340,400 M -20,320 L 500,100" />
          <path d="M 50,50 L 150,150 L 300,100 L 400,280" className="stroke-[var(--color-primary)] stroke-[3px] stroke-dasharray-[6,4]" />
        </svg>

        {/* GPS Pins & Guard Avatars */}
        <div className="absolute top-[80px] left-[120px] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] shadow-md border-2 border-white">
            <FiUser className="h-3.5 w-3.5" />
          </div>
          <span className="mt-1 px-1.5 py-0.5 rounded bg-slate-900 text-white text-[8px] font-bold">Officer A</span>
        </div>

        <div className="absolute top-[180px] right-[100px] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-[var(--color-primary)] shadow-md border-2 border-white animate-bounce">
            <FiMapPin className="h-3.5 w-3.5" />
          </div>
          <span className="mt-1 px-1.5 py-0.5 rounded bg-[var(--color-primary)] text-white text-[8px] font-bold">Dispatch Location</span>
        </div>

        <div className="absolute bottom-[60px] left-[200px] flex flex-col items-center">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-primary)] text-[var(--color-accent)] shadow-md border-2 border-white">
            <FiSmartphone className="h-3.5 w-3.5" />
          </div>
          <span className="mt-1 px-1.5 py-0.5 rounded bg-slate-900 text-white text-[8px] font-bold">Route Point</span>
        </div>

        {/* Floating Mini Map Stats */}
        <div className="absolute top-4 left-4 p-3 bg-white/95 backdrop-blur-xs rounded-xl shadow-md border border-gray-100 space-y-1 text-left">
          <p className="text-[9px] font-bold text-gray-400 uppercase">Active Tour</p>
          <p className="text-xs font-bold text-[var(--color-primary)]">Commercial Patrol B</p>
          <div className="flex gap-4 pt-1">
            <div className="text-[10px]">
              <span className="text-gray-400">ETA:</span> <span className="font-bold text-[var(--color-secondary)]">4 min</span>
            </div>
            <div className="text-[10px]">
              <span className="text-gray-400">Scanned:</span> <span className="font-bold text-[var(--color-secondary)]">8/12</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile App Mockup
  if (type === "mobile") {
    return (
      <div>
        <img src="https://res.cloudinary.com/dkulkn9be/image/upload/v1783242572/Walk_Routs_rdvhlx.png" alt="Mobile App" />
      </div>
    );
  }

  // Checklist / Logbook Mockup
  if (type === "checklist") {
    return (
      <div>
        <img src="https://res.cloudinary.com/dkulkn9be/image/upload/v1783242572/Log_Incidents_with_Photo_Video_Proof_1_jv2ml4.png" alt="Checklist" />
      </div>
    );
  }

  // Illustration / Accent Background Placeholder
  return (
    <div className={`relative w-full ${height} rounded-2xl bg-gradient-to-br from-gray-50 to-[var(--color-lightcyan)]/40 shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden p-8 ${className}`}>
      {/* Decorative Wave elements */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0,100 C 150,200 350,0 500,100 C 650,200 850,0 1000,100 L 1000,300 L 0,300 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#1FC8E3" />
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="text-center max-w-sm space-y-3 z-10">
        {/* Visual box stack layout */}
        <div className="flex justify-center -space-x-4">
          <div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-[var(--color-primary)]">
            <FiLayers className="h-7 w-7" />
          </div>
          <div className="h-16 w-16 rounded-2xl bg-[var(--color-primary)] text-[var(--color-accent)] shadow-lg flex items-center justify-center rotate-6">
            <FiCheckCircle className="h-7 w-7" />
          </div>
          <div className="h-16 w-16 rounded-2xl bg-white border border-gray-100 shadow-md flex items-center justify-center text-[var(--color-secondary)] -rotate-3">
            <FiBarChart2 className="h-7 w-7" />
          </div>
        </div>

        <h4 className="text-base font-bold text-[var(--color-primary)] mt-4">Security Operations Showcase</h4>
        <p className="text-xs text-[var(--color-caption)] leading-normal">
          This premium component acts as a high-fidelity placeholder until real application screenshot visuals are uploaded.
        </p>
      </div>

      {/* Accents */}
      <span className="absolute bottom-4 right-4 text-[9px] font-bold text-[var(--color-primary)] uppercase tracking-widest bg-[var(--color-lightcyan)] px-2 py-0.5 rounded">SecuSync Visual</span>
    </div>
  );
}

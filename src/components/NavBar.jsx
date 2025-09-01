export default function Navbar() {
  return (
    <div className="h-14 w-full bg-navbar-gradient px-4 flex items-center justify-between shadow">
      {/* Left pills */}
      <div className="flex gap-4 ml-6">
        <button className="h-8 px-5 rounded-full bg-[#3A7BD5] text-textDark text-sm font-medium">Home</button>
        <button className="h-8 px-5 rounded-full bg-[#3A7BD5] text-textDark text-sm font-medium">Tasks</button>
        <button className="h-8 px-5 rounded-full bg-[#3A7BD5] text-textDark text-sm font-medium">Calendar</button>
      </div>

      {/* Right: search pill + hamburger */}
      <div className="flex items-center gap-3 mr-3">
        {/* SEARCH PILL (matches image) */}
        <div className="relative">
          <div className="h-9 w-[320px] rounded-full bg-white ring-1 ring-[#9BA6B2]/60 shadow-[0_2px_0_0_rgba(0,0,0,0.35)]">
            <input
              className="h-full w-full rounded-full bg-transparent outline-none text-[13px] leading-none px-4 pr-12 text-[#1C1C1C]"
              aria-label="search"
            />
            {/* inner circular icon button on the right */}
            <button
              aria-label="search-button"
              className="absolute right-1 top-1 h-7 w-7 rounded-full bg-white ring-1 ring-[#9BA6B2] grid place-items-center"
            >
              {/* thin-stroke magnifier like mock */}
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <circle cx="11" cy="11" r="6" fill="none" stroke="#4D5C6B" strokeWidth="1.6"/>
                <path d="M20 20l-4.2-4.2" stroke="#4D5C6B" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* short dark underline shadow under the pill (visual from mock) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-[6px] h-[2px] w-[88%] rounded-full bg-black/55"
          />
        </div>

        {/* hamburger */}
        <button
          className="h-9 w-9 rounded bg-white border border-[#4D5C6B] grid place-items-center"
          aria-label="menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-4 bg-[#1C2530]" />
            <span className="block h-0.5 w-4 bg-[#1C2530]" />
            <span className="block h-0.5 w-4 bg-[#1C2530]" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default function RightPanel({ items = [] }) {
  return (
    <aside className="h-full bg-white dark:bg-darkSidebar rounded-l-3xl shadow-inner relative px-6">
      {/* Top actions: camera (circle) + plus (square) */}
      <div className="pt-6 flex items-center gap-5">
        <button
          className="h-9 w-9 rounded-full grid place-items-center bg-coral hover:bg-coralHover transition"
          aria-label="start-meet"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white">
            <path
              fill="currentColor"
              d="M17 10.5V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2h10a2 2 0 002-2v-3.5l4 4v-11l-4 4z"
            />
          </svg>
        </button>

        <button className="h-9 w-9 rounded-md grid place-items-center bg-coral hover:bg-coralHover transition" aria-label="add-participant">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white"><path fill="currentColor" d="M12 5v6m3-3H9m11 9a2 2 0 01-2 2H6a2 2 0 01-2-2v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1zM16 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
        </button>

        {/* Coral square + icon */}
        <button
          className="h-9 w-9 rounded-md grid place-items-center bg-coral hover:bg-coralHover transition"
          aria-label="add-channel"
        >
          <span className="text-white text-xl leading-none">+</span>
        </button>
      </div>

      {/* Coral list buttons with labels */}
      <div className="mt-16 space-y-4">
        {(items.length ? items : ["default-channel", "Messages", "AI-Assistant"]).map((label, i) => (
          <button
            key={i}
            className="h-10 w-full rounded-md bg-coral hover:bg-coralHover transition px-4 text-left text-sm font-medium text-textDark"
          >
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}

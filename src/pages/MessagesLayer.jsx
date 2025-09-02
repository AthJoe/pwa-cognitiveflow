import ChatArea from "../components/ChatArea";

export default function MessagesLayer() {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Filter Tabs: All | Active */}
      <div className="rounded-xl p-2 bg-white dark:bg-[#1C2530] shadow-sm">
        <div className="flex items-center gap-3">
          {/* Active tab uses gradient */}
          <button className="px-4 py-2 rounded-full bg-gradient-to-r from-[#5EE7DF] to-[#3A7BD5] text-white text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium
                             text-[#1C1C1C] dark:text-[#EAEAEA]">
            Active
          </button>
        </div>
      </div>

      {/* Conversation + Message window */}
      <div className="grid grid-cols-14 gap-20 flex-1 min-h-0">
        {/* Conversation list (left) */}
        <div className="col-span-5 rounded-xl bg-white dark:bg-[#1C2530] shadow-sm overflow-hidden flex flex-col">
          <div className="p-3 border-b border-black/5 dark:border-white/10 text-sm font-semibold
                          text-[#1C1C1C] dark:text-[#EAEAEA]">
            Conversations
          </div>

          <div className="flex-1 overflow-auto divide-y divide-black/5 dark:divide-white/10">
            {/* Pinned AI Assistant row */}
            <div className="p-3 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer"
                 style={{ backgroundColor: "#A66CFF20" }}>
              <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#EAEAEA]">
                AI-Assistant
              </div>
              <div className="text-xs text-[#4D5C6B] dark:text-[#9BA6B2]">
                Pinned assistant chat
              </div>
            </div>

            {/* Example rows (placeholders for now) */}
            {["Atharv", "Sumit", "Manav", "Joey (You)"].map((name, i) => (
              <div key={i} className="p-3 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                <div className="text-sm font-semibold text-[#1C1C1C] dark:text-[#EAEAEA]">
                  {name}
                </div>
                <div className="text-xs text-[#4D5C6B] dark:text-[#9BA6B2] truncate">
                  Last message preview goes here…
                </div>
              </div>
            ))}
          </div>
        </div>


          {/* Use existing ChatArea for the big surface (keeps your spacing) */}
          <div className="flex-1 min-h-0">
            <ChatArea
              incomingClass="bg-[#EAEAEA] dark:bg-[#2A323D] text-[#1C1C1C] dark:text-[#EAEAEA]"
              outgoingClass="bg-gradient-to-r from-[#5EE7DF] to-[#3A7BD5] text-white"
            />
          </div>
      </div>
    </div>
  );
}
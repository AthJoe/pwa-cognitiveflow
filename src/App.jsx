import Navbar from "./components/NavBar";
import ChatArea from "./components/ChatArea";
import RightPanel from "./components/RightPanel";
import MessagesLayer from "./pages/MessagesLayer";
import { useState } from "react";

export default function App() {
  // 'home' (Layer 1) | 'messages' (Layer 2)
  const [view, setView] = useState("home");

  return (
    <div className="min-h-screen bg-[#F7F9FC] dark:bg-[#0E141B] text-[#1C1C1C] dark:text-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-4 py-3 h-screen flex flex-col">
        <Navbar />

        <div className="grid grid-cols-12 gap-6 mt-4 flex-1 min-h-0">
          {/* Center area */}
          <main className="col-span-9 rounded-3xl p-4 bg-transparent min-h-0">
            {view === "messages" ? (
              <MessagesLayer />
            ) : (
              // Your current Layer 1 content stays as-is:
              <div className="h-full flex flex-col">
                <div className="flex-1">
                  {/* Keep your existing homepage center (placeholders or blocks) */}
                  <ChatArea />
                </div>
              </div>
            )}
          </main>

          {/* RightPanel (always visible) */}
          <aside className="col-span-3 min-h-0">
            {/* NEW: provide a callback for the Messages button */}
            <RightPanel onMessagesClick={() => setView("messages")} />
          </aside>
        </div>
      </div>
    </div>
  );
}
import Navbar from "./components/NavBar";
import ChatArea from "./components/ChatArea";
import RightPanel from "./components/RightPanel";

export default function App() {
  return (
    <div className="min-h-screen bg-lightBg text-textLight dark:bg-darkBg dark:text-textDark">
      <Navbar />

      {/* Only center chat + right panel */}
      <div className="h-[calc(100vh-56px)] flex">
        <div className="flex-1">
          <ChatArea />
        </div>
        <div className="w-[360px]">
          <RightPanel/>
        </div>
      </div>
    </div>
  );
}

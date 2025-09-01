import InputBar from "./InputBar";

export default function ChatArea() {
  return (
    <main className="relative h-full bg-lightBg dark:bg-darkBg">
      {/* blank center area intentionally minimal per spec */}

      {/* input bar fixed to bottom-left like in image */}
      <div className="absolute left-6 bottom-6">
        <InputBar />
      </div>
    </main>
  );
}

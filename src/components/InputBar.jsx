export default function InputBar() {
  return (
    <div className="h-11 w-[790px] bg-[#9BA6B2] rounded-full flex items-center px-4 shadow">
      {/* paperclip */}
      <button className="mr-3" aria-label="attach">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#1C2530]">
          <path fill="currentColor" d="M16.5 6.5l-7.9 7.9a3 3 0 104.2 4.2l7.2-7.2a5 5 0 10-7.1-7.1L5.6 8.6" stroke="currentColor" strokeWidth="2" h-fill="none"/>
        </svg>
      </button>

      <input
        className="flex-1 bg-transparent outline-none text-sm text-textLight placeholder:text-textLight/70"
        placeholder=""
      />

      {/* send */}
      <button className="ml-3 h-8 w-8 rounded-full grid place-items-center bg-[#9BA6B2] border border-[#4D5C6B]" aria-label="send">
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#1C2530]">
          <path fill="currentColor" d="M2 21l21-9L2 3v7l15 2-15 2z"/>
        </svg>
      </button>
    </div>
  );
}

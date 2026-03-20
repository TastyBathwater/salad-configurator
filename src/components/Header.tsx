import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-zinc-800 text-white w-full h-32 flex justify-between items-start px-8 pt-4">
      <a
        href="/"
        className="w-24 h-24 rounded-full border-4 border-[#A2D135] flex items-center justify-center flex-col -mt-2 bg-zinc-800 shadow-lg"
      >
        <span className="text-sm font-semibold">Fresh Food Factory</span>
        <span className="text-xs font-bold">FRESSE</span>
      </a>

      <h1 className="text-3xl font-black tracking-widest mt-6">
        BOWL-LASKURI
      </h1>
      <div className="bg-[#A2D135] text-black rounded-b-3xl rounded-t-xl px-6 py-4 flex flex-col gap-2 min-w-[200px] shadow-md">
        <span>Menu Item 1</span>
        <span>Menu Item 2</span>
        <span>Menu Item 3</span>
      </div>
    </header>
  );
};

export default Header;

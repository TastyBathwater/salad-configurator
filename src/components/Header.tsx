import React, { FC } from "react";

const Header: FC = () => {
  return (
    <header className="bg-zinc-800 text-white w-full">
      <div className="flex items-center gap-2">
        <a
          href="/"
          className="w-24 h-24 rounded-full border-4 border-black/10"
        />
        <div>
          <span className="text-sm font-semibold">Free</span>
          <span className="text-xs font-bold">FRESSE</span>
        </div>
      </div>
      <h1 className="text-3xl font-black tracking-w-[0.5em] bg-black">
        BOWL - LASKURI
      </h1>
      <div className="bg-[#A2D135] text-black rounded-b-[0.5em]">
        <span>Menu Item 1</span>
        <span>Menu Item 2</span>
        <span>Menu Item 3</span>
      </div>
    </header>
  );
};

export default Header;

import React, { FC } from "react";

const Header: FC = () => {
    return (
        <header className="bg-zinc-800 text-white w-full p-4">
            <div className="flex items-center gap-2">
                <a href="/" className="w-12 h-12 rounded-full bg-gray-600">
                </a>
                <div>
                    <span className="text-sm font-semibold">Free</span>
                    <span className="text-xs font-bold">FRESS</span>
                </div>
            </div>
            <h1 className="text-3xl font-black mt-4">
                BOWL - LASKURI
            </h1>
            <div className="bg-[#A2D135] text-black rounded p-2 mt-4 flex gap-4">
                <span>Menu Item 1</span>
                <span>Menu Item 2</span>
                <span>Menu Item 3</span>
            </div>
        </header>
    );
};

export default Header;

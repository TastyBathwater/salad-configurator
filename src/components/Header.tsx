import React, { FC } from "react";
import { Link } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className="bg-zinc-800 text-white w-full p-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                    {/* Logo placeholder */}
                </Link>
                <div>
                    <span className="text-sm font-semibold">Free</span>
                    <span className="text-xs font-bold">FRESS</span>
                </div>
            </div>
            <h1 className="text-3xl font-black mt-4">
                BOWL - LASKURI
            </h1>
            <div className="bg-[#A2D135] text-black rounded p-2 mt-4 flex gap-4">
                <Link to="/" className="hover:opacity-80">Configurator</Link>
                <Link to="/community" className="hover:opacity-80">Saved recipes</Link>
                <Link to="/print" className="hover:opacity-80">Print</Link>
            </div>
        </header>
    );
};

export default Header;
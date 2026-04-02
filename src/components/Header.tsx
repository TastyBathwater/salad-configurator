import React from "react";
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-zinc-800 text-white w-full h-32 flex justify-between items-start px-8 pt-4">
            <div className="flex items-center gap-2">
                <Link to="/" className="w-12 h-12 rounded-full bg-gray-600">
                </Link>
                <div>
                    <span className="text-sm font-semibold">Sama</span>
                    <span className="text-xs font-bold">Salaatti</span>
                </div>
            </div>
            <h1 className="text-3xl font-black mt-4">
                BOWL - LASKURI
            </h1>
             <div className="bg-[#A2D135] text-black rounded-b-3xl rounded-t-xl px-6 py-4 flex flex-col gap-2 min-w-[200px] shadow-md">
                 <span>Menu Item 1</span>
                 <span>Menu Item 2</span>
                 <span>Menu Item 3</span>
             </div>
            <div className="bg-[#A2D135] text-black rounded p-2 mt-4 flex gap-4">
                <Link to="/" className="hover:opacity-80">Configurator</Link>
                <Link to="/community" className="hover:opacity-80">Saved recipes</Link>
                <Link to="/print" className="hover:opacity-80">Print</Link>
            </div>
        </header>
    );
};

export default Header;
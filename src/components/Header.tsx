import React, { useState } from "react";
import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleLogin = (email: string, password: string) => {
        console.log('Login attempt:', { email, password });
    };

    return (
        <header className="bg-zinc-800 text-white w-full">
            <div className="flex justify-between items-center px-8 pt-4">
                <div className="flex items-center gap-2">
                    <Link to="/" className="w-12 h-12 rounded-full bg-gray-600">
                    </Link>
                    <div>
                        <span className="text-sm font-semibold">Sama</span>
                        <span className="text-xs font-bold">Salaatti</span>
                    </div>
                </div>
            <h1 className="text-3xl font-black">
                BOWL - LASKURI
            </h1>
            <div className="flex items-center gap-4">
                <button 
                        onClick={() => setIsLoginOpen(true)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors text-sm"
                    >
                        Login
                    </button>

            
             <button 
                    onClick={toggleMenu}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
            </div>
                <div className="hidden md:block w-24"></div>
            </div>
            <div className="hidden md:block bg-[#A2D135] text-black rounded p-2 mt-4 mx-8">
                <div className="flex gap-4">
                    <Link to="/" className="hover:opacity-80">Configurator</Link>
                    <Link to="/community" className="hover:opacity-80">Saved recipes</Link>
                    <Link to="/print" className="hover:opacity-80">Print</Link>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-[#A2D135] text-black rounded-b-3xl rounded-t-xl p-4 mt-4 mx-4 flex flex-col gap-2 shadow-md">
                    <Link 
                        to="/" 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:opacity-80 py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors"
                    >
                        Configurator
                    </Link>
                    <Link 
                        to="/community" 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:opacity-80 py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors"
                    >
                        Saved recipes
                    </Link>
                    <Link 
                        to="/print" 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:opacity-80 py-2 px-4 rounded hover:bg-green-600 hover:text-white transition-colors"
                    >
                        Print
                    </Link>
                </div>
            )}
             <LoginModal 
                isOpen={isLoginOpen} 
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
            />
        </header>
    );
};

export default Header;
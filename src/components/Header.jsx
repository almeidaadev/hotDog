import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-yellow-500">
            <div className="container mx-auto flex justify-between items-center p-5">
                <div className="text-white text-3xl font-bold">
                    Dogão Delícia
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-white hover:text-gray-300">
                        Home
                    </a>
                    <a href="#menu" className="text-white hover:text-gray-300">
                        Cardápio
                    </a>
                    <a href="#about" className="text-white hover:text-gray-300">
                        Sobre Nós
                    </a>
                    <a
                        href="#contact"
                        className="text-white hover:text-gray-300"
                    >
                        Contato
                    </a>
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={
                                    isOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16m-7 6h7"
                                }
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <nav className="md:hidden bg-yellow-500">
                    <a
                        href="#home"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                    >
                        Home
                    </a>
                    <a
                        href="#menu"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                    >
                        Cardápio
                    </a>
                    <a
                        href="#about"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                    >
                        Sobre Nós
                    </a>
                    <a
                        href="#contact"
                        className="block px-4 py-2 text-white hover:bg-yellow-600"
                    >
                        Contato
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
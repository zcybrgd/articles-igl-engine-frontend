import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-[#FFBA00] p-4 w-screen">
            <div className="container mx-auto flex justify-between items-center space-x-6">
                <Link to="/" className="text-white text-xl font-bold">
                    My Website
                </Link>
                <Link to="/" className="text-white hover:text-gray-300">
                    Home
                </Link>
                <Link to="/" className="text-white hover:text-gray-300">
                    About
                </Link>
                <Link to="/" className="text-white hover:text-gray-300">
                    Contact
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;

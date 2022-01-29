import React, { useState } from 'react';

export default function Navbar() {

    const [openNavber, setOpenNavbar] = useState(false);
    const listStyle = "block md:inline-block mt-3 md:mt-0 mr-4 text-zinc-700 hover:text-amber-400";

    return (
        <nav className="flex fixed flex-wrap items-center inset-x-0 justify-between bg-white p-5 drop-shadow-b">
            <a href="/" className="flex items-center flex-shrink-0 text-zinc-700">
                <span className="font-semibold text-xl tracking-wide ml-2">Phanpaporn Z.</span>
            </a>
            <div className="block md:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-zinc-700 hover:text-amber-400 hover:border-amber-400"
                        onClick={() => setOpenNavbar(!openNavber)}>
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div className={`md:flex w-full items-center md:w-auto ${openNavber ? "flex" : "hidden"}`}>
                <div className="text-sm ml-2">
                    <a href="#aboutme" className={listStyle}>
                        About Me
                    </a>
                    <a href="#mytoolkit" className={listStyle}>
                        My Toolkit
                    </a>
                    <a href="#seniorproject" className={listStyle}>
                        Senior Project
                    </a>
                    <a href="#blogandcontent"  className={listStyle}>
                        Blog & Content
                    </a>
                    <a href="#contact" className={listStyle}>
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

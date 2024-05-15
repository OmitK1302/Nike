import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { cross } from "../assets/icons";
const Nav = () => {

    const[showNav, setShowNav] = useState(false);

  return (
    <header className="padding-x py-8 absolute z-20 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/" >
                <img src={headerLogo} alt="Logo" width={130} height={29}></img>
            </a>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map(navItem => 
                    <li key={navItem.label}>
                        <a href={navItem.href} className="font-montserrat leading-normal text-lg text-slate-gray hover:text-black hover:font-semibold">
                            {navItem.label}
                        </a>
                    </li>
                )}
            </ul>

            <div className="hidden max-lg:block">
                <button onClick={() => setShowNav(!showNav)}><img src={(showNav)? cross : hamburger} alt="hamburger" width={25}/></button>
            </div>

            <ul className={`absolute right-0 top-20 flex flex-col gap-5 w-32 bg-coral-red justify-center items-center py-5 rounded-md text-primary list-none ${!showNav && "hidden"}`}>
                {navLinks.map(navItem => 
                    <li key={navItem.label}>
                        <a href={navItem.href} className="font-montserrat leading-normal text-lg">
                            {navItem.label}
                        </a>
                    </li>
                )}
            </ul>
        </nav>
    </header>
  )
};

export default Nav;
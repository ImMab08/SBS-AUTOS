/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import '../globals.css'

function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  
    return 'light';
  })
  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme ===  "light" ? "dark" : "light")
  }

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').classList.add("dark")
    } else {
      document.querySelector('html').classList.remove("dark")
    }
  }, [theme])

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsRotated(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsRotated(!isRotated)
  };
  const headerRef = useRef(null);
  return (
    <header
      id="landing-header"
      className=" bg-white dark:bg-black p-5 2xl:p-8 md:flex md:justify-center  items-center text-black dark:text-white"
      ref={headerRef}
    >
      <div className="flex items-center">
        <img className= {`w-12 md:hidden ${isRotated ? 'rotate-90 transition-transform duration-300' : 'transition-transform duration-300 ' }`} src="img/bars-svgrepo-com.svg" alt="" onClick={toggleMenu} />
      </div>

      {isMenuOpen && ( // Muestra el menú si isMenuOpen es true
        <nav className={`md:hidden sm:hidden overflow-hidden ${isMenuOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}`}>
          <div className=" my-5 border-b-2"></div>
          <ul className=" text-sm text-center [&>li>a]:font-bold [&>li>a]:text-base [&>li>a]:inline-block [&>li>a]:px-5 [&>li>a]:py-2">
            <li><a href="#" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#" onClick={closeMenu}>Vitrina</a></li>
            <li><a href="#" onClick={closeMenu}>Nosotros</a></li>
            <li><a href="#" onClick={closeMenu}>Servicios</a></li>
            <li><a href="#" onClick={closeMenu}>Contactanos</a></li>
          </ul>
          <div className=" my-5 border-b-2"></div>
        </nav>
      )}

      <nav className=" md:flex sm:hidden hidden">
        <div className="flex items-center">
          <ul className="flex [&>li>a]:font-bold [&>li>a]:text-lg [&>li>a]:inline-block [&>li>a]:mx-5 [&>li>a]:py-2">
            <li className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-xl"><a href="">Inicio</a></li>
            <li className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-xl"><a href="#">Disponibles</a></li>
          </ul>
          {theme === "dark" ? (
              <img src="img/logo-blanco.png" className=" w-36 2xl:w-44 mx-5" alt="" />
          ) : (
              <img src="img/logo.png" className=" w-36 2xl:w-44 mx-5" alt="" />
          )}
          <ul className="flex [&>li>a]:font-bold [&>li>a]:text-lg [&>li>a]:inline-block [&>li>a]:mx-5 [&>li>a]:py-2">  
            <li className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-xl"><Link href={"servicios"}>Servicios</Link></li>
            <li className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black rounded-xl"><Link href={"contacto"}>Contactanos</Link></li>
          </ul>
          
        </div>

      </nav>

      <div className="flex items-center absolute z-10 right-8">
          <button className="" onClick={handleChangeTheme}>
            {theme === "dark" ? (
              <img src="img/sun.svg" className="w-8" alt="" />
            ) : (
              <img src="img/moon.svg" className="w-8" alt="" />
            )}
          </button>
        </div>
    </header>
  );
}

export default Header;
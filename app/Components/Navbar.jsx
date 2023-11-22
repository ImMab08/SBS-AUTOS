/* eslint-disable @next/next/no-img-element */
'use client'
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import '../globals.css'

function Header() {
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
  const menuBackdropRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const listItem = document.querySelectorAll("#landing-header li");

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect();

        menuBackdropRef.current.style.setProperty("--left", `${left}px`);
        menuBackdropRef.current.style.setProperty("--top", `${top}px`);
        menuBackdropRef.current.style.setProperty("--width", `${width}px`);
        menuBackdropRef.current.style.setProperty("--height", `${height}px`);

        menuBackdropRef.current.style.opacity = "1";
        menuBackdropRef.current.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        menuBackdropRef.current.style.opacity = "0";
        menuBackdropRef.current.style.visibility = "hidden";
      });
    });
  }, []);

  useEffect(() => {
    const headerEl = headerRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.9,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const { isIntersecting } = entry;
        if (isIntersecting) {
          const color = entry.target.getAttribute("data-header-color");
          headerEl.style.color = color;
        }
      });
    }, observerOptions);

    const sectionElements = document.querySelectorAll(".landing-section");
    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header
      id="landing-header"
      className=" bg-white p-6 2xl:p-8 md:flex md:justify-between items-center  fixed top-0 w-screen z-40 text-black xl:border-b-4"
      ref={headerRef}
    >
      <div className="flex items-center justify-between ">
        <a href="/">
          <img src="img/logo.png" alt="logo-industriasfranky" className=" w-36 2xl:w-44" />
        </a>
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

      <nav className="hidden md:block sm:hidden ">
        <ul className="flex text-xl 2xl:[&>li>a]:text-2xl [&>li>a]:font-bold [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-base [&>li>a]:inline-block [&>li>a]:px-5 [&>li>a]:py-2">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Vitrina</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Servicios</a></li>
        </ul>
      </nav>
    
      <nav className="">
        <ul className="flex text-sm 2xl:[&>li>a]:text-xl [&>li>a]:font-bold [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:text-base">
          <li className="hidden md:block sm:hidden"><Link href={"contacto"}>Contactanos</Link></li>
        </ul>
      </nav>

      <div
        id="menu-backdrop"
        className={`
          
          absolute bg-gray-200 backdrop-blur-lg rounded
          translate-x-[var(--left)] translate-y-[var(--top)]
          left-0 top-0
          w-[var(--width)] h-[var(--height)]
          transition-all duration-100
          ease-in-out opacity-0 -z-10
        `}
        ref={menuBackdropRef}
      ></div>
    </header>
  );
}

export default Header;